import React from "react";
import './answer.scss';
import trueImg from '../../assets/image/true.png'

function Answer({check,text}){

    return (
        <>
            <div className="answer-page">
                <div className="answer-link">
                    <h1>Շնորհակալություն</h1>
                    <div className="answer-p">
                        <p>{text}</p>
                    </div>
                    <img src={trueImg} alt="" />
                    <span
                        onClick={()=>check(false)}
                        className="icon-xmark-solid"/>
                </div>
            </div>
        </>
    )
}

export default Answer;