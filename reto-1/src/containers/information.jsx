
import React, { Component } from 'react';
import { Re1, Re5, Textin, Precio,Btninfo1,Btninfo2,TitleD,TextD,MapD,MapD2  } from '../style/StyleGlobal'
import r1 from '../assets/img/relleno1.svg'
import r2 from '../assets/img/relleno2.svg'
import r3 from '../assets/img/relleno3.svg'
import r4 from '../assets/img/relleno4.svg'
import r5 from '../assets/img/relleno5.svg'
import {NavLink} from 'react-router-dom'
import ApBar from '../components/apbar'

class Home extends Component {
    
    
    render() {
          
        return (
            <React.StrictMode>

                <Re5><td><img src={r2} alt=""/></td></Re5>
                <Textin>Macbook air 2015 core i3</Textin>
                <Precio>759 $</Precio>
                <Btninfo2><img src={r4} alt=""/></Btninfo2>
                <Btninfo1><img src={r3} alt=""/></Btninfo1>
                <TitleD>Description</TitleD>
                <TextD>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae turpis. In nulla posuere sollicitudin aliquam ultrices. Purus faucibus ornare suspendisse sed. In iaculis nunc sed augue. Elementum sagittis vitae et leo duis ut diam quam nulla. Facilisi morbi tempus iaculis urna id volutpat. Congue eu consequat ac felis donec et odio. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Amet aliquam id diam maecenas. Velit aliquet sagittis id consectetur purus ut faucibus.</TextD>
                <MapD><td><img src={r1} alt=""/></td></MapD>
                <MapD2><td><img src={r5} alt=""/></td></MapD2>
                <ApBar/>
            </React.StrictMode>
        );
    }
}//&& start json-server --watch ./src/data/data.json --port 4008

export default Home;