import React, { useState } from 'react'
import {CardComponent} from './CardComponent'
import { useMtFormApi } from '../../hooks/useMtFormApi'
import { useEffect } from 'react'
export const CardsRenderComponent = () => {
    const {postForm, getApiInfo} = useMtFormApi("/info_cotizacion")
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getApiInfo();
                setInfo(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [getApiInfo]);
    if (loading) {
        return <p>Cargando datos...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }
  return (
    <>
    {
        info.map((item) => (
            <div className="card-container" key={item.id}>
                <CardComponent data={item}/>
            </div>  
        ))
    }
    </>
  )
}

