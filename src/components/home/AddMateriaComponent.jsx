import React from 'react'
import { useState,useEffect } from 'react'
export const AddMateriaComponent = ({showForm}) => {
  const changeState = () =>{
    showForm();
  }
  return (
    <>
    <button
    onClick={changeState}
    className="group cursor-pointer outline-none hover:rotate-90 duration-300"
    >
        <svg
            className="stroke-teal-500 fill-none group-hover:fill-teal-800 group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300 material-"
            viewBox="0 0 24 24"
            height="4.5em"
            width="4.5em"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            strokeWidth="1.5"
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            ></path>
            <path strokeWidth="1.5" d="M8 12H16"></path>
            <path strokeWidth="1.5" d="M12 16V8"></path>
        </svg>
    </button>
    </>
  )
}

