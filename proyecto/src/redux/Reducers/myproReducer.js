
import { MyProTypes } from './../types/MyproTypes';



export const myproductoReducer = ( state = [], action ) => {
    switch (action.type) {

        case MyProTypes.add:
            return action.payload

        case MyProTypes.read1:
            return action.payload

        default:
            return state;
    }
}

