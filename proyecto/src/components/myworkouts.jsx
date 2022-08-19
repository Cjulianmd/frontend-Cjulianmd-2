import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import r1 from '../assets/img/relleno1.svg'
import { Btninfo1, Contpro, Contpro1, Contprotexto, Contprotl, Contprotm } from "../style/StyleGlobal";
import { Contproim, Contprotx } from './../style/StyleGlobal';
import { useDispatch } from 'react-redux';
import { Myproducts, products } from './../redux/Actions/productAction';
import r4 from '../assets/img/Tabs2.svg';
import { Link } from "react-router-dom";
function MyProduct(){
    
        const {mypro} = useSelector(state => state)
        
         console.log(mypro)
        
        const comi = () =>{
            console.log("hola")
        }
            

        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(Myproducts());
           
        }, [])

        return (<>
        <Link to="/" ><Btninfo1 ><img src={r4} alt=""/></Btninfo1></Link>
            <Contpro>
                
                {
                    mypro.map(({title,foto,descri,time},idx ) => (
                    
                    <Contpro1 to="/login" key={idx} onClick={comi}>
                        <Contproim>
                            <img src={foto} alt=""/>
                        </Contproim>
                        <Contprotexto>
                            <Contprotl>{title}</Contprotl>
                            <Contprotx>{descri}</Contprotx>
                            <Contprotm>{time} min</Contprotm>
                        </Contprotexto>
                    </Contpro1>
                    
                    ))
                }
               
            </Contpro>
        </>);
        
}

export default MyProduct;