import { useState } from 'react'
import Navbar from '../../components/Navbar';
import * as requestAPI from '../../api/api'
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import Footer from '../../components/footer';

const Login = () => {
    const [name, setUsername] = useState ('')
    const [password, setPassword] = useState ('')
    const [signin, setSignin] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleUsername = (e) => {
        setUsername(e.target.value)
        setSignin('')
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        setSignin('')
    }

    const handleSubmit = async () => {
        const bodyPayLoad = {
            username: name,
            password: password,
        }

        if (!name | !password) {
            setSignin('Username dan Password wajib diisi gaesss');
            return
        }
        // bisa pakai return atau else yang kurung kurawalnya dimasukkan axios di dalamnya

        setLoading(true)

        try {
            const res = await requestAPI.signin(bodyPayLoad)
            console.log(res.data.data.token)
            localStorage.setItem("accessToken", res.data.data.token)
            
            setSignin(res.data.message);
            setLoading(false)
            
            setTimeout(() => {
                navigate('/')
            }, 1000);
        } catch (error) {
            console.log(error)
            setLoading(false)
            setSignin(error.response.data.message)
        }
    }

    return ( 
        <div>
            <Navbar/>
            <div className="loginpages">
                {signin.length ? (<h1>{signin}</h1>) : null}
                <div>
                    <h1 className='mt-4 fs-4 fw-bolder'>Login</h1>
                    <p className='label-login'>Username*</p>
                    <input className='input-login' placeholder='Username' type="text" onChange={handleUsername} />
                </div>
                <div>
                    <p className='label-login'>Password*</p>
                    <input className='input-login' placeholder='6+ karakter' type="password" onChange={handlePassword} />
                </div>
                <button className='btn-login' onClick={handleSubmit} disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
                <p className='mt-4 text-center'>Don`t have an account? <Link className='fw-bold' to="/register">Signup for free</Link></p>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;