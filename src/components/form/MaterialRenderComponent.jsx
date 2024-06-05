import React, { useState, useEffect } from 'react';

export const MaterialRenderComponent = () => {
    const [localStorageContent, setLocalStorageContent] = useState({});

    useEffect(() => {
        const updateLocalStorageContent = () => {
            // Obtener todas las claves del localStorage
            const keys = Object.keys(localStorage);

            // Crear un objeto para almacenar el contenido de localStorage
            const content = {};

            // Iterar sobre todas las claves y obtener los valores correspondientes
            keys.forEach(key => {
                let value;
                try {
                    value = JSON.parse(localStorage.getItem(key));
                } catch (e) {
                    value = null; // Si el valor no es un JSON válido, lo ignoramos
                }

                // Verificar si el valor es un array
                if (Array.isArray(value)) {
                    content[key] = value;
                }
            });

            // Actualizar el estado del componente con el contenido de localStorage
            setLocalStorageContent(content);
        };

        // Llamar a la función de actualización del contenido al montar el componente
        updateLocalStorageContent();

        // Suscribirse al evento de almacenamiento para detectar cambios
        window.addEventListener('storage', updateLocalStorageContent);

        // Suscribirse a cambios en localStorage para el mismo documento
        const originalSetItem = localStorage.setItem;
        localStorage.setItem = function(key, value) {
            originalSetItem.apply(this, arguments);
            updateLocalStorageContent();
        };

        // Limpiar la suscripción al desmontar el componente
        return () => {
            window.removeEventListener('storage', updateLocalStorageContent);
            localStorage.setItem = originalSetItem; // Restaurar la función original
        };
    }, []);

    return (
        <div className="materials-container">

            <ul>
                {Object.keys(localStorageContent).map(key => (
                    <li key={key}> {String(localStorageContent[key][0])}</li>
                ))}
            </ul>
        </div>
    );
};
