import React, { useContext } from "react";
import './colleague.scss';
import { myContext } from "../../router/router";
import Partner from "../../components/Partner/partner";
import AboutProduct from "../../components/about-product/aboutProduct";

function Colleague(){
    const colleague = useContext(myContext).partner
    return (
        <>
            <div className="colleagues">
                {colleague.map((partner,id)=>{return <Partner key={id} partner={partner}/>})}
            </div>
        </>
    )
}

export default Colleague;