
import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebaseconfig"
import { MyProTypes, ProTypes } from "../types/productosTypes"
import { protypes, userTypes } from "../types/userTypes"





export const products = () => {
    return async(dispatch) => {
        try {
            const dates = []
            const resp = await getDocs(collection(db,'products'))
            resp.forEach((doc) => dates.push(doc.data()))
            dispatch(readproducts(dates))
        } catch (error) {
            alert("eres un imbecil")
        }
        
    }
}



const readproducts = (dates) =>( {
   type: ProTypes.read,
   payload: dates
})


