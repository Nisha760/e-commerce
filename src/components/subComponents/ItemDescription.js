import React, { useRef, useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ls from 'local-storage';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { addToCart } from '../../redux/action/cart'
import SizeSelector from './SizeSelector';
import '../../styles/description.css'
import { descriptionContext } from '../../context/description';

function ItemDescription({ id, title, category, brand, size, price, image }) {
    const user = useSelector(state => state.user);
    const cart = useSelector(state => state.cart);
    const { setDescription } = useContext(descriptionContext);
    const dispatch = useDispatch();
    const buttonDivRef = useRef();

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(price);
    const [selectedSize, setSize] = useState(null);


    useEffect(() => {

        setTotalPrice(price * quantity);

    }, [quantity])

    const handleAddItem = () => {

        if (selectedSize === null || selectedSize === true) {
            setSize(true);
            return;
        }

        if (user.name === null) {
            const ele = document.getElementById('ask-login-popup');
            ele.style.display = "block";
            setTimeout(() => {
                ele.style.display = "none"
            }, 2000)
            return ;
        }

        if (selectedSize !== true) {
            console.log(user.name);
            dispatch(addToCart(
                {
                    id,
                    title,
                    brand,
                    quantity,
                    price: totalPrice,
                    image,
                    size: selectedSize
                }
            ));


        }
    }

    const handleBack = () => {
        setDescription(false)
    }
    return (
        <>

            <div className='info-container'>
                <AiOutlineArrowLeft onClick={handleBack} />
                <div className='image'>
                    <img src={image}></img>
                </div>
                <div className='info'>
                    <div className='brand'>
                        {brand}
                    </div>

                    <div className='title'>{title}</div>
                    <div className='size-wrapper'>
                        Select size
                        {
                            selectedSize === true && <span style={{ color: "red", fontSize: "14px", marginLeft: "40px" }}>select size!!</span>
                        }
                        <div className="size-container">
                            {
                                size.map((ele) => {
                                    return (
                                        <SizeSelector key={ele} value={ele} selectedValue={selectedSize} setValue={setSize} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='price'>
                        $ {price}
                    </div>

                    <div className='quantity'>
                        Quantity
                        <input type='number' min='1' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}></input>
                    </div>

                    <div className='container'>
                        <div className='total-price'>
                            Total Price: ${totalPrice}
                        </div>

                        <div ref={buttonDivRef} className='button'>
                            <button onClick={handleAddItem}>
                                Add to cart
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default ItemDescription