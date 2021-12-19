import { Link } from 'react-router-dom';
import {Card, Button} from 'react-bootstrap'

import './CarCard.css'

function CarCard({
    car
}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={car.img} alt={car.model} />
            <Card.Body>
                <Card.Title>{car.brand} {car.model}</Card.Title>
                <Card.Text>Year: {car.year}</Card.Text>
                <Card.Text>Price: {car.price}</Card.Text>
                <Link to={`/details/${car._id}`}>
                    <Button variant="primary">Details</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default CarCard
