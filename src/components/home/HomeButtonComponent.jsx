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
            <img className='jacket' onClick={() => triggerChange('Chaqueta')} src="/images/abrigo.png"/>
            </div>
            <div className="card">
            <img className='socks' onClick={() => triggerChange('Medias')} src="/images/calcetines.png"/>
            </div>
            <div className="card">
            <img className='shorts' onClick={() => triggerChange('Shorts')} src="/images/shorts.png"/>
            </div>
            <div className="card">
            <img className='jeans' onClick={() => triggerChange('Jeans')} src="/images/jeans.png"/>
            </div>
            <div className="card">
            <img className='home-icon' onClick={() => triggerChange('')}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAASxJREFUSEvt1tEVwiAMBdB0EnUTnUSdRJ1EnUQ30U20rwc8aRpoQvH0p3yq9UJoHjQ002hmcmkKvCaiLRHdSiZfCl+J6BDAMxFdvHgJzNHouXEvzNF3UFFyDBfugSV6bMsN/NHusxu3whr6ZCt24xY4h8Y9xopd+BhsQYvwHOxB3XgKLkFduAZPQc24hGU4uHpTpNcp9LYaMhxGBALmoyaM/0Xvd9nOYQQ+WuKf8K49WLr+l6VGP8ae1GIQVdknDoS7OKl4qQEi5WLMJo/Fj5K/2lbIOfCt4fDgJU61kwa/QjV6M2exiUrhu034rBqsTSauWEMWuPc+ePZ4KTUvXbWXCwmGJKsxkFQIENMeW8LCOqlfTPIHcheBeGFfWQXld8n79tjVZ4KZf3Q2+AuaiXMfopa9rwAAAABJRU5ErkJggg=="/>
            </div>
            <div className="card">
            <img className='shirt' onClick={() => triggerChange('Camisa')} src="/images/camiseta.png"/>
            </div>
            <div className="card">
            <img className='skirt' onClick={() => triggerChange('Falda')} src="/images/falda.png"/>
            </div>
            <div className="card">
            <img className='sweater' onClick={() => triggerChange('Sweater')} src="/images/sweater.png"/>
            </div>
            <div className="card">  
                <img className='dress' onClick={() => triggerChange('Vestido')} src="/images/vestir.png"/>
            </div>
            <p className="text">NUEVA<br></br>LINEA DE<br></br>PRODUCCIÓN</p>
            <div className="main_back"></div>
        </div>
    </>
  )
}

