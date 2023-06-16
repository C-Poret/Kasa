import React from 'react';
import BannerImg from "../assets/Banner_Home.jpg";

const Banner = () => {
    return (
        <div className='containerBanner home'>
            <img src={BannerImg} alt="Paysage en bordure de mer" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;