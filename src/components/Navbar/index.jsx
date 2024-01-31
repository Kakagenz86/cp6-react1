import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem("accessToken")

    const handleLogout = () => {
        localStorage.removeItem("accessToken")
        navigate("/login")
    }

    return ( 
            <div className="container-fluid">
                <ul className='nav-link-wrapper'>
                    <Link className='nav-link' to={"/"}>Home</Link>
                    {accessToken ? (
                        <p className='nav-link' onClick={handleLogout}>Logout</p>
                    ) : (
                    <Link className='nav-link' to={"/login"}>
                        <p>Login</p>
                    </Link>
                    )}
                </ul>
            </div>
    );
}

export default Navbar;