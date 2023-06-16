import React from 'react';
import Logo from "../assets/Logo.svg";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <img className='logo' src={Logo} alt="Logo Kasa" />
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </header>
    );
};

export default Header;