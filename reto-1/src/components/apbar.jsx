import React, { Component } from 'react'
import { Re3, Apbari, Apbari2, Apbari3, Apbari4} from '../style/StyleGlobal'
import Home from "../assets/img/i1.svg";
import Test from "../assets/img/i2.svg";
import estadistica from "../assets/img/i3.svg";
import Profile from "../assets/img/i4.svg";
import Mas from "../assets/img/i5.svg";
import {NavLink} from 'react-router-dom'
import { Apbari5 } from './../style/StyleGlobal';
import { getAuth, signOut } from "firebase/auth";
export default function apbar(){
  const logOut = () => {
    const auth = getAuth();
    signOut(auth);
    window.location.href="./login"
}
    return (
      <div>
        <Re3>
        <NavLink to="/Home"><Apbari ><img  src={Home} alt=""/></Apbari></NavLink>
        <NavLink to="/test"><Apbari2> <img src={Test} alt=""/></Apbari2></NavLink>
        <NavLink to="/test"><Apbari5> <img src={Mas} alt=""/></Apbari5></NavLink>
        <NavLink to="/estadistica"><Apbari3> <img src={estadistica} alt=""/></Apbari3></NavLink>
        <NavLink onClick={logOut} to="/login"><Apbari4><img src={Profile} alt=""/></Apbari4></NavLink>
        </Re3>
      </div>
    )
}
