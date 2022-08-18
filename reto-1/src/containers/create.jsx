import React from 'react'
import { TextB, TitleB, InputN, InputP, Log, TextB2, Texts, BtpreN, BtNext, InputE, InputT1, InputP1} from '../style/StyleGlobal';
import {Link, NavLink} from 'react-router-dom'
import Tap1 from '../components/NavBar'
import logo from '../assets/img/Logo.svg'
import gogle from '../assets/img/google.svg'
import face from '../assets/img/facebook.svg'
import { useForm } from "../Hooks/useForm";
import { useDispatch } from './../../node_modules/react-redux/es/hooks/useDispatch';
import { loginGogle, registerincrono } from './../redux/Actions/userAction';


const LoginForm = () => {
   const [formValues, handleInputChange, reset] = useForm({
       email: '',
       name: '',
       number:'',
       password: ''
   })

   const dispatch = useDispatch();

   const handleSubmit = (e) => {
       e.preventDefault();
         console.log(formValues)
       dispatch(registerincrono(formValues.name,formValues.email,formValues.number, formValues.password))

       reset()
   }
   const handleGoogle = () => {
      dispatch(loginGogle())
   }
   

   return (
      <>
      <Tap1/>
         <img src={logo} alt=""/>
         <TitleB>
         
            sing in
         </TitleB>
         <TextB>
         <button onClick ={handleGoogle} ><img src={gogle} alt=""/></button>
         <img src={face} alt=""/>
         </TextB>
           <form onSubmit={handleSubmit} className="my-10">
               <div className="flex flex-col space-y-5">
                   <label htmlFor="name">
                       <InputN id="name" name="name" type="name" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="name" onChange={handleInputChange} value={formValues.name} />
                   </label>
                   <label htmlFor="email">
                       <InputE id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" onChange={handleInputChange} value={formValues.email} />
                   </label>
                   <label htmlFor="number">
                       <InputT1 id="number" name="number" type="number" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="numbers" onChange={handleInputChange} value={formValues.email} />
                   </label>
                   <label htmlFor="password">
                       <InputP1 id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" onChange={handleInputChange} value={formValues.password}/>
                   </label>
                   <button>
                        <BtNext >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        <BtpreN>long</BtpreN>
                        </BtNext>
                    </button>
                   <NavLink  to="/register" >
                     <TextB2>
                     D’ont have account ?
                     </TextB2>
                  
                     </NavLink>
               </div>
           </form>
           
      </>
   )
   
}

export default LoginForm;



/*
import { TextC, TitleC, InputT1, InputP1, Log, InputN, InputE,TextB, TitleB, InputT, InputP, Log, TextB2, Texts, BtpreN, BtNext} from '../style/StyleGlobal';
import { InputN, InputT1 } from './../style/StyleGlobal';
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
     console.log("creaste una cuenta");
     alert("creaste una cuenta")
   window.location.href="./veryfication"
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
         <TitleC>
            Create new Account
         </TitleC>
         <TextC>
         Create a new account by filling in all the fields or log in to an existing account
         </TextC>
         <TextB>
            <img src={gogle} alt=""/>
            <img src={face} alt=""/>
         </TextB>
         <form onSubmit={event => {
            event.preventDefault()
            ;console.log(event.target.telefono.value
            
            )}}>
            <InputN  name="nombre" placeholder="nombre" size="2em" onChange={this.handleChange} />
            <InputE name="email" placeholder="email" size="2em"  onChange={this.handleChange} />
            <InputT1 name="telefono" placeholder="phone number" size="2em" onChange={this.handleChange}/>
            <InputP1 name="password" placeholder="Password" size="2em" onChange={this.handleChange} />
         </form>
         <BtNext onClick={() => this.registrer()}><center><BtpreN>create</BtpreN></center></BtNext>
         </React.StrictMode>
      </div>
    )
  }
}
export default create;*/