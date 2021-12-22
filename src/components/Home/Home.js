import {Carousel} from 'react-bootstrap'
import {useState, useEffect} from 'react';

import * as carService from '../../services/carService.js';
import './Home.css'


function Home() {
    const [cars , setCars] = useState([])

    useEffect(() => {
        carService.getAll()
            .then(result => {
                setCars(result.slice(-3))
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1 className='home-title'>Best place for sell your car</h1>
            <h3>Last add cars</h3>
        <Carousel>
            {cars.map(car => (
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={car.img}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{car.brand} {car.model}</h3>
                    <p>{car.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
            ))}
        </Carousel>
        </div>
    )
}

export default Home
