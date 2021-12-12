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