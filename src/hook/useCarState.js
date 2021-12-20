import {useState, useEffect} from 'react';

import * as carService from '../services/carService.js';

const useCarState = (carId) => {
    const [car, setCar] = useState({})

    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                setCar(result)
            })
    }, [carId])

    return [
        car,
        setCar
    ]
}

export default useCarState