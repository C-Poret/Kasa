import React, { useState } from 'react';
import FlecheB from "../assets/Fleche_Bas.svg";
import FlecheH from "../assets/Fleche_Haut.svg";

const Collapse = ({title, content}) => {

    const [open, setOpen] = useState(true)

    return (
        <div className='containerCollapse'>
            <div className='titleCollapse' onClick={() => setOpen(!open)}>
                <h3>{title}</h3>
                <img src={open ? FlecheB : FlecheH} alt="Fleche" />
            </div>
            <div className={open ? "contentCollapse hidden" : "contentCollapse visible" }>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Collapse;