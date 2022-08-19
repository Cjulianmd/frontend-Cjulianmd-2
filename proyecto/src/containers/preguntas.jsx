import React, {  useState } from "react"
import Reactplayer from 'react-player'
import { Video, Textacon1, Back, Bpre2, Btpre, Bpre3, Bpre1, BtNext, BtpreN, BoxPre4, BoxPre2, BoxP } from '../style/StyleGlobal'
import {NavLink} from 'react-router-dom'
import r5 from '../assets/img/flecha.svg'
import { Bpre4, BoxPre, BoxPre3, BoxPreT } from './../style/StyleGlobal';

export default function Postres() {
const [counter, setCounter] = useState(1);
 function count(){
  if(counter == 11){
      console.log("hola")
      window.location.href="./win";
    }else{
      setCounter(counter + 1)
      cookies.set('count', counter, {phat: "/"});
      console.log(counter)
    }
 }
 
	return (
		<div >
      <NavLink to='/test'><Back><img src={r5} alt=""/></Back></NavLink>
        <Textacon1>About business</Textacon1>
      <Video>
      <Reactplayer
      url={video} 
      border-radius='15px'
      height='200px'  
      width='358px'
      controls
      playing/>
    </Video>
    <BoxP>
      {descripcion}{pregunta}

    </BoxP>
    <BoxPre>
      <Bpre1 onClick={(e) => handleAnswerSumit(opciones[0].isCorrect, e)}>
      <center>
      <Btpre>A</Btpre>
      </center>
      </Bpre1>
      <BoxPreT>{opciones[0].textoRespuesta}</BoxPreT>
    </BoxPre>

    <BoxPre2>
      <Bpre2 onClick={(e) => handleAnswerSumit(opciones[1].isCorrect,e)}>
      <center>
      <Btpre>B</Btpre>
      </center>
      </Bpre2>
      <BoxPreT>{opciones[1].textoRespuesta}</BoxPreT>
    </BoxPre2>

    <BoxPre3>
      <Bpre3 onClick={(e) => handleAnswerSumit(opciones[2].isCorrect,e)}>
      <center>
      <Btpre>C</Btpre>
      </center>
      </Bpre3>
      <BoxPreT>{opciones[2].textoRespuesta}</BoxPreT>
    </BoxPre3>

    <BoxPre4>
    <Bpre4 onClick={(e) => handleAnswerSumit(opciones[3].isCorrect,e)}>
    <center>
     <Btpre>D</Btpre>
     </center>
    </Bpre4>
      <BoxPreT>{opciones[3].textoRespuesta}</BoxPreT>
    </BoxPre4>
    <BtNext onClick={() => count()}><center><BtpreN  >Next</BtpreN></center></BtNext>
    </div>

	)

}
