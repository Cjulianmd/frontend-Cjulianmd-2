import { useEffect, useState } from "react";
import { Re1, Re5, Textin, Precio,Btninfo1,Btninfo2,TitleD,TextD,MapD,MapD2  } from '../style/StyleGlobal'
import r1 from '../assets/img/relleno1.svg'
import r2 from '../assets/img/relleno2.svg'
import r3 from '../assets/img/relleno3.svg'
import r4 from '../assets/img/relleno4.svg'
import r5 from '../assets/img/relleno5.svg'
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";
import {  products } from './../redux/Actions/productAction';
import Appbar from './apbar'
import Produc from './myworkouts'
import { Myproducts } from './../redux/Actions/mypro';


function Arho(){
    const logOut = () => {
    const auth = getAuth();
    signOut(auth);
    window.location.href="./login"
}
    const [auth, setAuth] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Myproducts());
        const auth = getAuth();
        onAuthStateChanged( auth, (user) => {

                const name = user
                setAuth(name)
        } )
    }, [])
    const hola = auth.displayName
        document.body.style = 'background: #1F233E; '
        return (
            <>
            <Textin>{hola}</Textin>
                <Precio>Hi!</Precio>
                <Re5 ><img src={r2} alt=""/></Re5>

                <Btninfo2 onClick={logOut}><img src={r3} alt=""/></Btninfo2>
                <Produc/>
            </>
        );
}

export default Arho;