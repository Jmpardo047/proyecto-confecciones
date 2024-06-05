import React from 'react'
import '/src/styles/CardStyles.css'
export const CardComponent = ({data,onDelete}) => {
    let logo = ''
    const handleDeleteClick = () =>{
        onDelete(data.id)
    }
    const selectImage = (category) =>{
        switch(data.prenda_type){
            case 'Chaqueta':
                logo = '/images/abrigo.png'
                return
            case 'Medias':
                logo = '/images/calcetines.png'
                return
            case 'Shorts':
                logo = '/images/shorts.png'
                return
            case 'Jeans':
                logo = '/images/jeans.png'
                return
            case 'Camisa':
                logo = '/images/camiseta.png'
                return
            case 'Falda':
                logo = '/images/falda.png'
                return
            case 'Sweater':
                logo = '/images/sweater.png'
                return
            case 'Vestido':
                logo = '/images/vestir.png'
                return
        }
    }
    selectImage(data)
  return (
    <>
        <div className="card-component">
            <img onClick={handleDeleteClick} className='card-x' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAARZJREFUSEvtlU0OgjAQhd9wErwJruACGHbKMVi57DHQnT8XkBXeRC4iNTU0IaR0yk/EBSxpeF/nzbyBsNBDC3Gxgn/m/Gr1/1idRMKXEkcinC+P7Gm7WRKJoJbIb0W24SpgexyHoiQgAFB5hLQP3kDLBlhxcB4ciQNJ5FrQBO9A4RG2nDssWAFjC3wMVGk6gfvg6n0toe11qlT33hlsggPwtZCLve2BGwQ2wL9aQ6GDrNa37faUm/a+WA2q2ADVutaomeDOYNP0vgGfi9qkim2RsUXNtr3Yil1yOgbOgneheOnY2Ka3DSfgdC2ydGrFvloStj2tAQoOif29yLaTfxKcwNhz1uqxwtx3K5hzaLbz1erZrOSEPscnmx9zxYCUAAAAAElFTkSuQmCC"/>
        <div className="image_container">
            <img className='image-logo' src={logo} alt="" />
        </div>
        <div className="title">
            <span>Linea de producción:</span>
            <div className="category-card">
            <span>{data.prenda_type}</span>
        </div>
        </div>

        <div className="size">
            <span>Materias Prima:</span>
            <div className="description">
            {
                data.materia_prima.map(item => (
                    <p className='mt-prima'>{item}</p>
                ))
            }
            </div>
        </div>

        <div className="content-card">
            <span>Cantidad de Producto: {data.cantidad_producto}</span>
        </div>

        <div className="content-card">
            <span>Numero empleados: {data.number_empleados}</span>
        </div>

        <div className="content-card">
            <span>Horas de Producción: {data.salario_hora}</span>
        </div>
        
        <div className="action">
            <span className='font-bold'>Precio final:</span>
            <div className="price">
            <span>${data.costo_final} USD</span>
            </div>  
        </div>
        </div>
    </>
  )
}


