import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'

import { AuthContext } from '../../contexts/AuthContext';
import * as carService from '../../services/carService.js';

import './Details.css'

function Details() {
    const { user } = useContext(AuthContext);
    const [car, setCar] = useState({});
    const { carId } = useParams();

    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                setCar(result)
            })
    }, [carId])

    const ownerButton = (
        <div>
            <Link to="/edit" className='details-button'>
                <Button variant='warning'>Edit</Button>
            </Link>
            <Link to="/delete" className='details-button'>
                <Button variant='danger'>Delete</Button>
            </Link>
        </div>
    )

    const guestButton = (
        <div>
            <Link to="#">
                <Button variant='info'>Like</Button>
            </Link>
        </div>
    )

    return (
        <Card style={{ width: '26rem' }}>
            <Card.Img variant="top" src={car.img} alt={car.model} />
            <Card.Body>
                <Card.Title>{car.brand} {car.model}</Card.Title>
                <div className='details-body'>
                    <div className='detaile-body-item'>
                        <p className="card-text">Year: {car.year}</p>
                        <p className="card-text">Engine: {car.engine}</p>
                        <p className="card-text">Price: {car.price} $</p>
                    </div>
                    <div className='detaile-body-item'>
                        <p className="card-text">Transmition: {car.transmission}</p>
                        <p className="card-text">Color: {car.color}</p>
                        <p className="card-text">Kilometers Traveled: {car.kilometersTraveled}</p>
                    </div>
                </div>
                <div>
                    <p className="card-text">Description: {car.description}</p>
                </div>
                {user._id === car._ownerId
                    ? ownerButton
                    : guestButton
                }
            </Card.Body>
        </Card>
    )
}

export default Details

 //<div className="card-details">
            //<img className="card-img-top" src={car.img} alt={car.model} />
            //<div className="card-body">
                //<h2 className="card-title">{car.brand} {car.model}</h2>
                //<div className='details-body'>
                   // <div className='detaile-body-item'>
                       // <p className="card-text">Year: {car.year}</p>
                       // <p className="card-text">Engine: {car.engine}</p>
                        //<p className="card-text">Price: {car.price} $</p>
                   // </div>
                    //<div className='detaile-body-item'>
                       // <p className="card-text">Transmition: {car.transmission}</p>
                       // <p className="card-text">Color: {car.color}</p>
                        //<p className="card-text">Kilometers Traveled: {car.kilometersTraveled}</p>
                   // </div>
               // </div>
               // <div>
                    //<p className="card-text">Description: {car.description}</p>
               // </div>
                   //{user._id === car._ownerId
                       // ? ownerButton
                       // : guestButton
                    //}
            ///</div>
        //</div>