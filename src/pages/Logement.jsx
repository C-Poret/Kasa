import React, { useEffect, useState } from 'react';
import SlideShow from "../components/SlideShow";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Logement = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('../logement.json').then((res) => setData(res.data));
    }, []);

    const { id } = useParams();

    return (
        <main>
            {data.filter(logement => logement.id === id).map((logement, id) => (
                  <SlideShow pictures={logement.pictures} key={id} />
            ))}
        </main>
    );
};

export default Logement;