import React from 'react'
import Navbar from '../../components/Navbar';
import CreateMenu from '../menu';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const style = {
        width: '200px'
    }

    const [home, setHome] = useState([]);

    useEffect(() => {
        handleGetMenu();
    }, []);

    const handleGetMenu = () => {
        axios
            .get(`https://api.mudoapi.tech/menus?name=&type=&perPage=10&page=1`)
            .then((res) => {
                console.log(res)
                setHome(res.data.data.Data);
            })
            .catch((err) => console.log(err));
    };

    const handleDelete = (id) => {
        const token = localStorage.getItem("accessToken")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios
            .delete(`https://api.mudoapi.tech/menu/${id}`, config)
            .then((res) => {
                console.log(res)
                handleGetMenu()
            })
            .catch((err) => console.log(err));
    };

    return ( 
        <div>
            <Navbar/>
            <Link to={'/menu'}>
                Create Menu
            </Link>
            {home.map((menu) =>(
                <div key={menu.id}>
                <h3>{menu.name}</h3>
                <img src={menu.imageUrl} style={style}/>
                <button><Link to={`/detail/${menu.id}`}>Detail</Link></button>
                <button onClick={() => handleDelete(menu.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default Home;