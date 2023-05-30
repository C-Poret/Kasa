import React from 'react';
import BannerImg from "../assets/Banner_Home.svg";

const Banner = () => {
    return (
        <div className='containerBanner'>
            <img src={BannerImg} alt="Paysage en bordure de mer" />
            <h2>Chez vous, partout et aileurs</h2>
        </div>
    );
};

export default Banner;