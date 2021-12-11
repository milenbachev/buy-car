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