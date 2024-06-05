// import React, { useState, useEffect } from 'react';
// import { MaterialButtonComponent } from './MaterialButtonComponent';

// export const MaterialRenderComponent = () => {
//     const [localStorageContent, setLocalStorageContent] = useState({});

//     useEffect(() => {
//         const updateLocalStorageContent = () => {
//             // Obtener todas las claves del localStorage
//             const keys = Object.keys(localStorage);

//             // Crear un objeto para almacenar el contenido de localStorage
//             const content = {};

//             // Iterar sobre todas las claves y obtener los valores correspondientes
//             keys.forEach(key => {
//                 let value;
//                 try {
//                     value = JSON.parse(localStorage.getItem(key));
//                 } catch (e) {
//                     value = null; // Si el valor no es un JSON válido, lo ignoramos
//                 }

//                 // Verificar si el valor es un array
//                 if (Array.isArray(value)) {
//                     content[key] = value;
//                 }
//             });

//             // Actualizar el estado del componente con el contenido de localStorage
//             setLocalStorageContent(content);
//         };

//         // Llamar a la función de actualización del contenido al montar el componente
//         updateLocalStorageContent();

//         // Suscribirse al evento de almacenamiento para detectar cambios
//         window.addEventListener('storage', updateLocalStorageContent);

//         // Suscribirse a cambios en localStorage para el mismo documento
//         const originalSetItem = localStorage.setItem;
//         localStorage.setItem = function(key, value) {
//             originalSetItem.apply(this, arguments);
//             updateLocalStorageContent();
//         };

//         // Limpiar la suscripción al desmontar el componente
//         return () => {
//             window.removeEventListener('storage', updateLocalStorageContent);
//             localStorage.setItem = originalSetItem; // Restaurar la función original
//         };
//     }, []);

//     const handleDeleteItem = (item) => {
//         localStorage.removeItem(item); // Eliminar la información asociada a la clave 'item'
//         updateLocalStorageContent(); // Actualizar la interfaz
//     };

//     return (
//         <div className="materials-container">
//                 {Object.keys(localStorageContent).map(item => (
//                     <MaterialButtonComponent key={item} onClick={(item) => handleDeleteItem(item)} name={String(localStorageContent[item][0])}/>
//                 ))}
//         </div>
//     );
// };

import React, { useState, useEffect } from 'react';
import { MaterialButtonComponent } from './MaterialButtonComponent';

export const MaterialRenderComponent = () => {
    const [localStorageContent, setLocalStorageContent] = useState({});

    const updateLocalStorageContent = () => {
        const keys = Object.keys(localStorage);
        const content = {};
        keys.forEach(key => {
            let value;
            try {
                value = JSON.parse(localStorage.getItem(key));
            } catch (e) {
                value = null;
            }
            if (Array.isArray(value)) {
                content[key] = value;
            }
        });
        setLocalStorageContent(content);
    };

    useEffect(() => {
        updateLocalStorageContent();

        window.addEventListener('storage', updateLocalStorageContent);

        const originalSetItem = localStorage.setItem;
        localStorage.setItem = function(key, value) {
            originalSetItem.apply(this, arguments);
            updateLocalStorageContent();
        };

        return () => {
            window.removeEventListener('storage', updateLocalStorageContent);
            localStorage.setItem = originalSetItem;
        };
    }, []);

    const handleDeleteItem = (item) => {
        localStorage.removeItem(item); // Eliminar la información asociada a la clave 'item'
        updateLocalStorageContent(); // Actualizar la interfaz
    };

    return (
        <div className="materials-container">
            {Object.keys(localStorageContent).map(item => (
                <MaterialButtonComponent key={item} onClick={(item) => handleDeleteItem(item)} name={String(localStorageContent[item][0])} />
            ))}
        </div>
    );
};
