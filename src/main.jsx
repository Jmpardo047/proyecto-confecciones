import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ConfeccionesApp from "./ConfeccionesApp";
import { AppProvider } from "./hooks/useAppContext";
import './styles.css'
localStorage.clear()
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppProvider>
            <BrowserRouter>
                <ConfeccionesApp/>
            </BrowserRouter>
        </AppProvider>
    </React.StrictMode>
)
