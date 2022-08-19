import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import r1 from '../assets/img/relleno1.svg'
import { Contpro, Contpro1, Contprotexto, Contprotl, Contprotm } from "../style/StyleGlobal";
import { Contproim, Contprotx } from './../style/StyleGlobal';
import { useDispatch } from 'react-redux';
import { products } from './../redux/Actions/productAction';
function Product(){
    
        const {read} = useSelector(state => state)

        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(products());
        }, [])

        return (
            <Contpro>
                {
                    read.map(({title,foto,descri,time}, idx ) => (
                    <Contpro1 key={idx}>
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
        );
}

export default Product;

/**/