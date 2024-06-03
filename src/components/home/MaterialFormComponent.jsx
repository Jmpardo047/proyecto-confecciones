import React, { useState } from 'react'
import { useMtFormApi } from '../../hooks/useMtFormApi';
import { InputComponent } from './InputComponent';
import { CategoriesComponent } from './CategoriesComponent';
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
        changeState()
    }
    const changeState = () =>{
        hideForm();
    }

  return (
    <>
            <div id="container-form" className="bg-white p-8 rounded-lg shadow-md w-5/6 max-w-4xl form">
                <form id="materiaPrimaForm" className="flex gap-8 relative" onSubmit={handleSubmit}>
                    <div className="flex flex-col w-1/3">
                        <InputComponent type="text" code="name" txt="Nombre:" value={formData.name} onChange={handleChange}></InputComponent>
                        <InputComponent type="text" code="description" txt="Descripcion:" value={formData.description} onChange={handleChange}></InputComponent>
                        <CategoriesComponent code="category" onChange={handleChange}></CategoriesComponent>
                        <InputComponent type="date" code="date" txt="Fecha De Adquisicion:" value={formData.date} onChange={handleChange}></InputComponent>
                    </div>

                    <div className="flex flex-col w-1/3">
                        <InputComponent type="number" code="cost" txt="Costo por Unidad:" value={formData.cost} onChange={handleChange}></InputComponent>
                        <InputComponent type="text" code="measure" txt="Unidad de Medida:" value={formData.measure} onChange={handleChange}></InputComponent>
                        <InputComponent type="number" code="stock" txt="Cantidad En Stock:" value={formData.stock} onChange={handleChange}></InputComponent>
                    </div>

                    <div className="flex flex-col w-1/3">
                        <InputComponent type="text" code="ubication" txt="Ubicacion En Almacen:" value={formData.ubication} onChange={handleChange}></InputComponent>
                        <InputComponent type="text" code="provider" txt="Proveedor:" value={formData.provider} onChange={handleChange}></InputComponent>
                        <InputComponent type="text" code="notes" txt="Notas Adicionales:" value={formData.notes} onChange={handleChange}></InputComponent>
                        <input type="submit" value="Guardar" className="mt-auto bg-violet-700 text-white p-2 rounded hover:bg-violet-900 cursor-pointer" required/>
                    </div>
                    <img onClick={changeState} className='form-x' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAARZJREFUSEvtlU0OgjAQhd9wErwJruACGHbKMVi57DHQnT8XkBXeRC4iNTU0IaR0yk/EBSxpeF/nzbyBsNBDC3Gxgn/m/Gr1/1idRMKXEkcinC+P7Gm7WRKJoJbIb0W24SpgexyHoiQgAFB5hLQP3kDLBlhxcB4ciQNJ5FrQBO9A4RG2nDssWAFjC3wMVGk6gfvg6n0toe11qlT33hlsggPwtZCLve2BGwQ2wL9aQ6GDrNa37faUm/a+WA2q2ADVutaomeDOYNP0vgGfi9qkim2RsUXNtr3Yil1yOgbOgneheOnY2Ka3DSfgdC2ydGrFvloStj2tAQoOif29yLaTfxKcwNhz1uqxwtx3K5hzaLbz1erZrOSEPscnmx9zxYCUAAAAAElFTkSuQmCC"/>
                </form>
            </div>
    </>
  )
}

