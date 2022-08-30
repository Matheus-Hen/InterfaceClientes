import React from 'react'

const Label = ({id}) => {
  return (
    <label className="pl-2" htmlFor={id}>{id}: </label>
  )
}

export default Label