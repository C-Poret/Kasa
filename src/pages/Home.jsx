import React, { useEffect, useState } from 'react';
import Banner from "../components/Banner";
import Card from "../components/Card";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('./logement.json').then((res) => setData(res.data));
    }, []);

    const navigate = useNavigate();

    return (
        <main>
            <Banner />
            <div className='containerCard'>
                {data.map((logement, id) => (
                    <div className='logementCard'>
                        <div onClick={() => {navigate('/logement/' + logement.id)}} className='logementLink' key={id}>
                            <Card cover={logement.cover} title={logement.title} />
                        </div>
                    </div>
                ))}

            </div>
        </main>
    );
};

export default Home;