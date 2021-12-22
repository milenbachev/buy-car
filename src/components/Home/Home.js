import { useState, useEffect } from 'react';

import CarCard from '../CarCard/CarCard.js';
import * as carService from '../../services/carService.js';

import './Home.css';

function Home() {
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
        const {name, value} = e.target
        console.log(name)
        console.log(value)
        setSearchTerm(e.target.value);
    }

return (
    <div>
        <h1>Home page</h1>
        <div className='conteiner-home'>
            <div className='container-home-search'>
                <div className='container-home-search-body'>
                    <h6>Search by Brand</h6>
                    <input type='text' name='brand' onChange={onChangeHandler} />
                </div>
                <div className='container-home-search-body'>
                    <h6>Search by Model</h6>
                    <input type='text' name='model' onChange={onChangeHandler} />
                </div>
                
            </div>
            <div className='conteiner-home-body'>
                {cars.length > 0
                    ? cars.map(x => <CarCard key={x._id} car={x} />)
                    : <p className='p-home'>No car in database!</p>
                }
            </div>

        </div>
    </div>
)
}

export default Home
