import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import r1 from '../assets/img/relleno1.svg'
import { Btninfo1, Contpro, Contpro1, Contprotexto, Contprotl, Contprotm } from "../style/StyleGlobal";
import { Contproim, Contprotx } from './../style/StyleGlobal';
import { useDispatch } from 'react-redux';
import { products } from './../redux/Actions/productAction';
import r4 from '../assets/img/relleno4.svg'
import { Link } from "react-router-dom";
function Product(){
    
        const {read} = useSelector(state => state)
        
        
        const comi = (data) =>{
            console.log(data)
        }
            

        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(products());
           
        }, [])

        return (<>
         <Link to="/myworks" ><Btninfo1 ><img src={r4} alt=""/></Btninfo1></Link>
            <Contpro>
                
                {
                    read.map(({title,foto,descri,time},idx ) => (
                    
                    <Contpro1 key={idx} onClick={() => comi(read[idx])}>
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

export default Product;

/**/