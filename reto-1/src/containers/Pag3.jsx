import {NavLink} from 'react-router-dom'
import React, { Component } from 'react';
import {BtNext, BtpreN, Img2} from '../style/StyleGlobal'
import Img1  from '../assets/img/img3.svg';
import slider from '../assets/img/Slider3.svg'
import {TitleN, TextN , SliderN} from '../style/StyleGlobal'
import Tap1 from '../components/NavBar'
class Quiz extends Component {
    render() {
        return (
            <React.StrictMode>
                <Tap1/>
                <Img2><td><img src={Img1} alt=""/></td>
                </Img2>
                <NavLink to="/iniciarseccion">
                    <BtNext ><center><BtpreN>Next</BtpreN></center></BtNext>
                </NavLink>
                <TitleN>Buy</TitleN>
                <TextN>
                See and choose products suitable products or products that are nearby
                </TextN>
                <SliderN><td><img src={slider} alt=""/></td></SliderN>
            </React.StrictMode>
        );
    }
}

export default Quiz;