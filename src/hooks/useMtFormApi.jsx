
export const useMtFormApi = (endpoint) =>{
    const url = import.meta.env.VITE_MOCKAPI_URL + endpoint
        const postForm = async(form) =>{
            try {
                const postForm = await fetch (url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form),
            });
            console.log(consumo.body);
        
            if (!consumo.ok) {
                const somethingBad = await consumo.text();
                throw new Error(`Error => ${consumo.statusText} - ${somethingBad}`);
            }
            
            const output = await consumo.json();
            console.log('API response:', output)
        }
        catch (error) {
            console.log ('Data Error',error)
        }
        }
        
        const getApiInfo = async() =>{
            const getForm = await fetch(url, {
                method: "GET",
                headers: { 'content-type': 'application/json' }
            })
            const rta = await getForm.json()
            console.log(rta)
            return rta
        }
        return {postForm,getApiInfo}
}
