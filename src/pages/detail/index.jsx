import React from 'react'
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.css'

const DetailPages = () => {
    let param = useParams()
    let [menu, setMenu] = useState({})

    useEffect(() => {
        handleGetDetail()
    }, [])

    const handleGetDetail = () => {
        axios
        .get(`https://api.mudoapi.tech/menu/${param.id}`)
        .then((res) => {
            console.log(res)
            setMenu(res.data.data);
        })
        .catch((err) => console.log(err))
    }
    return ( 
        <div>
            <Navbar/>
            <div className="detail">
                <div className="detail-card">
                    <img className='detail-img' src={menu.imageUrl}/>
                    <div className="detail-text">
                        <p>{menu.name}</p>
                        <p>{menu.type}</p>
                        <p>{menu.price}</p>
                        <p>{menu.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPages;