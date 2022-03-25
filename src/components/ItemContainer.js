import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import ItemCard from './subComponents/ItemCard';
// import '../styles/items'
import '../styles/items.css'
import { descriptionContext } from '../context/description';
import ItemDescription from './subComponents/ItemDescription';

function ItemContainer() {
    const data = useSelector(state => state.data);
    const { description } = useContext(descriptionContext);
    return (
        <div className='items-container'>
            {
                description === false
                    ? data.currentDisplayData.map((ele) => {
                        return (
                            <ItemCard
                                key={ele.id}
                                id={ele.id}
                                brand={ele.brand}
                                category={ele.category}
                                image={ele.image}
                                price={ele.price}
                                size={ele.size}
                                title={ele.title}
                            />
                        )
                    })
                    : <ItemDescription
                        id={description.id}
                        brand={description.brand}
                        category={description.category}
                        image={description.image}
                        price={description.price}
                        size={description.size}
                        title={description.title}
                    />
            }
        </div>
    )
}

export default ItemContainer