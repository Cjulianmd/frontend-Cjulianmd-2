import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Splashscreen from '../containers/Splashscreen';
import Home from "../containers/information";
import Login from "../containers/back";
import Register from "../containers/create";
import Pag1 from '../containers/Pag1'
import Pag2 from '../containers/Pag2'
import Pag3 from '../containers/Pag3'
import NavBar from '../components/NavBar';
import Mywork from '../components/aehi';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
 


const AppRouter = () => {
    const [auth, setAuth] = useState(false)
   
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged( auth, (user) => {
            if (user?.uid) {
                console.log(user.displayName);
                // Posibilidad de recuperar la info luego de que se recargue la web
                setAuth(true)
            } else {
                setAuth(false)
            }
        } )
    }, [])

    return (
        <BrowserRouter>
        <NavBar/>
            <Routes>
                {/* Rutas publicas */}
                <Route path="/spashs" element={<PublicRouter isAutentication={auth}><Splashscreen/></PublicRouter>}/>
                <Route path="/Pag1" element={<PublicRouter isAutentication={auth}><Pag1/></PublicRouter>}/>
                <Route path="/Pag2" element={<PublicRouter isAutentication={auth}><Pag2/></PublicRouter>}/>
                <Route path="/Pag3" element={<PublicRouter isAutentication={auth}><Pag3/></PublicRouter>}/>
                <Route path='/login' element={<PublicRouter isAutentication={auth}> <Login /> </PublicRouter>} />
                <Route path='/register' element={<PublicRouter isAutentication={auth}> <Register /> </PublicRouter>} />
                
                {/* Rutas privadas */}
                <Route path='/' element={<PrivateRouter isAutentication={auth}> <Home /> </PrivateRouter>} />
                <Route path='/myworks' element={<PrivateRouter isAutentication={auth}> <Mywork /> </PrivateRouter>} />

                {/* Redireccionamiento */}
                <Route path='*' element={<Navigate to='/login' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter




/*import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Splashscreen from '../containers/Splashscreen';
import Pag1 from '../containers/Pag1'
import Pag2 from '../containers/Pag2'
import Pag3 from '../containers/Pag3'
import Home from '../containers/information'
import Very from '../containers/veryfication' 
import Filtro from '../containers/filtrert' 
import Iniciar from '../containers/back'
import Walled from '../components/walled'
import Addwalled from '../components/addwalled'
import Create from '../containers/create'
class AppRoutes extends Component {
    render() {
        return (
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Splashscreen/>}/>
                    <Route path="/Pag1" element={<Pag1/>}/>
                    <Route path="/Pag2" element={<Pag2/>}/>
                    <Route path="/Pag3" element={<Pag3/>}/>
                    <Route path="/Filtro" element={<Filtro/>}/>
                    <Route path="/information" element={<Home/>}/>
                    <Route path="/veryfication" element={<Very/>}/>
                    <Route path="/Walled" element={<Walled/>}/>
                    <Route path="/Addwalled" element={<Addwalled/>}/>
                    <Route path="/iniciarseccion" element={<Iniciar/>}/>
                    <Route path="/create" element={<Create/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default AppRoutes;*/