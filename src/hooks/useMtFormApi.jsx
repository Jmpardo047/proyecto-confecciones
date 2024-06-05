import { useState,useCallback } from "react";
export const useMtFormApi = (endpoint) =>{
    const url = import.meta.env.VITE_MOCKAPI_URL + endpoint
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
        const postForm = async(form) =>{
            try {
                const postForm = await fetch (url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form),
            });
            console.log(postForm.body);

            if (!postForm.ok) {
                const somethingBad = await postForm.text();
                throw new Error(`Error => ${postForm.statusText} - ${somethingBad}`);
            }

            const output = await postForm.json();
            console.log('API response:', output)
        }
        catch (error) {
            console.log ('Data Error',error)
        }
        }

        const getApiInfo = useCallback(async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                const result = await response.json();
                setData(result);
                return result;
            } catch (err) {
                setError(err);
                throw err;
            }
        }, [url]);

        const deleteForm = useCallback(async (id) => {
            try {
                const response = await fetch(`${url}/${id}`, {
                    method: 'DELETE'
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
            } catch (err) {
                setError(err);
                throw err;
            }
        }, [url]);

        return{getApiInfo,postForm,deleteForm}
}
