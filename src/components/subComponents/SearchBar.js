import React from 'react'
import { useRef } from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import {setCurrentDisplayData} from '../../redux/action/data'

function SearchBar() {
    const dispatch = useDispatch() ;
    const searchRef = useRef();
    const handleSearch = () => {
        const value = searchRef.current.value.toLowerCase() ;
        dispatch(setCurrentDisplayData(value)) ;
    }
    return (
        <>
            <input type='text' ref={searchRef} placeholder='Search Item'></input>
            <div onClick={handleSearch}>
                <MdOutlineSearch />
            </div>

        </>
    )
}

export default SearchBar