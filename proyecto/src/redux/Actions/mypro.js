
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseconfig"
import {  ProTypes } from "../types/productosTypes"
import { protypes, userTypes } from "../types/userTypes"
import { MyProTypes } from './../types/MyproTypes';




export const Myproducts = (data) => {
    return async(dispatch) => {
        console.log(data)
        addDoc(collection(db, "myproducts"), data)
    }
}
