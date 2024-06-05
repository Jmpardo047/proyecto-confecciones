import React from 'react'
import BannerComponent from '../components/home/BannerComponent'
import { AddMateriaComponent } from '../components/home/AddMateriaComponent'
import { MaterialFormComponent } from '../components/home/MaterialFormComponent'
import { useState } from 'react'
import { RouteButtonComponent } from '../components/home/RouteButtonComponent'
import { ButtonDecorComponent } from '../components/home/ButtonDecorComponent'
import { CardsRenderComponent } from '../components/home/CardsRenderComponent'
export const HomePage = () => {
  const [formActive, setFormActive] = useState(false)
  const toggleDisplay = (event) =>{
    setFormActive(!formActive);
  }
  return (
    <>
    {
      formActive ? 
        <div className="overlay">
          <MaterialFormComponent hideForm={(event) => toggleDisplay(event)}/> 
        </div>
      : null
    }
    <BannerComponent/>
    <div id="render-cards" className="render-cards">
      <CardsRenderComponent></CardsRenderComponent>
    </div>  
    <div className="button-material">
      <AddMateriaComponent showForm={(event) => toggleDisplay(event)}/>
    </div>
    </>
  )
}

