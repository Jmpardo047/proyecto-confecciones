import { FormCard } from './FormCard'


export const LayoutForm = () => {

  return (
    <>
    <div className="main-container h-screen w-full " style={{backgroundColor:'#F0FAFC'}}>
        <div className='main-header banner-form '>
            <h1 className='main-title text-5xl sm:text-7xl font-bold'>Crea tu lote</h1>
        </div>
        <FormCard/>
    </div>
    </>
  )
}
