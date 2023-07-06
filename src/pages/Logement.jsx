import React, { useEffect, useState } from 'react';
import SlideShow from "../components/SlideShow";
import Collapse from '../components/Collapse';
import Rating from "../components/Rating";
import Data from "../data/logement.json";
import { useNavigate, useParams } from 'react-router-dom';

const Logement = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        const dataLogement = Data.find(logement => logement.id === id);
        Data.map(() => setData(dataLogement));
        if ( dataLogement === undefined) {
            navigate("/error")
        };
    }, []);

    if (data.length === 0) {
        return (null)
    } else {
        return (
            <main>
                <div>
                    <SlideShow pictures={data.pictures} />
                    <div className='infoLogement'>
                        <div className='containerLogement'>
                            <div className='containerLogementLeft'>
                                <h2>{data.title}</h2>
                                <h3>{data.location}</h3>
                                <ul>
                                    {data.tags.map((tag) => <li key={tag}>{tag}</li>)}
                                </ul>
                            </div>
                            <div className='containerLogementRight'>
                                <div className='containerHost'>
                                    <p>{data.host.name}</p>
                                    <img src={data.host.picture} alt="Photo de profil du propriétaire" />
                                </div>
                                <Rating rating={data.rating} />
                            </div>
                        </div>
                        <div className="containerCollapseLogement">
                            <div className="collapseLogement">
                                <Collapse title="Description" content={data.description} />
                            </div>
                            <div className="collapseLogement">
                                <Collapse title="Equipements" content={data.equipments.map((liste) => <li key={liste}>{liste}</li>)} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
};

export default Logement;