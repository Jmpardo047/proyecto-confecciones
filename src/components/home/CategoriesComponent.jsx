import React from 'react'

export const CategoriesComponent = ({code,onChange}) => {
  return (
    <>
        <label htmlFor="categories" className="mb-2 font-bold">Categoria</label>
        <select id="categories" name={code} onChange={onChange} className="p-2 mb-4 border border-gray-300 rounded">
          <option defaultValue>Selecciona un tipo</option>
          <option value="tela">tela</option>
          <option value="hilo">hilo</option>
          <option value="boton">boton</option>
          <option value="herramienta">herramienta</option>
          <option value="otros">otro</option>
        </select>
    </>
  )
}


