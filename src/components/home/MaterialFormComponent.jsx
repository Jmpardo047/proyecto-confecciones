import React, { useState } from 'react'
import { useMtFormApi } from '../../hooks/useMtFormApi';
export const MaterialFormComponent = ({hideForm}) => {
    const {postForm,getApiInfo} = useMtFormApi("/materias_prima")

    const [formData, setFormData] = useState({
        id:"",
        name:"",
        description:"",
        category:"",
        provider:"",
        cost:"",
        measure:"",
        stock:"",
        date:"",
        ubication:"",
        notes:""
    })

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        postForm(formData)
    }
    const changeState = () =>{
        hideForm();
    }

  return (
    <>
            <div id="container-form" className="bg-white p-8 rounded-lg shadow-md w-5/6 max-w-4xl form">
                <form id="materiaPrimaForm" className="flex gap-8 relative" onSubmit={handleSubmit}>
                    <div className="flex flex-col w-1/3">
                        <label className="mb-2 font-bold">Nombre:</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}  className="p-2 mb-4 border border-gray-300 rounded" required/>

                        <label htmlFor="description" className="mb-2 font-bold">Descripcion:</label>
                        <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} className="p-2 mb-4 border border-gray-300 rounded" required/>
                        
                        <label htmlFor="category" className="mb-2 font-bold">Categoria:</label>
                        <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} className="p-2 mb-4 border border-gray-300 rounded" required/>
                    
                        <label htmlFor="provider" className="mb-2 font-bold">Proveedor:</label>
                        <input type="text" id="provider" name="provider" value={formData.provider} onChange={handleChange} className="p-2 mb-4 border border-gray-300 rounded" required/>
                    </div>

                    <div className="flex flex-col w-1/3">
                        <label htmlFor="cost" className="mb-2 font-bold">Costo por Unidad:</label>
                        <input type="number" step="0.01" name="cost" id="cost" value={formData.cost} onChange={handleChange} className="p-2 mb-4 border border-gray-300 rounded" required/>

                        <label htmlFor="measure" className="mb-2 font-bold">Unidad de Medida:</label>
                        <input type="text" name="measure" id="measure" value={formData.measure} onChange={handleChange} className="p-2 mb-4 border border-gray-300 rounded" required/>

                        <label htmlFor="stock" className="mb-2 font-bold">Cantidad En Stock:</label>
                        <input type="number" step="0.1" name="stock" value={formData.stock} onChange={handleChange} id="stock" className="p-2 mb-4 border border-gray-300 rounded" required/>

                        <label htmlFor="date" className="mb-2 font-bold">Fecha De Adquisicion:</label>
                        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="p-2 mb-4 border border-gray-300 rounded" required/>
                    </div>

                    <div className="flex flex-col w-1/3">
                        <label htmlFor="ubication" className="mb-2 font-bold">Ubicacion En Almacen:</label>
                        <input type="text" id="ubication" name="ubication" value={formData.ubication} onChange={handleChange} className="p-2 mb-4 border border-gray-300 rounded" required/>

                        <label htmlFor="notes" className="mb-2 font-bold">Notas Adicionales:</label>
                        <input type="text" id="notes" name="notes" value={formData.notes} onChange={handleChange} className="p-2 mb-4 border border-gray-300 rounded" required/>

                        <input type="submit" value="Guardar" className="mt-auto bg-violet-700 text-white p-2 rounded hover:bg-violet-900 cursor-pointer" required/>
                    </div>
                    <img onClick={changeState} className='form-x' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAARZJREFUSEvtlU0OgjAQhd9wErwJruACGHbKMVi57DHQnT8XkBXeRC4iNTU0IaR0yk/EBSxpeF/nzbyBsNBDC3Gxgn/m/Gr1/1idRMKXEkcinC+P7Gm7WRKJoJbIb0W24SpgexyHoiQgAFB5hLQP3kDLBlhxcB4ciQNJ5FrQBO9A4RG2nDssWAFjC3wMVGk6gfvg6n0toe11qlT33hlsggPwtZCLve2BGwQ2wL9aQ6GDrNa37faUm/a+WA2q2ADVutaomeDOYNP0vgGfi9qkim2RsUXNtr3Yil1yOgbOgneheOnY2Ka3DSfgdC2ydGrFvloStj2tAQoOif29yLaTfxKcwNhz1uqxwtx3K5hzaLbz1erZrOSEPscnmx9zxYCUAAAAAElFTkSuQmCC"/>
                </form>
            </div>
    </>
  )
}

