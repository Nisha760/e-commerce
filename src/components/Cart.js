import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TiShoppingCart } from 'react-icons/ti'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import CartCard from './subComponents/CartCard';
import { clearCart } from '../redux/action/cart'
import '../styles/cart.css'
import { useNavigate } from 'react-router-dom';

function Cart() {
    const navigate = useNavigate() ;
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(clearCart());
    }

    const handleBack = () => {
        navigate(-1) ;
    }
    return (
        <div className='cart'>
            <AiOutlineArrowLeft onClick={handleBack}/>
            <div className="heading">
                Cart Summary

            </div>

            {/* <div className='cart-wrapper'> */}
                {

                    cart.length === 0
                        ? (
                            <div className='empty-cart'>
                                <div>
                                    <TiShoppingCart />
                                    <div>
                                        Your cart is empty
                                    </div>
                                </div>

                            </div>
                        )
                        :
                        (
                            <div className='cart-item-container'>
                                {
                                    cart.length !== 0 &&
                                    <div className="clear-cart">
                                        <button onClick={handleDelete}>
                                            Clear Cart
                                        </button>
                                    </div>

                                }

                                {
                                    cart.map((ele) => {
                                        return (
                                            <CartCard
                                                key={ele.id}
                                                id={ele.id}
                                                brand={ele.brand}
                                                title={ele.title}
                                                quantity={ele.quantity}
                                                price={ele.price}
                                                size={ele.size}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                }
            {/* </div> */}




        </div>
    )
}

export default Cart