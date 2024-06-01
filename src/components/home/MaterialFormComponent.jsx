import React from 'react'

export const MaterialFormComponent = ({hideForm}) => {
    const changeState = () =>{
        hideForm();
    }
  return (
    <>
            <div id="container-form" className="bg-white p-8 rounded-lg shadow-md w-5/6 max-w-4xl form">
                <form id="materiaPrimaForm" className="flex gap-8 relative">
                    <div className="flex flex-col w-1/3">
                        <label className="mb-2 font-bold">Nombre:</label>
                        <input type="text" name="nombre" id="nombre" className="p-2 mb-4 border border-gray-300 rounded"/>

                        <label htmlFor="descripcion" className="mb-2 font-bold">Descripcion:</label>
                        <input type="text" id="descripcion" name="descripcion" className="p-2 mb-4 border border-gray-300 rounded"/>
                        
                        <label htmlFor="categoria" className="mb-2 font-bold">Categoria:</label>
                        <input type="text" id="categoria" name="categoria" className="p-2 mb-4 border border-gray-300 rounded"/>
                    
                        <label htmlFor="proveedor" className="mb-2 font-bold">Proveedor:</label>
                        <input type="text" id="proveedor" name="proveedor" className="p-2 mb-4 border border-gray-300 rounded"/>
                    </div>

                    <div className="flex flex-col w-1/3">
                        <label htmlFor="costoPorUnidad" className="mb-2 font-bold">Costo por Unidad:</label>
                        <input type="number" step="0.01" name="costoPorUnidad" id="costoPorUnidad" className="p-2 mb-4 border border-gray-300 rounded"/>

                        <label htmlFor="unidadDeMedida" className="mb-2 font-bold">Unidad de Medida:</label>
                        <input type="text" name="unidadDeMedida" id="unidadDeMedida" className="p-2 mb-4 border border-gray-300 rounded"/>

                        <label htmlFor="cantidadEnStock" className="mb-2 font-bold">Cantidad En Stock:</label>
                        <input type="number" step="0.1" name="cantidadEnStock" id="cantidadEnStock" className="p-2 mb-4 border border-gray-300 rounded"/>

                        <label htmlFor="fechaDeAdquisicion" className="mb-2 font-bold">Fecha De Adquisicion:</label>
                        <input type="date" id="fechaDeAdquisicion" name="fechaDeAdquisicion" className="p-2 mb-4 border border-gray-300 rounded"/>
                    </div>

                    <div className="flex flex-col w-1/3">
                        <label htmlFor="ubicacionEnAlmacen" className="mb-2 font-bold">Ubicacion En Almacen:</label>
                        <input type="text" id="ubicacionEnAlmacen" name="ubicacionEnAlmacen" className="p-2 mb-4 border border-gray-300 rounded"/>

                        <label htmlFor="notasAdicionales" className="mb-2 font-bold">Notas Adicionales:</label>
                        <input type="text" id="notasAdicionales" name="notasAdicionales" className="p-2 mb-4 border border-gray-300 rounded"/>

                        <input type="button" value="Guardar" className="mt-auto bg-green-500 text-white p-2 rounded hover:bg-green-600 cursor-pointer"/>
                    </div>
                    <img onClick={changeState} className='form-x' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAPNJREFUSEvtldsRgjAQRU860U6kEqUSS1Er0U6gkzg7kBmGSXaTwIgfyW/gHu7dB46DjjuISwP/LPkW9f9E7eEE3IGXg4/2ZR4uwMPB2XJg1tjDm0lwBPoUfIbKs3JGC54DvomLIBiDr6DyaGelY4JFxUMSXgMVzSxwCj6nEOLNchpqnw1OwKXxwjHjXTZcETgCr4IWRR0IkZqq3Z4aqyLHEWjQLYZng2Pdy7Rc1FHb5FgbGW3UtO1lOs6Z0xp4DniYI1XndAV/Oui3OpY6ypJI7ulFx8uGuzroNv8kLIHaezPqWmHrvQa2EtrtvkW9W5SW0Bdh0Uwfi18YrgAAAABJRU5ErkJggg=="/>
                </form>
            </div>
    </>
  )
}

