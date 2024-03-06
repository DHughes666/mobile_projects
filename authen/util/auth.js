import axios from 'axios';

const API_KEY = 'AIzaSyDa-w5vsmfgHWGiP3hXYfkO042sN85KjiI'

const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

export const createUser = async (email, password) => {
    const response = await axios.post(url, {
        email: email, 
        password: password,
        returnSecureToken: true
    });
}