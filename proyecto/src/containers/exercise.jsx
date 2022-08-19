import React, {  useState } from "react"
import Reactplayer from 'react-player'
import { Video, Textacon1, Back, Bpre2, Btpre, Bpre3, Bpre1, BtNext, BtpreN, BoxPre4, BoxPre2, BoxP } from '../style/StyleGlobal'
import {NavLink} from 'react-router-dom'
import r5 from '../assets/img/flecha.svg'
import { Bpre4, BoxPre, BoxPre3, BoxPreT } from './../style/StyleGlobal';

export default function Postres() {
const [counter, setCounter] = useState(1);

function count(){
      window.location.href="./win";
 }
 
	return (
		<div >
     
    </div>

	)

}
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