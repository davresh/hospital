import { useState } from "react";


export default function(){
    const [name,setCheckInput] = useState();
    const [mail,setCheckInput2] = useState();
    const [message,setCheckInput3] = useState();
    const [number,setCheckInput4] = useState();
    const [name2,setCheckInput5] = useState();
    

    const inputRegex = (e) => {
        const name = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
        const mail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const name2 = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/
        const number = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        let value = e.target.value
        if(!name.test(value) && e.target.name == 'user_name'){
            setCheckInput(false);
            e.target.classList.remove('inp-true')
            e.target.classList.add('inp-false')
        }else if(name.test(value) && e.target.name == 'user_name'){
            setCheckInput(true);
            e.target.classList.remove('erorr')
            e.target.classList.add('inp-true')
        }
        if(!name2.test(value) && e.target.name == 'user_name2'){
            setCheckInput5(false);
            e.target.classList.remove('inp-true')
            e.target.classList.add('inp-false')
        }else if(name2.test(value) && e.target.name == 'user_name2'){
            setCheckInput5(true);
            e.target.classList.remove('erorr')
            e.target.classList.add('inp-true')
        }
        if(!number.test(value) && e.target.name == 'user_number'){
            setCheckInput4(false);
            e.target.classList.remove('inp-true')
            e.target.classList.add('inp-false')
        }else if(number.test(value) && e.target.name == 'user_number'){
            setCheckInput4(true);
            e.target.classList.remove('erorr')
            e.target.classList.add('inp-true')
        }
        if(!mail.test(value) && e.target.name == 'user_email'){
            setCheckInput2(false);
            e.target.classList.remove('inp-true')
            e.target.classList.add('inp-false')
        }else if(mail.test(value) && e.target.name == 'user_email'){
            setCheckInput2(true);
            e.target.classList.remove('erorr')
            e.target.classList.add('inp-true')
        }
        if(value.length <= 10 && e.target.name == 'message'){
            setCheckInput3(false);
            e.target.classList.remove('inp-true')
            e.target.classList.add('inp-false')
        }else if(value.length >= 10 && e.target.name == 'message'){
            setCheckInput3(true);
            e.target.classList.remove('erorr')
            e.target.classList.add('inp-true')
        }
        if(value == ''){
            e.target.classList = ''
        }
        
    }

    return [name,name2,number,mail,message,inputRegex]
}