import { useState, useEffect } from 'react';

import CarCard from '../CarCard/CarCard.js';
import * as carService from '../../services/carService.js';

import './AllCars.css';

function AllCars() {
    const [cars, setCars] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if(searchTerm === '' || searchTerm === 'All'){
            carService.getAll()
            .then(result => {
                setCars(result)
            })
            .catch(err => {
                console.log(err)
            })
        }else{
            let brand = searchTerm

        carService.getCarByBrand(brand)
            .then(response => {
                setCars(response)
            })

        }
       
    }, [searchTerm])

    const onChangeHandler = (e) => {
        setSearchTerm(e.target.value);
    }

return (
    <div>
        <h1>Home page</h1>
        <div className='conteiner-allCars'>
            <div className='container-allCars-search'>
                <div className='container-allCars-search-body'>
                    <h6>Search by Brand</h6>
                    <input type='text' name='brand' onChange={onChangeHandler} />
                </div>
            </div>
            <div className='conteiner-allCars-body'>
                {cars.length > 0
                    ? cars.map(x => <CarCard key={x._id} car={x} />)
                    : <p className='p-allCars'>No car in database!</p>
                }
            </div>

        </div>
    </div>
)
}

export default AllCars