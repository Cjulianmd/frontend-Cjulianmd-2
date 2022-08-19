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
                <TitleN>Сharacter</TitleN>
                <TextN>
                Cultivate in you an iron character
 for training
                </TextN>
                <SliderN><td><img src={slider} alt=""/></td></SliderN>
            </React.StrictMode>
        );
    }
}

export default Quiz;














/*const [counter, setCounter] = useState(1);

function count(){
      window.location.href="./win";
 }*/
 /*<NavLink to='/test'><Back><img src={r5} alt=""/></Back></NavLink>
        <Textacon1>About business</Textacon1>
      <Video>
      <Reactplayer
      url='https://www.youtube.com/embed/EeO0Sesuri8'
      border-radius='15px'
      height='200px'  
      width='358px'
      controls
      playing/>
    </Video>
    <BoxP>


    </BoxP>
    <BoxPre>
      <Bpre1 >
      <center>
      <Btpre>A</Btpre>
      </center>
      </Bpre1>
      <BoxPreT></BoxPreT>
    </BoxPre>

    <BoxPre2>
      <Bpre2 >
      <center>
      <Btpre>B</Btpre>
      </center>
      </Bpre2>
      <BoxPreT></BoxPreT>
    </BoxPre2>

    <BoxPre3>
      <Bpre3>
      <center>
      <Btpre>C</Btpre>
      </center>
      </Bpre3>
      <BoxPreT></BoxPreT>
    </BoxPre3>

    <BtNext onClick={() => count()}><center><BtpreN  >Next</BtpreN></center></BtNext>*/