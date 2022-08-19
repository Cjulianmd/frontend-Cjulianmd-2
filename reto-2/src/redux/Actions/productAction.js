
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebaseconfig"
import { protypes, userTypes } from "../types/userTypes"





export const products = () => {
    return async(dispatch) => {
        try {
            const dates = []
            const res = await getDocs(collection(db,'products'))
            res.forEach((doc) => dates.push(doc.data()))
            dispatch(readproducts(dates))
        } catch (error) {
            alert("eres un imbecil")
        }
        
    }
}
const readproducts = (dates) =>( {
   type: protypes.read,
   payload: dates
})


