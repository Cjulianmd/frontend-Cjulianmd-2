import React, { Component } from 'react';
import { Tab } from '../style/StyleGlobal';
import tap from '../assets/img/tap.svg'

function NavBar(){
        return (
            <div>
                
                <Tab>
                    <td><img src={tap} alt=""/></td>
                    
                </Tab>
                
            </div>
        );
}

export default NavBar;