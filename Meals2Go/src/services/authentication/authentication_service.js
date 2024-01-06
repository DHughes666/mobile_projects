import {signInWithEmailAndPassword, 
    createUserWithEmailAndPassword} from "firebase/auth";

export const loginRequest = (authy, email, password) => {
    return signInWithEmailAndPassword(authy, email, password);
}

export const registerRequest = (authy, email, password) => {
    return createUserWithEmailAndPassword(authy, email, password);
}
