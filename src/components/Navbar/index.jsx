import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const Navbar = () => {
    return ( 
            <div className="container">
                <ul className='nav-link-wrapper'>
                    <li><Link className='nav-link' to={`/`}>Home</Link></li>
                    <li><Link className='nav-link' to={`/login`}>Login</Link></li>
                </ul>
            </div>
    );
}

export default Navbar;