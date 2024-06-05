import React, { useState } from 'react'
import {CardComponent} from './CardComponent'
import { useMtFormApi } from '../../hooks/useMtFormApi'
import { useEffect } from 'react'
export const CardsRenderComponent = () => {
    const {postForm, getApiInfo,deleteForm} = useMtFormApi("/info_cotizacion")
    const [info, setInfo] = useState([])
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getApiInfo();
                setInfo(data);
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, [getApiInfo]);

    const handleDelete = async (id) => {
        try {
            await deleteForm(id);
            setInfo(info.filter(item => item.id !== id));
        } catch (err) {
            setError(err);
        }
    };


    if (error) {
        return <p>Error: {error.message}</p>;
    }
  return (
    <>
    {
        info.map((item) => (
            <div className="card-container" key={item.id}>
                <CardComponent onDelete={handleDelete} data={item}/>
            </div>  
        ))
    }
    </>
  )
}

