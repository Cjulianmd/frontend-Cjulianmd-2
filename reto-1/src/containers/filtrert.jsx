
import React from 'react';
import { TextC, InputE, InputP1, BtNext, BtpreN, Back  } from '../style/StyleGlobal'
import {NavLink} from 'react-router-dom'
import ApBar from '../components/apbar'
import {  InputN, InputT1 } from '../style/StyleGlobal';
import { Textacon1 } from './../style/StyleGlobal';
import r5 from '../assets/img/flecha.svg'
import r6 from '../assets/img/flecha1.svg'
 /*handleChange  = async evt => {
        await this.setState({
           form: {
              ...this.state.form,
              [evt.target.name]: evt.target.value,
              
           }
        });console.log(this.state.form)
         
     }*/
function Filtrert (){
     // window.location.href="./Singin"
        return (
            <>
            <NavLink to='/Walled'><Back><img src={r5} alt=""/></Back>
        <Textacon1><img src={r6} alt=""/></Textacon1></NavLink>
         <TextC>
         Price
         </TextC>
         <form onSubmit={event => {
            event.preventDefault()
            ;console.log(event.target.telefono.value
            
            )}}>
               
            <InputN  name="Select cagegory" placeholder="Select cagegory" size="2em"/>
            <InputE name="Select Location" placeholder="Select Location" size="2em"   />
            <InputT1 name="From" placeholder="From" size="2em" />
            <InputP1 name="To" placeholder="To" size="2em"  />

         </form>
         <BtNext onClick={() => this.registrer()}><center><BtpreN>Show</BtpreN></center></BtNext>
                <ApBar/>
            </>
        );

}//&& start json-server --watch ./src/data/data.json --port 4008

export default Filtrert;