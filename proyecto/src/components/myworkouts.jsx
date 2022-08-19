import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import r1 from '../assets/img/relleno1.svg'
import { Btninfo1, Contpro, Contpro1, Contprotexto, Contprotl, Contprotm } from "../style/StyleGlobal";
import { Contproim, Contprotx } from './../style/StyleGlobal';
import { useDispatch } from 'react-redux';

import r4 from '../assets/img/Tabs2.svg';
import { Link } from "react-router-dom";
import { Myproducts } from "../redux/Actions/mypro";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig";
function MyProduct(){

        const [products, setProducts] = useState([])
        useEffect(() => {
           // dispatch(Myproducts());onClick={comi}
           const comi = async() =>{
            try{
                const querySnapshot = await getDocs(collection(db, "myproducts"))
                const docs = []
                querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id})
                } )
                setProducts(docs)
            }catch(error){
                console.log(error)
            }

           }
           comi()
        }, [products])

        return (<>
        <Link to="/" ><Btninfo1 ><img src={r4} alt=""/></Btninfo1></Link>
            <Contpro>
                
                {
                    products.map(({title,foto,descri,time,id} ) => (
                    <Link to="/myworks1" >
                    <Contpro1 to="/login" key={id} >
                        <Contproim>
                            <img src={foto} alt=""/>
                        </Contproim>
                        <Contprotexto>
                            <Contprotl>{title}</Contprotl>
                            <Contprotx>{descri}</Contprotx>
                            <Contprotm>{time} min</Contprotm>
                        </Contprotexto>
                    </Contpro1>
                    </Link>
                    
                    ))
                }
               
            </Contpro>
        </>);
        
}

export default MyProduct;