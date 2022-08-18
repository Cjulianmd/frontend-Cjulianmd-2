import React, { Component } from 'react'
import { TextC, TitleC, InputT1, InputP1, Log, InputN, InputE, Textacon1, Input1, Input3, BtNext} from '../style/StyleGlobal';
import Create from '../assets/img/create.svg';
import Tap1 from '../components/NavBar'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import r5 from '../assets/img/flecha.svg'
import { Back, Input2, Input4, BtpreN } from './../style/StyleGlobal';
const baseUrl = 'http://localhost:4008/walled/';
class create extends Component {

   state = {
      form: {
         nombre:'',
         email:'',
         telefono:'',
         password:'',
         id:''
      }
   }

   registrer = () =>{
      axios.post(baseUrl ,{
         cardname:this.state.form.nombre,
         Cardnumber:this.state.form.email,
         Expires:this.state.form.telefono,
         Cvv: this.state.form.password,
         id: this.state.form.password ,
      }
         ) 
    console.log("añadiste targeta");
     alert("añadiste targeta")
   window.location.href="./walled"
   }
  
   handleChange  = async evt => {
      await this.setState({
         form: {
            ...this.state.form,
            [evt.target.name]: evt.target.value,
            
         }
      });console.log(this.state.form)
       
   }
   

  render() {
    return (
      <div>
         <React.StrictMode>
         <Tap1/>
         <NavLink to='/walled'><Back><img src={r5} alt=""/></Back></NavLink>
        <Textacon1>Payment</Textacon1>
         <form onSubmit={event => {
            event.preventDefault()
            ;console.log(event.target.telefono.value
            
            )}}>
            <Input1  name="nombre" placeholder="card name" size="2em" onChange={this.handleChange} />
            <Input2 name="email" placeholder="Card number" size="2em"  onChange={this.handleChange} />
            <Input3 name="telefono" placeholder="Expires" size="2em" onChange={this.handleChange}/>
            <Input4 name="password" placeholder="Cvv" size="2em" onChange={this.handleChange} />
         </form>
         <BtNext onClick={() => this.registrer()}><center><BtpreN>save</BtpreN></center></BtNext>
         </React.StrictMode>
      </div>
    )
  }
}
export default create;