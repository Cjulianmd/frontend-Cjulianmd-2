import React, {  useState } from "react"
import Reactplayer from 'react-player'
import { Video, Textacon1, Back, Bpre2, Btpre, Bpre3, Bpre1, BtNext, BtpreN, BoxPre4, BoxPre2, BoxP } from '../style/StyleGlobal'
import {NavLink} from 'react-router-dom'
import r5 from '../assets/img/flecha.svg'
import { Bpre4, BoxPre, BoxPre3, BoxPreT } from './../style/StyleGlobal';
import r1 from '../assets/img/Done set.svg'
import r2 from '../assets/img/set 2.svg'
import r3 from '../assets/img/set 3.svg'
export default function Postres() {
const [counter, setCounter] = useState(1);
let video = 'https://youtu.be/4Pu5BdT5DcY'
 
 function btn1(){
  video ='https://www.youtube.com/embed/EeO0Sesuri8'
  setCounter(video)
}
function btn2(){
  video ='https://youtu.be/4Pu5BdT5DcY'
  setCounter(video)
}
function btn3(){
  video ='https://youtu.be/IZ0sqAvaDBU'
  setCounter(video)
}
	return (
		<div >
      <NavLink to='/'><Back><img src={r5} alt=""/></Back></NavLink>
        <Textacon1>About business</Textacon1>
      <Video>
      <Reactplayer
      url= {counter}
      border-radius='15px'
      height='200px'  
      width='358px'
      controls
      playing/>
    </Video>
    <BoxP>


    </BoxP>
    <BoxPre onClick={() =>btn1()}>
    <img src={r1} alt=""/>
    </BoxPre>

    <BoxPre2 onClick={() =>btn2()}>
    <img src={r2} alt=""/>
    </BoxPre2>

    <BoxPre3 onClick={() =>btn3()}>
    <img src={r3} alt=""/>
    </BoxPre3>
    <NavLink to='/'>
    <BtNext><center><BtpreN>Finish</BtpreN></center></BtNext></NavLink>
    </div>

	)

}
