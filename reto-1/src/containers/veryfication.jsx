import React, { Component } from 'react'
import { TextV, TitleV, InputT12, InputP12, InputN2, InputE2, TextV2, Fle} from '../style/StyleGlobal';
import Tap1 from '../components/NavBar'
import flecha from '../assets/img/flecha.svg'
import {NavLink} from 'react-router-dom'
class back extends Component {
  render() {
    return (
      <div>
         <React.StrictMode>
         <Tap1/>
         <NavLink to="/Singin"><Fle><td><img src={flecha} alt=""/></td></Fle></NavLink>
         <TitleV>
             Phone verification
         </TitleV>
         <TextV>
            Enter the four-digit code from SMS
         </TextV>
         <TextV2>
            SMS not received Send again?
         </TextV2>
         <form>
            <InputN2  size="2em" />
            <InputE2  size="2em" />
            <InputT12  size="2em" />
            <InputP12  size="2em" />
         </form>
         </React.StrictMode>
      </div>
    )
  }
}
export default back;