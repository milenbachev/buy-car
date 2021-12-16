const baseUrl = 'http://localhost:3030/data';

export function createCar(carData, token){
    return fetch(`${baseUrl}/cars`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(carData)
    })
        .then(res => res.json())
}

export function getAll(){
    return fetch(`${baseUrl}/cars`)
        .then(res => res.json())
}

export function getMyCar(userId){
    return fetch(`${baseUrl}/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
        .then(res => res.json())
        
}

export function getOne(id){
    return fetch(`${baseUrl}/cars/${id}`)
        .then(res => res.json())
}

export function deleteCar(carId, token){
    return fetch(`${baseUrl}/cars/${carId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    })
    .then(res => res.json())
}

export function editCar(carData, token, id){
    return fetch(`${baseUrl}/cars/${id}` , {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(carData)
    })
        .then(res => res.json())     
}