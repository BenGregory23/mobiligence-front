const BACKEND_URL = 'http://localhost:8080';


export const login = async (credentials:{login:string,password:string}) => {

    const response = await fetch(`${BACKEND_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({login:credentials.login,password:credentials.password}),
        redirect: 'follow'
    });
   
    return response;
}
