import React, { useState } from 'react';
import { Recta45, Tab } from '../style/StyleGlobal';
import tap from '../assets/img/Workout23.svg'
import { TexRecta45 } from './../style/StyleGlobal';
import { NavLink } from 'react-router-dom';

function Yolo(){
    const [bacground, setBacground] = useState(false);
    const presion = () => {
        window.location.href="./julianfff"
    }
    
        return (
            <div>
                 <NavLink to='/julianfff'>
                <Recta45 onClick = {presion} ></Recta45> 
                <TexRecta45>Pull-ups</TexRecta45> 
               
                    <img src={tap} alt=""/>
                    
                  </NavLink> 
            </div>
        );
}

export default Yolo;