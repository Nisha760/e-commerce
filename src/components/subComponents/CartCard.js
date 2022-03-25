import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import {deleteItem} from '../../redux/action/cart'

function CartCard({id, brand, title, price, size, quantity, image}) {
    const dispatch = useDispatch() ;
    const handleDelete = async() => {
        dispatch(deleteItem(id))
    }
    return (
        <div className='cart-card'>
            <div className="delete">
                <AiFillDelete onClick={handleDelete} />
            </div>
            <div className="brand">
                {brand}
            </div>
            <div className="title">
                {title}
            </div>
            <div className="size">
                Size: {size}
            </div>
            <div className="price">
                Total: ${price}
            </div>
            <div className="quantity">
                Qty: {quantity}
            </div>
        </div>
    )
}

export default CartCard