const addToCart = (value) => {
    return {
        type: 'add to cart',
        payload: value
    }
}

const setCart = (data) =>{
    return {
        type: 'set cart',
        payload: data
    }
}

const clearCart = () => {
    return {
        type: 'clear cart'
    }
}

const deleteItem = (value) => {
    return {
        type: 'delete item',
        payload: value
    }
}

export { addToCart, clearCart, deleteItem, setCart };