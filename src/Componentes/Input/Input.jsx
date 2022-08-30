import React from 'react'
import Label from '../Label/Label'

const Input = ({ Type, Id, EventChange}) => {
    return (
        <div className='flex flex-row justify-between w-[350px] pt-5'>
            <Label id={Id} />
            <input type={Type} id={Id} className="w-[220px]" onChange={EventChange} />
        </div>
    )
}

export default Input