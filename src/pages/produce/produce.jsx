import React, { useContext, useState } from "react";
import './produce.scss';
import { myContext } from "../../router/router";
import Products from "../../components/product/product";

function Produce(){
    const product = useContext(myContext);
    const [check,setCheck] = useState(1);
    const [produces,setProduce] = useState(product.bandage)
    return (
        <>
            <div className="Produce">
                <ul className="produce-menu">
                    <li className={check==1?'checked':''}
                        onClick={()=>{
                            setCheck(1) 
                            setProduce(product.bandage)
                        }}
                    >Բինտեր</li>
                    <li className={check==2?'checked':''}
                        onClick={()=>{
                            setCheck(2)
                            setProduce(product.tanzif)
                        }}
                    >Թանզիֆներ</li>
                    <li className={check==3?'checked':''}
                        onClick={()=>{
                            setCheck(3)
                            setProduce(product.products)
                        }}
                    >Անձեռնոցիկներ</li>
                    <li className={check==4?'checked':''}
                        onClick={()=>{
                            setCheck(4)
                            setProduce(product.toper)
                        }}
                    >Թոփեր</li>
                </ul>
                <div className="produce-commodity">
                    {produces.map((get,id)=>{
                     return <Products key={id} product={get}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default Produce;