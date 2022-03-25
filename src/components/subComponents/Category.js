import React, {useContext, useRef} from 'react'
import { useDispatch } from 'react-redux'
import { descriptionContext } from '../../context/description';
import {setCurrentDisplayData} from '../../redux/action/data'

function Category({value}) {
    const {setDescription} = useContext(descriptionContext)
    const categoryRef = useRef() ;
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setCurrentDisplayData(categoryRef.current.innerText))
        setDescription(false)
    }
  return (
    <div ref={categoryRef} onClick={handleClick}>
        {value}
    </div>
  )
}

export default Category