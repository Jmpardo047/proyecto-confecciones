
export const Options = () => {
    return (
      <>
          <div>
          <label htmlFor="prenda-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de prenda</label>
          <select id="prenda-type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            <option defaultValue>Selecciona un tipo</option>
            <option value="US">Pantalón</option>
            <option value="CA">Vestido</option>
            <option value="FR">Short</option>
            <option value="DE">Falda</option>
          </select>
          </div>
          <div>
          <label htmlFor="number_empleados" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
          <select id="number_empleados" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            <option defaultValue>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          </div>
          <div>
          <label htmlFor="salario_base" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salario base empleado</label>
          <select id="salario_base" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            <option defaultValue>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          </div>
          <div>
          <label htmlFor="cantidad_producto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad</label>
          <select id="cantidad_producto" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            <option defaultValue>Seleccione la cantidad</option>
            <option value="US">Docena (12)</option>
            <option value="CA">Paquete (24)</option>
            <option value="FR">Caja (60)</option>
            <option value="DE">Granel (100)</option>
          </select>
          </div>
          <div>
          <label htmlFor="salario_hora" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
          <select id="salario_hora" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            <option defaultValue>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          </div>
      </>
    )
  }