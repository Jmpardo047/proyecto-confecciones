import React, { useState } from 'react'
import '/src/styles/HomeBtStyles2.css'
export const HomeButtonComponent = () => {
    const [type, setType] = useState(undefined);
    
    const triggerChange = (value) =>{
        localStorage.setItem('category',`${value}`);
        console.log(localStorage);
    }

  return (
    <>
        <div className="main">
            <div className="card" >
            <img className='jacket' onClick={() => triggerChange('Chaqueta')} src="public\images\abrigo.png"/>
            </div>
            <div className="card">
            <img className='socks' onClick={() => triggerChange('Medias')} src="public\images\calcetines.png"/>
            </div>
            <div className="card">
            <img className='shorts' onClick={() => triggerChange('Shorts')} src="public\images\shorts.png"/>
            </div>
            <div className="card">
            <img className='jeans' onClick={() => triggerChange('Jeans')} src="public\images\jeans.png"/>
            </div>
            <div className="card">
            <img className='home-icon' onClick={() => triggerChange('')}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAASxJREFUSEvt1tEVwiAMBdB0EnUTnUSdRJ1EnUQ30U20rwc8aRpoQvH0p3yq9UJoHjQ002hmcmkKvCaiLRHdSiZfCl+J6BDAMxFdvHgJzNHouXEvzNF3UFFyDBfugSV6bMsN/NHusxu3whr6ZCt24xY4h8Y9xopd+BhsQYvwHOxB3XgKLkFduAZPQc24hGU4uHpTpNcp9LYaMhxGBALmoyaM/0Xvd9nOYQQ+WuKf8K49WLr+l6VGP8ae1GIQVdknDoS7OKl4qQEi5WLMJo/Fj5K/2lbIOfCt4fDgJU61kwa/QjV6M2exiUrhu034rBqsTSauWEMWuPc+ePZ4KTUvXbWXCwmGJKsxkFQIENMeW8LCOqlfTPIHcheBeGFfWQXld8n79tjVZ4KZf3Q2+AuaiXMfopa9rwAAAABJRU5ErkJggg=="/>
            </div>
            <div className="card">
            <img className='shirt' onClick={() => triggerChange('Camisa')} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAT9JREFUSEvtl0GywiAMhpOucGdPoJ7E50menkQ9ifUk+k5ib9C3kxVxwoBDW2hBnelCmHFVypf8yY8pwkQLJ+JCNLgRYslBllLWvmAbIX7M82tMMoNgA/tFxAMfRkSHUspjALxFxBMA1Ih4VUqdSymDQfTAJvK1hXUg9fx+X/nA/7PZDQC0Ks6yQfyVUlbugyeYgYh4iZCpJqKNlZxVMZlqqQcWv7ezKrjgfSDL0Flca/6NAZ/vu6V6BxwhTntLBms9GiFSa/wxqbk72RK8uAOroiiWRLRNJgAAIlZKKbYTN59uQOMG7e2Wj9ka7s30jgpuI3XP7YG7mX0K7FNs7Mp8ue5D12vOuFeKXOMUP+fm6qqVfdxS5CvtZEfWFCfpvWawa02W3inTd7KZq/m/dJFKDs3f9pzoL4lU8Nj+ycAPl1z+H2jz3V8AAAAASUVORK5CYII="/>
            </div>
            <div className="card">
            <img className='skirt' onClick={() => triggerChange('Falda')} src="public\images\falda.png"/>
            </div>
            <div className="card">
            <img className='sweater' onClick={() => triggerChange('Sweater')} src="public\images\sweater.png"/>
            </div>
            <div className="card">  
                <img className='dress' onClick={() => triggerChange('Vestido')} src="public\images\vestir.png"/>
            </div>
            <p className="text">NUEVA<br></br>LINEA DE<br></br>PRODUCCIÓN</p>
            <div className="main_back"></div>
        </div>
    </>
  )
}

