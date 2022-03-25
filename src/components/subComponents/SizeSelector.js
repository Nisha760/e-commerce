import React, { useEffect, useRef } from 'react'

function SizeSelector({ value, setValue, selectedValue }) {

    const valueRef = useRef();
    useEffect(() => {
        if (selectedValue == value) {
            valueRef.current.style.fontWeight = "bold";
        } else
            valueRef.current.style.fontWeight = 100;

    }, [selectedValue])

    const handleSize = (e) => {
        setValue(value);

    }
    return (
        <div ref={valueRef} className='size' onClick={handleSize}>
            {value}
        </div>
    )
}

export default SizeSelector