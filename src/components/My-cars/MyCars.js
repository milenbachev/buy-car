import {useContext, useEffect, useState} from 'react';

import {AuthContext} from '../../contexts/AuthContext.js';
import * as carService from '../../services/carService.js'
import CarCard from '../CarCard/CarCard.js';

import './MyCars.css'

function MyCars(){
    const [cars, setCars] = useState([]);
    const{user} = useContext(AuthContext);

    useEffect(() =>{
        carService.getMyCar(user._id)
            .then(result => {
                setCars(result)
            })
    }, [user._id])

    return(
        <div>
             <h1>MyCars page</h1>
             <div className='conteiner-my-cars'>
                 {cars.length > 0 
                    ?cars.map(x => <CarCard key={x._id} car={x} />)
                    : <p className='p-my-cars'>You don't have car</p>}
             </div>
        </div>
    )
}

export default MyCars;