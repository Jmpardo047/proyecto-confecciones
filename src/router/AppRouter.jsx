import React from 'react'
import {Routes, Route, Navigate } from 'react-router'
import { HomePage } from '../pages/HomePage'
import { FormPage } from '../pages/FormPage'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='Home'element={<HomePage/>}/>
            <Route path='Form'element={<FormPage/>}/>
            <Route path='/'element={<Navigate to="Home" />}/>
        </Routes>
    </>
  )
}

