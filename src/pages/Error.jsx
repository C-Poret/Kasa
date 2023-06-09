import React from 'react';
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <main className='containerError'>
            <p className='numberError'>404</p>
            <p className='textError'>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink className='linkError' to="/">Retournez sur la page d'accueil</NavLink>
        </main>
    );
};

export default Error;