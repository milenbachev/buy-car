import {Link} from 'react-router-dom';

function CarCard({
    car
}) {
    return (
        <div className="card">
            <img className="card-img-top" src={car.img} alt={car.model}/>
                <div className="card-body">
                    <h5 className="card-title">{car.brand} {car.model}</h5>
                    <p className="card-text">{car.description}</p>
                    <Link to={`/details/${car._id}`} className="btn btn-primary">Details</Link>
                </div>
        </div>
    )
}

export default CarCard