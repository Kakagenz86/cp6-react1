import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import './style.css'
import * as requestAPI from '../../api/api'

const Home = () => {
    const [menus, setMenus] = useState([]);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [paging, setPaging] = useState ({
        currentPage: 1,
        previousPage: 0,
        nextPage: 2
    })

    useEffect(() => {
        handleGetMenu();
    }, [paging.currentPage]);


    const handleGetMenu = async () => {
        try {
            const res = await requestAPI.homeMenu(paging.currentPage, name, type)
            console.log(res)
            setMenus(res.data.data.Data);
            setPaging({
                currentPage: res.data.data.currentPage,
                previousPage: res.data.data.previousPage,
                nextPage: res.data.data.nextPage
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        const token = localStorage.getItem('accessToken');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    
        try {
            const res = await requestAPI.deleteMenu(id, config);
            console.log(res);
            handleGetMenu();
        } catch (error) {
            console.error(error);
        }
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

    const searchName = (e) => {
        setName(e.target.value);
    };

    const searchType = (e) => {
        setType(e.target.value);
    };

    const handleSubmit = () => {
        handleGetMenu();
        setName('')
        setType('')
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
                <div>
                    <input onChange={searchName} value={name} className="rectangle-text" type="text" placeholder="Cari Menu"/>
                    <input onChange={searchType} value={type} className="rectangle-text" type="text" placeholder="Type Menu"/>
                    <button className="rectangle-search" onClick={handleSubmit}>Search</button>
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
