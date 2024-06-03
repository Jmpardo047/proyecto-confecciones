import React from 'react'
import { RouteButtonComponent } from './RouteButtonComponent'

const BannerComponent = () => {
  return (
    <div className='banner md:flex'>
        <h1 className='text-5xl sm:text-7xl font-bold'>CONFECCIONES PEPITA</h1>
        <RouteButtonComponent></RouteButtonComponent>
    </div>
  )
}

export default BannerComponent
