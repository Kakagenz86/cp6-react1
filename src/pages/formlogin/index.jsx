import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
    const [name, setUsername] = useState ('')
    const [password, setPassword] = useState ('')
    const [login, setLogin] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleUsername = (e) => {
        setUsername(e.target.value)
        setLogin('')
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        setLogin('')
    }

    const handleSubmit = () => {
        const bodyPayLoad = {
            username: name,
            password: password,
        }

        if (!name | !password) {
            setLogin('Username dan Password wajib diisi gaesss');
            return
        }
        // bisa pakai return atau else yang kurung kurawalnya dimasukkan axios di dalamnya

        setLoading(true)

        axios
        .post(`https://api.mudoapi.tech/login`, bodyPayLoad)
        .then((res) => {
            console.log(res.data.data.token)
            localStorage.setItem("accessToken", res.data.data.token)
            
            setLogin(res.data.message);
            setLoading(false)
            
            setTimeout(() => {
                navigate('/')
            }, 1000);
        })
        .catch((err) => {
            console.log(err.response)
            setLoading(false)
            setLogin(err.response.data.message)
        })
    }

    return ( 
        <div>
            <Navbar/>
            {login.length ? (<h1>{login}</h1>) : null}
            <div>
                <label>Username: </label>
                <input onChange={handleUsername} type="text" />
            </div>
            <div>
                <label>Password: </label>
                <input onChange={handlePassword} type="text" name="" id="" />
            </div>
            <button onClick={handleSubmit} disabled={loading}>
                {loading ? 'Loading...' : 'Submit'}
            </button>
        </div>
    );
}

export default FormLogin;