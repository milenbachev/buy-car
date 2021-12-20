import { useState, useEffect, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'

import { AuthContext } from '../../contexts/AuthContext';
import * as carService from '../../services/carService.js';
import ConfirmDialog  from '../../common/ConfirmDialog/ConfirmDialog.js';

import './Details.css'

function Details() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [car, setCar] = useState({});
    const [shoulDeleteDialog, setShoulDeleteDialog] = useState(false)
    const { carId } = useParams();

    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                setCar(result)
            })
    }, [carId])

    const deleteHandler = (e) => {
        e.preventDefault();

        carService.deleteCar(carId, user.accessToken)
            .then(() => {
                navigate('/')
            })
            .finally(() => {
                setShoulDeleteDialog(false);
            })
    }

    const onClickDeleteHandler = (e) => {
        e.preventDefault();

        setShoulDeleteDialog(true);
    }

    const onClose = () => {
       
        setShoulDeleteDialog(false);
    }

    const ownerButton = (
        <div>
            <Link to={`/edit/${car._id}`} className='details-button'>
                <Button variant='warning'>Edit</Button>
            </Link>
            <Link to="/delete" className='details-button'>
                <Button variant='danger' onClick={onClickDeleteHandler} >Delete</Button>
            </Link>
        </div>
    )

    const guestButton = (
        <div>
            <Link to={`/details/create-posts/${carId}`} className='details-button'>  
                <Button variant='info'>Create post</Button>
            </Link>
            <Link to={`/details/posts/${carId}`} className='details-button'>
                <Button variant='info'>All post</Button>
            </Link>
        </div>
    )

    return (
        <>
        <ConfirmDialog  show={shoulDeleteDialog} onClose={onClose} onSave={deleteHandler}/>
            <Card style={{ width: '26rem' }}>
                <Card.Img variant="top" src={car.img} alt={car.model} />
                <Card.Body>
                    <Card.Title>{car.brand} {car.model}</Card.Title>
                    <div className='details-body'>
                        <div className='detaile-body-item'>
                            <p className="card-text-details">Year: {car.year}</p>
                            <p className="card-text-details">Engine: {car.engine}</p>
                            <p className="card-text-details">Price: {car.price} $</p>
                        </div>
                        <div className='detaile-body-item'>
                            <p className="card-text-details">Transmition: {car.transmission}</p>
                            <p className="card-text-details">Color: {car.color}</p>
                            <p className="card-text-details">Kilometers Traveled: {car.kilometersTraveled}</p>
                        </div>
                    </div>
                    <div>
                        <p className="card-text-details">Description: {car.description}</p>
                    </div>
                    {user._id === car._ownerId
                        ? ownerButton
                        : guestButton
                    }
                </Card.Body>
            </Card>
        </>
    )
}

export default Details
