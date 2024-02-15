const BACKEND_URL = 'http://localhost:8080';

// UTILISATEURS

export const getUsers = async () => {
    const response = await fetch(`${BACKEND_URL}/users`);
    return response.json();
}

export const getUser = async (id: string) => {
    const response = await fetch(`${BACKEND_URL}/users/${id}`);
    return response.json();
}

export const createUser = async (user: any) => {
    const response = await fetch(`${BACKEND_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return response.json();
}

// MODELES

export const getModeles = async () => {
    const response = await fetch(`${BACKEND_URL}/modeles`);
    return response.json();
}

export const getModele = async (id: string) => {
    const response = await fetch(`${BACKEND_URL}/modeles/${id}`);
    return response.json();
}

export const createModele = async (modele: any) => {
    const response = await fetch(`${BACKEND_URL}/modeles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(modele)
    });
    return response.json();
}


// VEHICULES

export const getVehicules = async () => {
    const response = await fetch(`${BACKEND_URL}/vehicules`);
    return response.json();
}

export const getVehicule = async (id: string) => {
    const response = await fetch(`${BACKEND_URL}/vehicules/${id}`);
    return response.json();
}

export const createVehicule = async (vehicule: any) => {
    const response = await fetch(`${BACKEND_URL}/vehicules`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vehicule)
    });
    return response.json();
}

// UTILISATIONS

export const getUtilisations = async () => {
    const response = await fetch(`${BACKEND_URL}/utilisations`);
    return response.json();
}

export const getUtilisation = async (id: string) => {
    const response = await fetch(`${BACKEND_URL}/utilisations/${id}`);
    return response.json();
}

export const createUtilisation = async (utilisation: any) => {
    const response = await fetch(`${BACKEND_URL}/utilisations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(utilisation)
    });
    return response.json();
}


