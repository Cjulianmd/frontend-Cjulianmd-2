import React, { Component } from 'react'
import { Re3, Apbari, Apbari2, Apbari3, Apbari4} from '../style/StyleGlobal'
import Home from "../assets/img/i1.svg";
import Test from "../assets/img/i2.svg";
import estadistica from "../assets/img/i3.svg";
import Profile from "../assets/img/i4.svg";
import Mas from "../assets/img/i5.svg";
import {NavLink} from 'react-router-dom'
import { Apbari5 } from './../style/StyleGlobal';
export default class apbar extends Component {
  render() {
    return (
      <div>
        <Re3>
        <NavLink to="/Home"><Apbari ><img  src={Home} alt=""/></Apbari></NavLink>
        <NavLink to="/test"><Apbari2> <img src={Test} alt=""/></Apbari2></NavLink>
        <NavLink to="/test"><Apbari> <img src={Mas} alt=""/></Apbari></NavLink>
        <NavLink to="/estadistica"><Apbari3> <img src={estadistica} alt=""/></Apbari3></NavLink>
        <NavLink to="/pagina-perfil"><Apbari4><img src={Profile} alt=""/></Apbari4></NavLink>
        </Re3>
      </div>
    )
  }
}
