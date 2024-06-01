import React from 'react'
import { useMtFormApi } from '../../hooks/useMtFormApi';
export const MaterialFormComponent = ({hideForm}) => {

    const {postForm,getApiInfo} = useMtFormApi("/materias_prima")

    const changeState = () =>{
        hideForm();
    }

  return (
    <>
            <div id="container-form" className="bg-white p-8 rounded-lg shadow-md w-5/6 max-w-4xl form">
                <form id="materiaPrimaForm" className="flex gap-8 relative" onSubmit={getApiInfo}>
                    <div className="flex flex-col w-1/3">
                        <label className="mb-2 font-bold">Nombre:</label>
                        <input type="text" name="nombre" id="nombre" className="p-2 mb-4 border border-gray-300 rounded"/>

                        <label htmlFor="descripcion" className="mb-2 font-bold">Descripcion:</label>
                        <input type="text" id="descripcion" name="descripcion" className="p-2 mb-4 border border-gray-300 rounded" required/>
                        
                        <label htmlFor="categoria" className="mb-2 font-bold">Categoria:</label>
                        <input type="text" id="categoria" name="categoria" className="p-2 mb-4 border border-gray-300 rounded" required/>
                    
                        <label htmlFor="proveedor" className="mb-2 font-bold">Proveedor:</label>
                        <input type="text" id="proveedor" name="proveedor" className="p-2 mb-4 border border-gray-300 rounded" required/>
                    </div>

                    <div className="flex flex-col w-1/3">
                        <label htmlFor="costoPorUnidad" className="mb-2 font-bold">Costo por Unidad:</label>
                        <input type="number" step="0.01" name="costoPorUnidad" id="costoPorUnidad" className="p-2 mb-4 border border-gray-300 rounded" required/>

                        <label htmlFor="unidadDeMedida" className="mb-2 font-bold">Unidad de Medida:</label>
                        <input type="text" name="unidadDeMedida" id="unidadDeMedida" className="p-2 mb-4 border border-gray-300 rounded" required/>

                        <label htmlFor="cantidadEnStock" className="mb-2 font-bold">Cantidad En Stock:</label>
                        <input type="number" step="0.1" name="cantidadEnStock" id="cantidadEnStock" className="p-2 mb-4 border border-gray-300 rounded" required/>

                        <label htmlFor="fechaDeAdquisicion" className="mb-2 font-bold">Fecha De Adquisicion:</label>
                        <input type="date" id="fechaDeAdquisicion" name="fechaDeAdquisicion" className="p-2 mb-4 border border-gray-300 rounded" required/>
                    </div>

                    <div className="flex flex-col w-1/3">
                        <label htmlFor="ubicacionEnAlmacen" className="mb-2 font-bold">Ubicacion En Almacen:</label>
                        <input type="text" id="ubicacionEnAlmacen" name="ubicacionEnAlmacen" className="p-2 mb-4 border border-gray-300 rounded" required/>

                        <label htmlFor="notasAdicionales" className="mb-2 font-bold">Notas Adicionales:</label>
                        <input type="text" id="notasAdicionales" name="notasAdicionales" className="p-2 mb-4 border border-gray-300 rounded" required/>

                        <input type="button" onClick={getApiInfo} value="Guardar" className="mt-auto bg-violet-700 text-white p-2 rounded hover:bg-violet-900 cursor-pointer" required/>
                    </div>
                    <img onClick={changeState} className='form-x' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAARZJREFUSEvtlU0OgjAQhd9wErwJruACGHbKMVi57DHQnT8XkBXeRC4iNTU0IaR0yk/EBSxpeF/nzbyBsNBDC3Gxgn/m/Gr1/1idRMKXEkcinC+P7Gm7WRKJoJbIb0W24SpgexyHoiQgAFB5hLQP3kDLBlhxcB4ciQNJ5FrQBO9A4RG2nDssWAFjC3wMVGk6gfvg6n0toe11qlT33hlsggPwtZCLve2BGwQ2wL9aQ6GDrNa37faUm/a+WA2q2ADVutaomeDOYNP0vgGfi9qkim2RsUXNtr3Yil1yOgbOgneheOnY2Ka3DSfgdC2ydGrFvloStj2tAQoOif29yLaTfxKcwNhz1uqxwtx3K5hzaLbz1erZrOSEPscnmx9zxYCUAAAAAElFTkSuQmCC"/>
                </form>
            </div>
    </>
  )
}

