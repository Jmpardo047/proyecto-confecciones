import { useMtFormApi } from "../../hooks/useMtFormApi";
import { useState, useEffect } from "react";
import { OptionsInput } from "./OptionsInput";
import { DropDown } from "./DropDown";
import { MaterialRenderComponent } from "./MaterialRenderComponent";
import { useNavigate } from 'react-router-dom'
export const FormRender = () => {
    const { postForm, getApiInfo } = useMtFormApi("/info_cotizacion");
    const navigate = useNavigate();
    const [formLote, setFormLote] = useState({
        prenda_type: localStorage.getItem('category') ?? "",
        cantidad_producto: "",
        number_empleados: "",
        salario_base: "",
        salario_hora: "",
        materia_prima: [],
        costos_materia: [],
        costo_final: ""
    });

    const [submitFlag, setSubmitFlag] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormLote({
            ...formLote,
            [name]: value
        });
    };

    const setMateriaCosts = () => {
        const keys = Object.keys(localStorage);

        // Crear arrays para almacenar los contenidos de localStorage
        const costs = [];
        const names = [];

        // Iterar sobre todas las claves y obtener los valores correspondientes
        keys.forEach(key => {
            let value;
            try {
                value = JSON.parse(localStorage.getItem(key));
            } catch (e) {
                value = null; // Si el valor no es un JSON válido, lo ignoramos
            }

            // Verificar si el valor es un array y tiene al menos dos elementos
            if (Array.isArray(value) && value.length > 1) {
                // Añadir el segundo elemento del array a costs y el primer elemento a names
                costs.push(value[1]);
                names.push(value[0]);
            }
        });
        // Actualizar el estado con los nuevos valores
        setFormLote(prevFormLote => ({
            ...prevFormLote,
            materia_prima: names,
            costos_materia: costs
        }));
    };

    useEffect(() => {
        if (formLote.materia_prima.length > 0 && formLote.costos_materia.length > 0) {
            calcFinalCost(formLote);
        }
    }, [formLote.materia_prima, formLote.costos_materia]);

    useEffect(() => {
        if (formLote.costo_final && submitFlag) {
            postForm(formLote);
            setSubmitFlag(false); // Reset flag after submission
            localStorage.clear()
            navigate('/Home')
        }
    }, [formLote.costo_final, submitFlag]);

    const calcFinalCost = ({ cantidad_producto, number_empleados, salario_base, salario_hora, costos_materia }) => {
        let beneficios = 200;
        let costosIndirectos = 50;
        let salarioFinal = (parseInt(salario_base) * parseInt(salario_hora));
        let costoTrabajadores = (parseInt(number_empleados) * parseInt(salarioFinal)) + (parseInt(number_empleados) * costosIndirectos) + (parseInt(number_empleados) * beneficios);
        let costoMateriasPrima = 0;
        costos_materia.forEach(item => {
            costoMateriasPrima += parseInt(item);
        });
        let costoFinal = costoTrabajadores + costoMateriasPrima;
        setFormLote(prevFormLote => ({
            ...prevFormLote,
            costo_final: costoFinal
        }));
        console.log(costoFinal);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setMateriaCosts();
        setSubmitFlag(true);
    };

    return (
        <>
            <div className="main-container h-screen w-full" style={{ backgroundColor: '#F0FAFC' }}>
                <div className='main-header banner-form'>
                    <h1 className='main-title text-5xl sm:text-7xl font-bold'>Crea tu lote</h1>
                </div>
                <form className="flex flex-col items-center justify-around h-fit w-4/5 sm:h-3/5 mt-5 rounded-lg p-5 mx-auto sm:w-3/5 mb-4" style={{ backgroundColor: "#3B3E3E" }} onSubmit={handleSubmit}>
                    <div className="text-center text-white">
                        <p className="font-bold">Client Form</p>
                        <p>Ingresa los datos para hacer tu cotización personalizada</p>
                    </div>
                    <div id="formLote" className="grid gap-8 md:grid-cols-3">
                        <div>
                            <OptionsInput name="prenda_type" code="prenda_type" txt="Tipo Prenda" value={formLote.prenda_type} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="number_empleados" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero Empleados</label>
                            <input name="number_empleados" type="number" className="bg-gray-50 border border-white text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 inputs dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" code="number_empleados" onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="salario_base" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salario Base</label>
                            <input name="salario_base" type="number" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 inputs focus:border-blue-500 block w-full p-2.5 dark:border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" code="salario_base" onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="cantidad_producto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad producto</label>
                            <input name="cantidad_producto" type="number" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 inputs focus:border-blue-500 block w-full p-2.5 dark:border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" code="cantidad_producto" onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="salario_hora" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Horas de Producción</label>
                            <input name="salario_hora" type="number" className="bg-gray-50 border border-white text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 inputs dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" code="salario_hora" required onChange={handleChange} />
                        </div>
                        <div>
                            <DropDown name="materia_prima" code="materia_prima" value={formLote.materia_prima} onChange={handleChange} />
                        </div>
                    </div>
                    <MaterialRenderComponent />
                    <input type="submit" className="size-1/5 h-12 bg-violet-700 text-white p-2 rounded-lg hover:bg-violet-900 cursor-pointer mt-5" required />
                </form>
            </div>
        </>
    );
};