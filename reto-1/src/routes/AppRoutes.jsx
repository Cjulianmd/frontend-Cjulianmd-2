import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Splashscreen from '../containers/Splashscreen';
import Pag1 from '../containers/Pag1'
import Pag2 from '../containers/Pag2'
import Pag3 from '../containers/Pag3'
import Home from '../containers/information'
import Very from '../containers/veryfication' 
import Filtro from '../containers/filtrert' 

import Walled from '../components/walled'
import Addwalled from '../components/addwalled'
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
                </Routes>
            </BrowserRouter>
        );
    }
}

export default AppRoutes;