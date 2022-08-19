
import { ProTypes } from './../types/productosTypes';


export const productoReducer = ( state = [], action ) => {
    switch (action.type) {

        case ProTypes.read:
            return action.payload

        default:
            return state;
    }
}