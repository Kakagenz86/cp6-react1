import React from 'react'
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as requestAPI from '../../api/api'
import './style.css'

const DetailPages = () => {
    let {id} = useParams()
    let [menu, setMenu] = useState({})

    useEffect(() => {
        handleGetDetail()
    }, [])

    const handleGetDetail = async () => {
        try {
            const res = await requestAPI.detail(id)
            console.log(res);
            setMenu(res.data.data)
        } catch (error) {
            console.log(error)
        }
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