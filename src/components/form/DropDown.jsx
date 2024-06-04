import { useState, useEffect } from "react";
import { FormRender } from "./FormRender";
import { useMtFormApi } from "../../hooks/useMtFormApi";
import { DropCategoyComponent } from "./DropCategoyComponent";
import { CategoryListComponent } from "./CategoryListComponent";

export const DropDown = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    const [showDoubleDropdown1, setShowDoubleDropdown1] = useState(false);
    const [showDoubleDropdown2, setShowDoubleDropdown2] = useState(false);
    const [showDoubleDropdown3, setShowDoubleDropdown3] = useState(false);
    const [showDoubleDropdown4, setShowDoubleDropdown4] = useState(false);
    const [showDoubleDropdown5, setShowDoubleDropdown5] = useState(false);
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };

    const toggleDoubleDropdown = (data) =>{
      switch(data){

        case 'tela':
          setShowDoubleDropdown1(!showDoubleDropdown1);
          setShowDoubleDropdown2(false);
          setShowDoubleDropdown3(false);
          setShowDoubleDropdown4(false);
          setShowDoubleDropdown5(false);
          return;

        case 'hilo':
          setShowDoubleDropdown1(false);
          setShowDoubleDropdown2(!showDoubleDropdown2);
          setShowDoubleDropdown3(false);
          setShowDoubleDropdown4(false);
          setShowDoubleDropdown5(false);
          return;

        case 'boton':
          setShowDoubleDropdown1(false);
          setShowDoubleDropdown2(false);
          setShowDoubleDropdown3(!showDoubleDropdown3);
          setShowDoubleDropdown4(false);
          setShowDoubleDropdown5(false);
          return;

        case 'herramienta':
          setShowDoubleDropdown1(false);
          setShowDoubleDropdown2(false);
          setShowDoubleDropdown3(false);
          setShowDoubleDropdown4(!showDoubleDropdown4);
          setShowDoubleDropdown5(false);
          return;
        case 'otros':
          setShowDoubleDropdown1(false);
          setShowDoubleDropdown2(false);
          setShowDoubleDropdown3(false);
          setShowDoubleDropdown4(false);
          setShowDoubleDropdown5(!showDoubleDropdown5);
          return;
      }
    }

  return (
    <>
    <div className="drop-container realtive">
      <label htmlFor="materia_prima" className="relative block mb-2 text-sm font-medium text-gray-900 dark:text-white">Materia Prima</label>
          <button
            onClick={toggleDropdown}
            className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
            type="button"
            style={{backgroundColor:'#6D28D9'}}
          >
            En Stock{''}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {/* FormCard menu */}
          {showDropdown && (
            <div
              className=" multi-dropdown z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                <li>
                  <DropCategoyComponent category="tela" method={(event) => toggleDoubleDropdown(event)} showData={showDoubleDropdown1}/>
                </li>

                <li>
                  {showDropdown && (
                    <div
                      className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                        <li>
                          <DropCategoyComponent category="hilo" method={(event) => toggleDoubleDropdown(event)} showData={showDoubleDropdown2}/>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li>
                  {showDropdown && (
                    <div
                      className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                        <li>
                        <DropCategoyComponent category="boton" method={(event) => toggleDoubleDropdown(event)} showData={showDoubleDropdown3}/>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li>
                  {showDropdown && (
                    <div
                      className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                        <li>
                        <DropCategoyComponent category="herramienta" method={(event) => toggleDoubleDropdown(event)} showData={showDoubleDropdown4}/>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li>
                  {showDropdown && (
                    <div
                      className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                        <li>
                        <DropCategoyComponent category="otros" method={(event) => toggleDoubleDropdown(event)} showData={showDoubleDropdown5}/>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          )}
    </div>
    </>
  )
}

