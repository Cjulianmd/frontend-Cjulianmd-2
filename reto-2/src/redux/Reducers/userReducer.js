import { protypes, userTypes } from "../types/userTypes";



export const userReducer = (state = 0, action) => {

    switch (action.type) {
        case userTypes.login:
            return action.payload;

        case userTypes.register:
             return action.payload

        default:
            return state
    }
    
}
export const userReduce = (state = 0, action) => {

    switch (action.type) {
        case protypes.read:
            return action.payload
        default:
            return state
    }
    
}