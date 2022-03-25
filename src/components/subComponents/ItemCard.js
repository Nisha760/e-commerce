import React, { useContext, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { descriptionContext } from '../../context/description';


function ItemCard({ id, title, category, brand, size, price, image }) {
    const {setDescription} = useContext(descriptionContext) ;
    


    const handleShowDescription = () =>{
        setDescription({
            id,
            title,
            category,
            brand,
            size,
            price,
            image
        }) ;
    }
    return (
        <div className='item' onClick={handleShowDescription}>
            <div className='img'>
                <img src={image}></img>
            </div>
            <div className='item-info'>
                <div className='brand'>{brand}</div>
                <div className='title'>
                    {title}
                </div>
                <div className='price'>Price: ${price}</div>
                
            </div>
        </div>

    )
}

export default ItemCard