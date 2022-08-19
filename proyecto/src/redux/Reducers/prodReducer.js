
import { MyProTypes, ProTypes } from './../types/productosTypes';


export const productoReducer = ( state = [], action ) => {
    switch (action.type) {

        case ProTypes.read:
            return action.payload
        case ProTypes.add:
            return action.payload

        default:
            return state;
    }
}

export const myproductoReducer = ( state = [], action ) => {
    switch (action.type) {

        case MyProTypes.add:
            return action.payload

        default:
            return state;
    }
}





