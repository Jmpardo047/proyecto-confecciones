import React from 'react'
import '/src/styles/HomeBtStyles2.css'
export const HomeButtonComponent = () => {
  return (
    <>
        <div className="main">
            <div className="card">
            <img className='jacket' src="public\images\abrigo.png"/>
            </div>
            <div className="card">
            <img className='socks' src="public\images\calcetines.png"/>
            </div>
            <div className="card">
            <img className='shorts' src="public\images\shorts.png"/>
            </div>
            <div className="card">
            <img className='jeans' src="public\images\jeans.png"/>
            </div>
            <div className="card">
                {/* <img className='discord' src="public\images\jeans.png"/> */}
            </div>
            <div className="card">
            <img className='shirt' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAT9JREFUSEvtl0GywiAMhpOucGdPoJ7E50menkQ9ifUk+k5ib9C3kxVxwoBDW2hBnelCmHFVypf8yY8pwkQLJ+JCNLgRYslBllLWvmAbIX7M82tMMoNgA/tFxAMfRkSHUspjALxFxBMA1Ih4VUqdSymDQfTAJvK1hXUg9fx+X/nA/7PZDQC0Ks6yQfyVUlbugyeYgYh4iZCpJqKNlZxVMZlqqQcWv7ezKrjgfSDL0Flca/6NAZ/vu6V6BxwhTntLBms9GiFSa/wxqbk72RK8uAOroiiWRLRNJgAAIlZKKbYTN59uQOMG7e2Wj9ka7s30jgpuI3XP7YG7mX0K7FNs7Mp8ue5D12vOuFeKXOMUP+fm6qqVfdxS5CvtZEfWFCfpvWawa02W3inTd7KZq/m/dJFKDs3f9pzoL4lU8Nj+ycAPl1z+H2jz3V8AAAAASUVORK5CYII="/>
            </div>
            <div className="card">
            <img className='skirt' src="public\images\falda.png"/>
            </div>
            <div className="card">
            <img className='sweater' src="public\images\sweater.png"/>
            </div>
            <div className="card">  
                <img className='dress' src="public\images\vestir.png"/>
            </div>
            <p className="text">NUEVA<br></br>LINEA DE<br></br>PRODUCCIÓN</p>
            <div className="main_back"></div>
        </div>
    </>
  )
}

