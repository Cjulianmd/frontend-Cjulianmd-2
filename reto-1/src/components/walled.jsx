import React, { useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import r1 from '../assets/img/Name.svg'
import r2 from '../assets/img/mastercard.svg'
import r5 from '../assets/img/flecha.svg'
import {  Re7, Re2, Textacon, Textacon1, Back, Rectangle60, Rectangle61 } from '../style/StyleGlobal'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import { Btpre2, Boxcou2 } from './../style/StyleGlobal';

const cookies = new Cookies ();
export default function Acconysent(){
  let id = cookies.get('id'); 

  const url = 'http://localhost:4008/walled';
  const [data, setData] = useState([]); 

  const getUsers = async() =>{
      await axios.get(url)
      .then(response => {
        setData(response.data)
        console.log(data)
      })
  }
  useEffect( ()=>{
       getUsers()
      
  },[])
  const nombre = data.Cardnumber
    return (
      <div>
        <NavLink to='/Walled'><Back><img src={r5} alt=""/></Back>
        <Textacon1>Payment</Textacon1></NavLink>
        <Boxcou2>
      {data.map(consola=>
            <Rectangle61 key={consola.id} >
                <Btpre2>
                <img src={r2} alt=""/>{consola.Cardnumber}
                </Btpre2>
            </Rectangle61>
            )}
    </Boxcou2>
        <NavLink to='/addwalled'><Re7>add new card</Re7></NavLink>
      </div>
    )
}
