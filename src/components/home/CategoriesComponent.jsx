import React from 'react'

export const CategoriesComponent = ({code,onChange}) => {
  return (
    <>
        <label htmlFor="categories" className="mb-2 font-bold">Categoria</label>
        <select id="categories" name={code} onChange={onChange} className="p-2 mb-4 border border-gray-300 rounded">
          <option defaultValue>Selecciona un tipo</option>
          <option value="Jeans">Jeans</option>
          <option value="Chaqueta">Chaqueta</option>
          <option value="Shorts">Shorts</option>
          <option value="Falda">Falda</option>
          <option value="Sweater">Sweater</option>
          <option value="Vestido">Vestido</option>
          <option value="Medias">Medias</option>
          <option value="Camisa">Camisa</option>
        </select>
    </>
  )
}


