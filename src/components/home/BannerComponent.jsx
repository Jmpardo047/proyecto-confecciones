import React from 'react'
import { RouteButtonComponent } from './RouteButtonComponent'

const BannerComponent = () => {
  return (
    <div className='banner md:flex'>
        <h1 className='text-5xl sm:text-7xl font-bold'>CONFECCIONES PEPITA</h1>
        <RouteButtonComponent></RouteButtonComponent>
        <a href='#render-cards' className='flex flex-col items-center cursor-pointer'>
          <h2 className='text-3xl font-bold tt'>Historial de Lineas de Producción</h2>
          <img className='w-10' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAANtJREFUSEvtlO0NwiAQho9e2aNu4ijtJjqJbqKbyB7lQ0lKYprCcRCtifQv1/fp+xQQsNMjduJCA3/NfFPdVH/MwG9vLufcIIRQOfXneT5KKe/ULNnYB3Vdd3sFnRDxnAo0xlwAYHTOTX3fX1OzJNgY8wCAYQmJwgN0mVOIeKgCe83WWt84Cl9DrbUTpZts7L86BS+B+swscAy+WBiD3pymQX82OAIPOYoDZTUOhA3tbGgReNUcuE2LVL8fD99caz1Quzd2pFj/mLqNOOsNzLFVNdtUV+njvPx/qp+qyXgfH6z8jQAAAABJRU5ErkJggg=="/>
        </a>
        
    </div>
  )
}

export default BannerComponent
