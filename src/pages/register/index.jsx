import './style.css'
import * as requestAPI from '../../api/api'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';

const Register = () => {
    const [loading, setLoading] = useState(false)
    const [signup, setSignup] = useState('')
    const [form, setForm] = useState({
        name: "",
        username: "",
        password: "",
        roleId: null
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const updatedValue = type === 'number' ? parseInt(value) : value;
        setForm({
            ...form,
            [name]: updatedValue,
        });
    };

    const handleRegister = async () => {

        setLoading(true)

        try {
            if (!form.username || !form.password) {
                throw new Error("Username and password are required.");
            }

            const res = await requestAPI.signup(form)
            console.log(res)
            setSignup(res.data.message)

            setLoading(false)

            setTimeout(() => {
                navigate('/login')
            }, 1000);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Navbar/>
            <div className='register d-flex flex-column align-items-center'>
                <div>
                    {signup.length ? (<h3>{signup}</h3>) : null}
                    <div>
                        <h1 className='mt-4 fs-4 fw-bolder'>Register</h1>
                        <p className='label-signup'>Name*</p>
                        <input className='input-signup' name="name" placeholder='Nama Lengkap' type="text" onChange={handleChange} />
                    </div>
                    <div>
                        <p className='label-signup'>Role ID*</p>
                        <input className='input-signup' name="roleId" placeholder='angka bebas' type="number" onChange={handleChange} />
                    </div>
                    <div>
                        <p className='label-signup'>Username*</p>
                        <input className='input-signup' name="username" placeholder='Username' type="text" onChange={handleChange} />
                    </div>
                    <div>
                        <p className='label-signup'>Create Password*</p>
                        <input className='input-signup' name="password" placeholder='6+ karakter' type="password" onChange={handleChange} />
                    </div>
                </div>
                    <button className='btn-signup' onClick={handleRegister} disabled={loading}>{loading ? 'Loading...' : 'Register'}</button>
                    <p className='mt-4 text-center'>Already have an account? <Link className='fw-bold' to="/login">Signin In here</Link></p>
            </div>
            <Footer/>
    </div>
    );
}

export default Register;