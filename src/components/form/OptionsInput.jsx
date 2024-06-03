
export const OptionsInput = ({txt, type, code, value , onChange, opt}) => {
  return (
    <>
      <label htmlFor={code} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{txt}</label>
          <select type={type} name={code} id={code} value={value} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            <option defaultValue>Selecciona un tipo</option>
            <option >Jeans</option>
            <option >Vestido</option>
            <option >Short</option>
            <option >Falda</option>
            <option >Chaqueta</option>
            <option >Medias</option>
            <option >Camisa</option>
            <option >Sweater</option>
          </select>
    </>
  )
}
