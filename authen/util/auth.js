import axios from 'axios';

const authenticate = async (mode, email, password) => {
    const API_KEY = 'AIzaSyDa-w5vsmfgHWGiP3hXYfkO042sN85KjiI'
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
    
    const response = await axios.post(url, {
        email: email, 
        password: password,
        returnSecureToken: true
    });

    const token = response.data.idToken;
    return token;

};

export const createUser = (email, password) => {
    return authenticate('signUp', email, password);
}

export const login = (email, password) => {
    return authenticate('signInWithPassword', email, password);
}
