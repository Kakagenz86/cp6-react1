import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './style.css'
import Navbar from '../../components/Navbar';
import * as requestAPI from '../../api/api'

const FormEdit = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        type: "",
        imageUrl: "",
        price: "",
    });
    const navigate = useNavigate()
    const { id } = useParams();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        handleGetMenu();
    }, []);
    
    const handleGetMenu = async () => {
            try {
                const res = await requestAPI.detail(id)
                setFormData({
                    name: res.data.data.name,
                    description: res.data.data.description,
                    type: res.data.data.type,
                    imageUrl: res.data.data.imageUrl,
                    price: res.data.data.price,
                });
            } catch (error) {
                console.log(error)
            }
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
        const handleEdit = async () => {
        // cara rubah nilai dari string ke number
        formData.price = Number(formData.price)

        // buat config untuk authorization dan value berupa token
        const token = localStorage.getItem("accessToken")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        setLoading(true)

            try {
                const res = await requestAPI.editMenu(id, formData, config)
                console.log(res);
                // setFormData(res.data.data)
                navigate('/')
                setLoading(false)
                alert('Menu Berhasil Diedit')
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
    };


    return (
        <div>
            <Navbar/>
            <div className='edit-menu'>
            <h1 className='edit-title'>EDIT MENU</h1>
                <input className='edit-input' name='name' onChange={handleInputChange} value={formData.name} />
                <input className='edit-input' name='description' onChange={handleInputChange} value={formData.description} />
                <input className='edit-input' name='imageUrl' onChange={handleInputChange} value={formData.imageUrl} />
                <input type='number' className='edit-input' name='price' onChange={handleInputChange} value={formData.price} />
                <select className='edit-input' name='type' onChange={handleInputChange} value={formData.type}>
                    <option value="">type</option>
                    <option value={'beverage'}>beverage</option>
                    <option value={'main-dish'}>main-dish</option>
                </select>
                <br />
                <div>
                    <button className='edit-btn' onClick={handleEdit} disabled={loading}>{loading ? 'Loading...' : 'Edit'}</button>
                </div>
            </div>
        </div>
    );
};

export default FormEdit;
