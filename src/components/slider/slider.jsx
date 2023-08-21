import React from "react";
import './slider.scss' ;
import greenX from '../../assets/image/greenX.png';
import { NavLink } from "react-router-dom";
function Slider({txt1,txt2,img,href}){

    return(
        <>
            <div className="home-slider">
                <div className="home-box">
                    <h1>{txt1}</h1>
                    <p>{txt2}</p>
                    <NavLink to={href}>Կարդալ ավելին</NavLink>
                </div>
                <div className="home-img">
                    <img src={img} alt="rectangle" />
                </div>
                <img className="bgimg" src={greenX} alt="greenX" />
            </div>
        </>
    )
}
export default Slider