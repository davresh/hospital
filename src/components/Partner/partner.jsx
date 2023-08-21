import React from "react";
import './partner.scss';

function Partner({partner}){

    return (
        <>
            <div className="partner">
                <img className="partner-image" src={partner.img} alt="partner img" />
            </div>
        </>
    )
}

export default Partner;