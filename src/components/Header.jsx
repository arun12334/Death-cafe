import React from 'react';
import { Link } from 'react-router-dom';
import "../Header.css";
import logo from "../Assets/logo1.png";

function Header() {
    return (
        <div className="header-container">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Your Logo" className="floating-logo" />
                </Link>
                <h3 className='cafe'>Arise cafe</h3>
            </div>

            <div className="other-content">

                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/products">Products</Link>
                <Link to="/team">Team</Link>
                <Link to="/reviews">Reviews</Link>
            </div>
        </div>
    );
}

export default Header;
