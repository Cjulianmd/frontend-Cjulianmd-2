import { userTypes } from "../types/userTypes"
import { getAuth, signInWithPopup } from 'firebase/auth';
import { google } from "../../firebase/firebaseconfig";
//aqui se pueden hacer las condicionales

export const loginGogle = () => {
    return (dispatch) => {
        const autn = getAuth();
        signInWithPopup(autn, google )
        .then( ({user}) => console.log(user))
    }
}


export const loginsincrono = (email, password) => { 
    return{ 
        type: userTypes.login,
        payload: {
            email,
            password
        
        }
    }
    
}