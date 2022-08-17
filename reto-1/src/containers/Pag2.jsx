import {NavLink} from 'react-router-dom'
import React, { Component } from 'react';
import {BtNext, BtpreN, Img2} from '../style/StyleGlobal'
import Img1  from '../assets/img/img2.svg';
import slider from '../assets/img/Slider2.svg'
import {TitleN, TextN , SliderN} from '../style/StyleGlobal'
import Tap1 from '../components/NavBar'
class Quiz extends Component {
    render() {
        return (
            <React.StrictMode>
                <Tap1/>
                <Img2><td><img src={Img1} alt=""/></td>
                </Img2>
                <NavLink to="/Pag3">
                    <BtNext ><center><BtpreN>Next</BtpreN></center></BtNext>
                </NavLink>
                <TitleN>Sell</TitleN>
                <TextN>
                List your items for sale and see how fast they get bought
                </TextN>
                <SliderN><td><img src={slider} alt=""/></td></SliderN>
            </React.StrictMode>
        );
    }
}

export default Quiz;