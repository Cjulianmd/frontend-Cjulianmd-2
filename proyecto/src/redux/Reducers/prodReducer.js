
import { MyProTypes, ProTypes } from './../types/productosTypes';


export const productoReducer = ( state = [], action ) => {
    switch (action.type) {

        case ProTypes.read:
            return action.payload

        default:
            return state;
    }
}

export const myproductoReducer = ( state = [], action ) => {
    switch (action.type) {

        case MyProTypes.read1:
            return action.payload

        default:
            return state;
    }
}





