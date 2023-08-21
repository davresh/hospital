import React, { useRef, useState } from "react";
import './services.scss';
import apteka from '../../assets/image/apteka.png';
import zavod from '../../assets/image/zavod.png';
import greenX from '../../assets/image/greenX.png';
import ellipse from '../../assets/image/ellipse.png';
import useValidation from "../../hooks/useValidation";
import Answer from "../../components/answer/answer";

function Services(){
    const [name,name2,number,mail,message,setInputValue] = useValidation();
    const [check,setCheck] = useState(false)
    const [checkSend,setCheckSend] = useState(false)
    const [erorr,setErorr] = useState(1)
    let nameRef = useRef()
    let surnameRef = useRef()
    let numberRef = useRef()
    let commRef = useRef()
    return (
        <>
            <div className="services">
                <div className="services-page">
                    <img className="bg-img1" src={greenX} alt="" />
                    <div className="services-text">
                        <h1>ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</h1>
                        <p>
                        Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ; Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        </p>
                        <button 
                            onClick={()=>{setCheck(true)}}
                        >Պատվիրել զանգ</button>
                    </div>
                    <div className="services-img">
                        <img src={zavod} alt="zavod" />
                    </div>
                </div>
                <div className="services-page">
                    <img className="bg-img2" src={ellipse} alt="" />
                    <div className="services-img">
                        <img src={apteka} alt="zavod" />
                    </div>
                    <div className="services-text">
                        <h1>ԱՆՀԱՏԱԿԱՆ ՊԱՏՎԵՐ </h1>
                        <p>
                            Մենք կպատրաստենք արտադրանք ձեր իսկ լոգոյով։
                            orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <button
                            onClick={()=>{setCheck(true)}}
                        >Պատվիրել զանգ</button>
                    </div>
                </div>
                <div className={`call ${check?'call-block':''}`}>
                        <div className="call-box">
                            <span 
                                onClick={()=>{setCheck(false)}}
                            className="icon-xmark-solid"/>
                            <h1>Պատվիրել զանգ</h1>
                            <div>
                                <input 
                                    ref={nameRef}
                                    type="text" 
                                    name="user_name2" 
                                    onChange={setInputValue} 
                                    placeholder="Անուն"
                                    required/>
                                <input 
                                    ref={surnameRef}
                                    type="text" 
                                    name="user_name2" 
                                    onChange={setInputValue} 
                                    placeholder="Ազգանուն"
                                    required/>
                            </div>
                            <div className="inp-zet">
                                <input
                                    ref={numberRef}
                                    name="user_number" 
                                    type="text" 
                                    placeholder="Հեռախոսահամար" 
                                    onChange={setInputValue}
                                    required/>
                            </div>
                            <div  className="inp-zet">
                                <textarea
                                    ref={commRef}
                                    name="message" 
                                    cols="30" 
                                    rows="10" 
                                    placeholder="Ծառայության անվանում"
                                    onChange={setInputValue} 
                                    required/>
                            </div>
                            <div className="button-send">
                                <button 
                                    onClick={()=>{
                                        if(name2==true&&number==true){
                                            setCheck(false)
                                            setCheckSend(true)
                                            setErorr(true)
                                            nameRef.current.value = ''
                                            nameRef.current.classList.remove('inp-true')
                                            nameRef.current.classList.remove('inp-false')
                                            //
                                            surnameRef.current.value = ''
                                            surnameRef.current.classList.remove('inp-true')
                                            surnameRef.current.classList.remove('inp-false')
                                            //
                                            numberRef.current.value = ''
                                            numberRef.current.classList.remove('inp-true')
                                            numberRef.current.classList.remove('inp-false')
                                            //
                                            commRef.current.value = ''
                                            commRef.current.classList.remove('inp-true')
                                            commRef.current.classList.remove('inp-false')
                                        }
                                    }}
                                >
                                    Պատվիրել
                                </button>
                            </div>
                        </div>
                </div>
                {checkSend?<Answer check={setCheckSend} text={'ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿԱՊ ԿՀԱՍՏԱՏԻ ՁԵԶ ՀԵՏ'}/>:''}
            </div>
        </>
    )
}

export default Services