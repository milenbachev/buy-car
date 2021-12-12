import { useState, useEffect } from 'react';

import CarCard from "./CarCard/CarCard";
import * as carService from '../../services/carService.js';

import './Home.css';

function Home() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll()
            .then(result => {
                setCars(result)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>Home page</h1>
            <div className='conteiner-home'>
                {cars.length > 0
                    ? cars.map(x => <CarCard key={x._id} car={x} />)
                    : <p>No car in database!</p>
                }
            </div>
        </div>
    )
}

export default Home
