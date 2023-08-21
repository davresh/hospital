import React, { useRef, useState } from "react";
import './register.scss';
import ellipse from '../../assets/image/ellipse.png'
import useValidation from "../../hooks/useValidation";
import Answer from "../answer/answer";

function Register(){
    const [name,name2,number,mail,message,setInputValue] = useValidation();
    const [check,setCheck] = useState(false)
    const [erorr,setError] = useState(1)
    let mailRef = useRef()
    let nameRef = useRef()
    let commRef = useRef()
    return (
        <>  
            <div className="register">
                <img className="ellipse" src={ellipse} alt="ellipse" />
                <div className="register-location">
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik
                    </p>
                    <div className="map">
                        <iframe className="location-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.1989104340896!2d44.56564157498268!3d40.18238656987058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcadf143b667%3A0x3d9d42c25cbf0b31!2z1LHWgNaH!5e0!3m2!1sru!2sam!4v1692544392733!5m2!1sru!2sam" loading="lazy" ></iframe>
                    </div>
                </div>
                <div className="register-inputs">
                <h1>Կապնվեք Մեզ Հետ</h1>
                    <input
                        type="text" 
                        name='user_name' 
                        placeholder="Անուն"
                        onChange={setInputValue} 
                        ref={nameRef}
                        required/>
                    <input 
                        type="email" 
                        name='user_email' 
                        placeholder="Էլ․ Հասցե"
                        onChange={setInputValue}
                        ref={mailRef}
                        required/>
                    <textarea 
                        name="message" 
                        placeholder="Հաղորդագրություն" 
                        cols="30" 
                        rows="10"
                        onChange={setInputValue}
                        ref={commRef}
                    />
                    <button
                        onClick={()=>{
                            if(name==true&&mail==true){
                                setCheck(true)
                                setError(true)
                                nameRef.current.value = ''
                                nameRef.current.classList.remove('inp-true')
                                nameRef.current.classList.remove('inp-false')
                                //
                                mailRef.current.value = ''
                                mailRef.current.classList.remove('inp-true')
                                mailRef.current.classList.remove('inp-false')
                                //
                                commRef.current.value = ''
                                commRef.current.classList.remove('inp-true')
                                commRef.current.classList.remove('inp-false')

                            }else{
                                setError(false)
                            }
                        }}
                    >Ուղարկել</button>
                    <div className="erorr-tag"><h3> {erorr===false?'Erorr':''}</h3></div>
                </div>
                {check?<Answer check={setCheck} text={'ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿՊԱՏԱՍԽԱՆԻ ՁԵԶ ԷԼ․ՓՈՍՏԻ ՄԻՋՈՑՈՎ'}/>:''}
            </div>
        </>
    )
}

export default Register;
