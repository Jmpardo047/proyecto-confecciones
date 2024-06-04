import React from 'react'
import '/src/styles/CardStyles.css'
export const CardComponent = ({data}) => {
    let logo = ''
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
            <span>Materias Prima</span>
        </div>
        <div className="action">
            <div className="price">
            <span>$299</span>
            </div>  
        </div>
        </div>
    </>
  )
}


