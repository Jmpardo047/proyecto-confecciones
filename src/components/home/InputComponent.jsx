import React from 'react'

export const InputComponent = ({txt,type,code,value,onChange}) => {
  return (
    <>
        <label htmlFor={code} className="mb-2 font-bold">{txt}</label>
        <input type={type} name={code} id={code} value={value} onChange={onChange} className="p-2 mb-4 border border-gray-300 rounded" required/>
    </>
  )
}

