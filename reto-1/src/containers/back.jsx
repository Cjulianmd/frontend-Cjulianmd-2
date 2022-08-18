import React from 'react'
import { TextB, TitleB, InputT, InputP, Log, TextB2, Texts, BtpreN, BtNext, TextB12} from '../style/StyleGlobal';
import {Link, NavLink} from 'react-router-dom'
import Tap1 from '../components/NavBar'
import logo from '../assets/img/Logo.svg'
import gogle from '../assets/img/google.svg'
import face from '../assets/img/facebook.svg'
import { useForm } from "../Hooks/useForm";
import { useDispatch } from './../../node_modules/react-redux/es/hooks/useDispatch';
import { loginGogle, loginsincrono, LoginWithEmail } from './../redux/Actions/userAction';


const LoginForm = () => {
   const [formValues, handleInputChange, reset] = useForm({
       email: '',
       password: ''
   })
   document.body.style = 'background: #1F233E; '
   const dispatch = useDispatch();

   const handleSubmit = (e) => {
       e.preventDefault();

       dispatch(LoginWithEmail(formValues.email, formValues.password))

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
         </TextB>
         <TextB12>
         <img src={face} alt=""/>
         </TextB12>

           <form onSubmit={handleSubmit} className="my-10">
               <div className="flex flex-col space-y-5">
                   <label htmlFor="email">
                       <InputT id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" onChange={handleInputChange} value={formValues.email} />
                   </label>
                   <label htmlFor="password">
                       <InputP id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" onChange={handleInputChange} value={formValues.password}/>
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
                     <Texts>
                     Sign In
                     </Texts>
                     </NavLink>
               </div>
           </form>
           
      </>
   )
   
}

export default LoginForm;















/*function back() {
   state = {
      form: {
         telefono:'',
         password:''
      }
   }
   const handlesumit  = async evt => {
      await this.setState({
         form: {
            ...this.state.form,
            [evt.target.name]: evt.target.value
         }
      })
      
   }
  
   iniciarsesion = async () =>{console.log(this.state.form.telefono,this.state.form.password)
         
   }

    return (
      <div>
         <React.StrictMode>
         <Tap1/>
         <img src={logo} alt=""/>
         <TitleB>
         
            sing in
         </TitleB>
         <TextB>
            <img src={gogle} alt=""/>
            <img src={face} alt=""/>
         </TextB>
         <form>
            <InputT name="telefono" placeholder="phone number" size="2em" onChange={this.handleChange} />
            <InputP name="password" placeholder="Password" size="2em" onChange={this.handleChange}/>
         </form>
         <NavLink to="/iniciarseccion">
         <BtNext ><center><BtpreN>long</BtpreN></center></BtNext>
         </NavLink>
         
         <NavLink  to="/register" >
         <TextB2>
         D’ont have account ?
         </TextB2>
      
         </NavLink>
         
         </React.StrictMode>
      </div>
    )
}
export default back;
//to="/veryfication"*/