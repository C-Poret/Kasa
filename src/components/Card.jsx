import React from 'react';

const Card = ({cover, title}) => {
    return (
        <article className='card' style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7))," + `url(${cover})`, backgroundSize: "cover"}}>
            <h2>{title}</h2>
        </article>
    );
};

export default Card;