import React from 'react'

export const InputComponent = ({type,id,value}) => {
  return (
    <>
        <label className="mb-2 font-bold">Nombre:</label>
        <input type="text" name="nombre" id="nombre" value={formData.firstName} onChange={handleChange} className="p-2 mb-4 border border-gray-300 rounded" required/>
    </>
  )
}

