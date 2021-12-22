const baseUrl = 'http://localhost:3030/data';

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
    return fetch(`${baseUrl}/posts?select=name`)
        .then(res => res.json());
}