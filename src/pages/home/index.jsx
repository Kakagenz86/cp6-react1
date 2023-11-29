import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import './style.css'

const Home = () => {
    const [menus, setMenus] = useState([]);
    const [paging, setPaging] = useState ({
        currentPage: 1,
        previousPage: 0,
        nextPage: 2
    })
    // const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        handleGetMenu();
    }, [paging.currentPage]);

    const handleGetMenu = () => {
        axios
        .get(`https://api.mudoapi.tech/menus?name=&type=&perPage=10&page=${paging.currentPage}`)
        .then((res) => {
            console.log(res)
            setMenus(res.data.data.Data);
            setPaging({
                currentPage: res.data.data.currentPage,
                previousPage: res.data.data.previousPage,
                nextPage: res.data.data.nextPage
            })
        })
        .catch((err) => console.log(err));
    };

    const handleDelete = (id) => {
        const token = localStorage.getItem('accessToken');
        const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        };

        axios
        .delete(`https://api.mudoapi.tech/menu/${id}`, config)
        .then(() => {
            console.log(res)
            handleGetMenu();
        })
        .catch((err) => console.log(err));
    };

    const handleBack = () => {
        setPaging({
            ...paging,
            currentPage: paging.currentPage - 1,
        })
    };

    const handleNext = () => {
        setPaging({
            ...paging,
            currentPage: paging.currentPage + 1,
        })
    };

    return (
        <div>
            <Navbar />
        <Link className='home-create' to="/menu">Create Menu</Link>
            <div className='home'>
            <h1>Page {paging.currentPage}</h1>
                <div>
                    <button className='home-back' onClick={handleBack} disabled={!paging.previousPage}>
                    Back
                    </button>
                    <button className='home-next' onClick={handleNext} disabled={!paging.nextPage}>
                    Next
                    </button>
                </div> 
                {menus.map((menu) => (
                    <div key={menu.id}>
                    <h3>{menu.name}</h3>
                    <img src={menu.imageUrl} alt={menu.name} style={{ width: '200px' }} />
                        <div className='home-btn'>              
                            <Link className='home-link' to={`/detail/${menu.id}`}>Detail</Link>
                            <Link className='home-link' onClick={() => handleDelete(menu.id)}>Delete</Link>
                            <Link className='home-link' to={`/form/${menu.id}`}>Edit</Link>
                        </div>
                    </div>
                ))}
                <div>
                    <button className='home-back' onClick={handleBack} disabled={!paging.previousPage}>
                    Back
                    </button>
                    <button className='home-next' onClick={handleNext} disabled={!paging.nextPage}>
                    Next
                    </button>
                </div> 
            </div>
        </div>
    );
};

export default Home;
