import React from 'react'
import { RouteButtonComponent } from './RouteButtonComponent'

const BannerComponent = () => {
  return (
    <div className='banner md:flex'>
        <h1 className='text-5xl sm:text-7xl font-bold'>Confecciones Pepita</h1>
        <RouteButtonComponent></RouteButtonComponent>
    </div>
  )
}

export default BannerComponent
