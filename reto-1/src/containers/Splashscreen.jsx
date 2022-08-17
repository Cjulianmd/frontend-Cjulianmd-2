import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../assets/img/Logo.svg'
import { Img1 } from '../style/StyleGlobal';


class Home extends Component {
    render() {
        return (
            <div>
                <Img1>
                    
                    <NavLink to="/Pag1">
                        <td><img src={logo} alt=""/></td>
                    </NavLink>
                </Img1>
            </div>
        );
    }
}

export default Home;