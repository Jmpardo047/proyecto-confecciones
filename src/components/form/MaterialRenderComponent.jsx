
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

    return (
        <div className="materials-container">
            {Object.keys(localStorageContent).map(item => (
                <MaterialButtonComponent key={item} name={String(localStorageContent[item][0])} />
            ))}
        </div>
    );
};
