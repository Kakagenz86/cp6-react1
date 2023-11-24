import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';

const CreateMenu = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        type: "",
        imageUrl: "",
        price: "",
    });

    const handleInputChange = (e) => {
        // console.log(e.target.value)
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // console.log(formData.name, formData.description, formData.type, formData.imageUrl, formData.price)

    const handleSubmit = () => {

        // cara rubah nilai dari string ke number
        formData.price = Number(formData.price)
        
        // buat config untuk authorization dan valeu berupa token
        const token = localStorage.getItem("accessToken")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios
            .post('https://api.mudoapi.tech/menu',  formData, config)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    return (
        <div>
            <Navbar />
            <h1>Create Menu</h1>
            <div className='create-menu'>
                <input name='name' placeholder='name' onChange={handleInputChange}/>
                <input name='description' placeholder='description' onChange={handleInputChange}/>
                <select name='type' onChange={handleInputChange}>
                    <option value={'beverage'}>beverage</option>
                    <option value={'main-dish'}>main-dish</option>
                </select>
                <input name='imageUrl' placeholder='image url' onChange={handleInputChange}
                />
                <input name='price' placeholder='harga' onChange={handleInputChange}/>
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default CreateMenu;
