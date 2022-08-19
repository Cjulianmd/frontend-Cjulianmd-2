
import { useEffect, useState } from "react";
import { Re1, Re5, Textin, Precio,Btninfo1,Btninfo2,TitleD,TextD,MapD,MapD2  } from '../style/StyleGlobal'
import r1 from '../assets/img/relleno1.svg'
import r2 from '../assets/img/relleno2.svg'
import r3 from '../assets/img/relleno3.svg'
import r4 from '../assets/img/relleno4.svg'
import r5 from '../assets/img/relleno5.svg'
import {NavLink} from 'react-router-dom'
import ApBar from '../components/apbar'
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Arho from "../components/arho";
 const name = useDispatch.displayName;
function Home(){
        document.body.style = 'background: #1F233E; '
        return (
            <>
                <Arho/>
            </>
        );
}

export default Home;



/*
                
                <ApBar/>*/