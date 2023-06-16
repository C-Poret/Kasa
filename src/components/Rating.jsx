import React from 'react';
import EtoileP from "../assets/Etoile_Pleine.svg";
import EtoileV from "../assets/Etoile_Vide.svg";

const Rating = ({ rating }) => {

    const rate = [1, 2, 3, 4, 5];

    return (
        <div className='containerEtoile'>
            {rate.map((note) => {
                if (rating >= note) {
                    return (
                        <img src={EtoileP} alt="Etoile pleine" key={note} />
                    )    
                } else {
                    return (
                        <img src={EtoileV} alt="Etoile vide" key={note} />
                    )
                }
            })}
        </div>
    );
};

export default Rating;