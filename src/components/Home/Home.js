import { useState, useEffect } from 'react';

import CarCard from '../CarCard/CarCard.js';
import * as carService from '../../services/carService.js';

import './Home.css';

function Home() {
    const [cars, setCars] = useState([]);
    //const [currentPage, setCurrentPage] = useState(1);
    //const [carsPerPage] = useState(3);

    console.log(cars)
    useEffect(() => {
        carService.getAll()
            .then(result => {
                setCars(result)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    //const indexOfLastCar = currentPage * carsPerPage;
    //const indexOfFirstCar = indexOfLastCar - carsPerPage;
    //const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

    return (
        <div>
            <h1>Home page</h1>
            <div className='conteiner-home'>
            {cars.length > 0
                    ? cars.map(x => <CarCard key={x._id} car={x} />)
                    : <p className='p-home'>No car in database!</p>
                }
            
            </div>
        </div>
    )
}

export default Home
