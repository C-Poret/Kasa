import React from 'react';
import BannerImg from "../assets/Banner_About.svg";

const AboutBanner = () => {
    return (
        <div className='containerBanner'>
            <img src={BannerImg} alt="Paysage de montagne" />
        </div>
    );
};

export default AboutBanner;