import React from 'react'
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPages = () => {
    const style = {
        width: '500px'
    }

    let param = useParams()
    let [menu, setMenu] = useState({})

    useEffect(() => {
        handleGetMenu()
    }, [])

    const handleGetMenu = () => {
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
                <img src={menu.imageUrl} style={style}/>
                <p>{menu.name}</p>
                <p>{menu.type}</p>
                <p>{menu.price}</p>
                <p>{menu.description}</p>
        </div>
    );
}

export default DetailPages;