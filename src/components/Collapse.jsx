import React, { useRef, useState } from 'react';
import FlecheB from "../assets/Fleche_Bas.svg";

const Collapse = ({title, content}) => {

    const [open, setOpen] = useState(true);
    const contentRef = useRef();

    return (
        <div>
            <div className='titleCollapse' onClick={() => setOpen(!open)}>
                <h3>{title}</h3>
                <img className={open ? "flecheBas" : "flecheHaut" } src={FlecheB} alt="Fleche" />
            </div>
            <div className={open ? "contentCollapse hidden" : "contentCollapse visible"} ref={contentRef} style={{ height: open ? "0" : `${contentRef.current.scrollHeight}px` }}>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Collapse;