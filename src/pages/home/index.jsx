import React from 'react'
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const style = {
        width: '200px'
    }

    const [home, setHome] = useState([]);
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        handleGetMenu(name, type);
    }, []);

    const handleGetMenu = (dataName, dataType) => {
        axios
            .get(`https://api.mudoapi.tech/menus?name=${dataName}&type=${dataType}`)
            .then((res) => {
                console.log(res)
                setHome(res.data.data.Data);
            })
            .catch((err) => console.log(err));
    };

    return ( 
        <div>
            <Navbar/>
            {home.map((menu) =>(
                <div key={menu.id}>
                <h1>{menu.name}</h1>
                <img src={menu.imageUrl} style={style}/>
                <button><Link to={`/detail/${menu.id}`}>Detail</Link></button>
                </div>
            ))}
        </div>
    );
}

export default Home;