//import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data';

//export const createPost = (userId, carId, postData) => request.post(`${baseUrl}/posts`, {userId, carId, postData})
export function createPost(postData, token){
    return fetch(`${baseUrl}/posts`,{ 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
}

export function getAllPost(){
    return fetch(`${baseUrl}/posts`)
        .then(res => res.json());
}