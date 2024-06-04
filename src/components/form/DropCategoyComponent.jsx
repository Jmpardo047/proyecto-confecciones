import React, { useState, useEffect } from 'react'
import { CategoryListComponent } from './CategoryListComponent'
import { useMtFormApi } from '../../hooks/useMtFormApi'
export const DropCategoyComponent = ({category,method,showData}) => {

  const {postForm, getApiInfo} = useMtFormApi("/materias_prima")
  const [info, setInfo] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let getCategory = []
  useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await getApiInfo();
              setInfo(data);
          } catch (err) {
              setError(err);
          } finally {
              setLoading(false);
          }
      };
      fetchData();
  }, [getApiInfo]);

  if (loading) {
      return <p>Cargando datos...</p>;
  }

  if (error) {
      return <p>Error: {error.message}</p>;
  }
  
  const getListCategory = (data) =>{
    const category = data;
    getCategory = info.filter(objeto => objeto.category === category);
  }
  getListCategory(category)
  return (
    <>  
        <button
            id="doubleDropdownButton"
            onClick={() => method(category)}
            className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            type="button"
            > 
            {category}
            <svg
                className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
            >
                <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
                />
            </svg>
        </button>
        {showData && (
                    <CategoryListComponent 
                    data={getCategory} />
                  )}
    </>
  )
}

