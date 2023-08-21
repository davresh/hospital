import React, { useContext } from "react";
import './home.scss';
import rectangle from '../../assets/image/rectangle.png';
import rectangle2 from '../../assets/image/rectangle2.png';
import Products from "../../components/product/product";
import { myContext } from "../../router/router";
import Slider from "../../components/slider/slider";
import Partner from "../../components/Partner/partner";
import Register from "../../components/register/register";
import { NavLink } from "react-router-dom";
function Home(){
    const product = useContext(myContext)
    return (
        <>
            <div className="home">
                <Slider 
                    txt1={'ԱՌԱՋԻՆԸ ՀԱՅԱՍՏԱՆՈՒՄ'} 
                    txt2={'Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;'}
                    img={rectangle}
                    href={'/about'}
                />
                <div className="home-products">
                    <div className="products-title">
                        <h1>Արտադրանք</h1>
                    </div>
                    {product.products.map((product,id)=>{
                         if (id<=5) return <Products key={id} product={product}/>
                    })}
                    <div className="products-title">
                        <NavLink to={'/produce'}>Տեսնել Ամբողջը</NavLink>
                    </div>
                </div>
                <Slider 
                    txt1={'ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ'} 
                    txt2={'Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ'}
                    img={rectangle2}
                    href={'/services'}
                />
                <div className="home-products">
                    <div className="products-title">
                        <h1>Գործընկերներ</h1>
                    </div>
                    {product.partner.map((partner,id)=>{ if (id<=5) return <Partner key={id} partner={partner}/>})}
                    <div className="products-title">
                    <NavLink to={'/colleagues'}>Տեսնել Ավելին</NavLink>
                    </div>
                </div>
                <Register/>
            </div>
        </>
    )
}

export default Home;