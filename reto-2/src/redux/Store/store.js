import {applyMiddleware, combineReducers,createStore} from "redux"
import thunk from "redux-thunk";
import { userReduce, userReducer } from "../Reducers/userReducer";



const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ;

const reducers = combineReducers({
    login: userReducer,
    read: userReduce
})



export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

