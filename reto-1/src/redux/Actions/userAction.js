import { userTypes } from "../types/userTypes"
import { getAuth, signInWithPopup } from 'firebase/auth';
import { google } from "../../firebase/firebaseconfig";
import { GoogleAuthProvider } from 'firebase/auth';
//aqui se pueden hacer las condicionales

export const loginGogle = () => {
    return (dispatch) => {
        const autn = getAuth();
        signInWithPopup(autn, google )
        .then( ({user}) => dispatch(loginProvider(user.displayName, user.email, user.photoURL))
        ).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }
}
const loginProvider = (displayName,email,photoURL ) => {
    return{
        type: userTypes.login,
        payload:{
            displayName,
            email,
            photoURL
        }
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
export const registerincrono = (name, email,number, password) => { 
    return{ 
        type: userTypes.register,
        payload: {
            email,
            name,
            number,
            password
        
        }
    }
    
}