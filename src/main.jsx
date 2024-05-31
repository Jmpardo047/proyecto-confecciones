import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ConfeccionesApp from "./ConfeccionesApp";
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ConfeccionesApp/>
        </BrowserRouter>
    </React.StrictMode>
)
