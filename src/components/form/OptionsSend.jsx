import { useMtFormApi } from "../../hooks/useMtFormApi";
import { useState} from "react";
import { OptionsInput } from "./OptionsInput";
import { DropDown } from "./DropDown";

export const OptionsSend = () => {

    const {postForm, getApiInfo} = useMtFormApi("/info_cotizacion")

    const [formLote, setFormLote] = useState({

        prenda_type: localStorage.getItem('category')??"",
        cantidad_producto: "",
        number_empleados: "",
        salario_base: "",
        salario_hora: "",
        materia_prima: {}

    })

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormLote({
            ...formLote,
            [name]:value
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        postForm(formLote)
    }

  return (
    <>
        <div className="main-container h-screen w-full " style={{backgroundColor:'#F0FAFC'}}>
        <div className='main-header banner-form '>
            <h1 className='main-title text-5xl sm:text-7xl font-bold'>Crea tu lote</h1>
        </div>
        <form className="flex flex-col items-center justify-around  h-fit w-4/5  sm:h-3/5 mt-5 rounded-lg p-5 mx-auto sm:w-3/5"  style={{backgroundColor:"black"}} onSubmit={handleSubmit}>
          <div className="text-center text-white">
            <p className="font-bold ">Client Form</p>
            <p>Ingresa los datos para hacer tu cotización personalizada</p>
          </div>
          <div id="formLote" className="grid gap-8  md:grid-cols-3" >
            <div>
                <OptionsInput name="prenda_type" code="prenda_type" txt="Tipo Prenda" value={formLote.prenda_type} onChange={handleChange}>
                </OptionsInput>
            </div>
            <div>
            <label htmlFor="number_empleados" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero Empleados</label>
                <input name="number_empleados" type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-white" code="number_empleados"   onChange={handleChange} required />
            </div>
            <div>
            <label htmlFor="salario_base" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salario Base</label>
                <input name="salario_base" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-white" code="salario_base" onChange={handleChange} required />
            </div>
            <div>
            <label htmlFor="cantidad_producto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad producto</label> 
                <input name="cantidad_producto" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-white"  code="cantidad_producto" onChange={handleChange} required />
            </div>
            <div>
            <label htmlFor="salario_hora" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salario Hora</label> 
                <input name="salario_hora" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-white" code="salario_hora" required onChange={handleChange} />
            </div>
            <div>
                <DropDown name="materia_prima" code="materia_prima" value={formLote.materia_prima} onChange={handleChange} />
            </div>
        </div>
        <input type="submit" className=" size-1/5 h-12 bg-violet-700 text-white p-2 rounded hover:bg-violet-900 cursor-pointer" required/>
        </form>
    </div>

    </>
  )
}
