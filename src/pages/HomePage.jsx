import React from 'react'
import BannerComponent from '../components/home/BannerComponent'
import { AddMateriaComponent } from '../components/home/AddMateriaComponent'
import { MaterialFormComponent } from '../components/home/MaterialFormComponent'
import { useState } from 'react'
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
    <div className="button-material">
      <AddMateriaComponent showForm={(event) => toggleDisplay(event)}/>
    </div>
    </>
  )
}

