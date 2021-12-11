const baseUrl = 'http://localhost:3030';

export async function login(email, password){
    const res = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    let jsonResult = await res.json();

    if(res.ok){
        return jsonResult
    } else {
        throw jsonResult.message
    }
}

export async function register(email, password){
    const res = await fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    return await res.json();
}

export function logout(token){
    return fetch(`${baseUrl}/users/logout`, {
        headers: {
            'X-Authorization': token
        }
    })
}