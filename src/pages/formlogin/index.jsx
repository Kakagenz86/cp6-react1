import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import axios from 'axios';

const FormLogin = () => {
    const [name, setUsername] = useState ('')
    const [pass, setPassword] = useState ('')
    const [success, setSuccess] = useState ('')
    const [error, setError] = useState ('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        const bodyPayLoad = {
            username: name,
            password: pass,
        }

        axios
        .post(`https://api.mudoapi.tech/login`, bodyPayLoad)
        .then((res) => {
            console.log(res.data.message)
            setSuccess(res.data.message);
        })
        .catch((err) => {
            console.log(err.response)
            setError(err.response.data.message)
        })
    }

    return ( 
        <div>
            <Navbar/>
            {
                success ? (<h1>{success}</h1>) : null
            }
            {
                error ? (<h2>{error}</h2>) : null
            }
            <div>
                <label>Username: </label>
                <input onChange={handleUsername} type="text" />
            </div>
            <div>
                <label>Password: </label>
                <input onChange={handlePassword} type="text" name="" id="" />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default FormLogin;