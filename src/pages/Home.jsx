import React, { useEffect, useState } from 'react';
import Banner from "../components/Banner";
import Card from "../components/Card";
import Data from "../data/logement.json";
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    return (
        <main>
            <Banner />
            <div className='containerCard'>
                {Data.map((logement, id) => (
                    <div className='logementCard' key={id} >
                        <a onClick={() => {navigate('/logement/' + logement.id)}}>
                            <Card cover={logement.cover} title={logement.title} />
                        </a>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Home;