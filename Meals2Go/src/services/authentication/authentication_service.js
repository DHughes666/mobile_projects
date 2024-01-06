import {signInWithEmailAndPassword} from "firebase/auth";

export const loginRequest = (authy, email, password) => {
    return signInWithEmailAndPassword(authy, email, password);
}
