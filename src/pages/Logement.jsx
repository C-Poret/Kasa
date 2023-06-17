import React, { useEffect, useState } from 'react';
import SlideShow from "../components/SlideShow";
import Collapse from '../components/Collapse';
import Rating from "../components/Rating";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Logement = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('../logement.json').then((res) => setData(res.data));
    }, []);

    const { id } = useParams();
    const infos = data.filter(logement => logement.id === id);

    const navigate = useNavigate();

    if ( infos.length === 1) {
        return (
            <main>
                {infos.map((logement, id) => (
                    <div key={logement} >
                        <SlideShow pictures={logement.pictures} />
                        <div className='infoLogement'>
                            <div className='containerLogement'>
                                <div className='containerLogementLeft'>
                                    <h2>{logement.title}</h2>
                                    <h3>{logement.location}</h3>
                                    <ul>
                                        {logement.tags.map((tag) => <li key={tag} >{tag}</li>)}
                                    </ul>
                                </div>
                                <div className='containerLogementRight'>
                                    <div className='containerHost'>
                                        <p>{logement.host.name}</p>
                                        <img src={logement.host.picture} alt="Photo de profil du propriétaire" />
                                    </div>
                                    <Rating rating={logement.rating} />
                                </div>
                            </div>
                            <div className="containerCollapseLogement">
                                <div className="collapseLogement">
                                    <Collapse title="Description" content={logement.description} />
                                </div>
                                <div className="collapseLogement">
                                    <Collapse title="Equipements" content={logement.equipments.map((liste) => <li key={liste} >{liste}</li>)} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        )
    } else {
        return (
        navigate('/error')
        )
    };
};

export default Logement;