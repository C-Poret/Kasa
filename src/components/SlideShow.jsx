import React, { useState } from 'react';
import FlecheD from "../assets/Fleche_Droite.svg";
import FlecheG from "../assets/Fleche_Gauche.svg";

const SlideShow = ({pictures}) => {

    const [current, setCurrent] = useState(0);
    const length = pictures.length;

    const nextPic = () => {
        if(current === length - 1) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        }
    };

    const prevPic = () => {
        if(current === 0) {
            setCurrent(length - 1);
        } else {
            setCurrent(current - 1);
        }
    };

    return (
        <div className='containerCarrousel'>
            <img className='containerPicture' src={pictures[current]} alt="image du Logement" />
            <div className='fleche'>
                {length > 1 && <img src={FlecheG} alt='Fleche' onClick={prevPic} />}
                {length > 1 && <img src={FlecheD} alt='Fleche' onClick={nextPic} />}
            </div>
            {length > 1 && <p>{current +1}/{length}</p>}
        </div>
    );
};

export default SlideShow;