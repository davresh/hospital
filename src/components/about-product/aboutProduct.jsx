import React from "react";
import './aboutProduct.scss';
import { useLocation } from "react-router-dom";

function AboutProduct(){
    const location = useLocation();
    const { state } = location;
    return (
        <>
            <div className="AboutProduct">
                <div className="AP-image">
                    <img src={state.img} alt="" />
                    {state.vector==null?'':<img className="AP-steril" src={state.vector} alt="vector" />}
                </div>
                <div className="AP-text">
                    <h1>բժշկական ԲԻՆՏ ՍՏԵՐԻԼ</h1>
                    <div className="text-size">
                    <h5 className="product-size"><span className="icon-arrows-up-down-solid"/>
                    {state.sm[0]} <span className="icon-arrows-left-right-to-line-solid"/> {state.sm[1]}</h5>
                    <h5><span className="icon-layer-group-solid"/>{state.shert} շերտ</h5>
                    <h5><span className="icon-layer-group-solid"/>{state.hat} հատ</h5>
                    </div>
                    <p>
                        Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutProduct;
