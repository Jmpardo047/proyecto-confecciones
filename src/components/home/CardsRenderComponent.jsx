import React from 'react'
import {CardComponent} from './CardComponent'

export const CardsRenderComponent = () => {
  return (
    <>
        <div className="card-container">
            <CardComponent></CardComponent>
        </div>
        <div className="card-container">
            <CardComponent></CardComponent>
        </div>
        <div className="card-container">
            <CardComponent></CardComponent>
        </div>
        <div className="card-container">
            <CardComponent></CardComponent>
        </div>
        <div className="card-container">
            <CardComponent></CardComponent>
        </div>
    </>
  )
}

