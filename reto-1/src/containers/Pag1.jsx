import {NavLink} from 'react-router-dom'
import React, { Component } from 'react';
import {BtNext, Img2} from '../style/StyleGlobal'
import Img1  from '../assets/img/img1.svg';
import slider from '../assets/img/Slider1.svg'
import {TitleN, TextN , SliderN} from '../style/StyleGlobal'
import Tap1 from '../components/NavBar'
import { BtpreN } from './../style/StyleGlobal';
class Quiz extends Component {
    render() {
        return (
            <React.StrictMode>
                <Tap1/>
                <Img2><td><img src={Img1} alt=""/></td>
                </Img2>
               
                <TitleN>Choose</TitleN>
                <TextN>
                Choose products available add to favorites and then buy
                </TextN>
                <SliderN><td><img src={slider} alt=""/></td></SliderN>
                <NavLink to="/Pag2">
                    <BtNext ><center><BtpreN>Next</BtpreN></center></BtNext>
                </NavLink>
            </React.StrictMode>
        );
    }
}

export default Quiz;