import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../assets/img/Logo.svg'
import { Img1 } from '../style/StyleGlobal';


class Home extends Component {
    render() {document.body.style = 'background: #1F233E; '
        return (
            <div>
                <Img1>
                    <NavLink to="/Pag1">
                        <img src={logo} alt=""/>
                    </NavLink>
                </Img1>
            </div>
        );
    }
}

export default Home;