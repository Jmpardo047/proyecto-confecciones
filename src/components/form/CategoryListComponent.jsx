
export const CategoryListComponent = ({data}) => {
    const saveItem = (item) =>{
        localStorage.setItem(`${item.id}`,`${JSON.stringify([item.name,item.cost])}`)
        console.log(localStorage)
    }
  return (
    <>
        <div
            id="doubleDropdown"
            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
            {
            data.map(item => (
                <li key={item.id} onClick={() => saveItem(item)}>
                <div className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item.name}</div>
                </li>
            ))
            }
            </ul>
        </div>
    </>
  )
}

