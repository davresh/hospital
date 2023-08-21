import React from "react";
import logo from '../../assets/image/logo.jpg';
import flag from '../../assets/image/flag.jpg';
import './header.scss';
import { NavLink } from "react-router-dom";
function Header(){
    
    return (
        <>
            <header>
                <div className="header-logo">
                    <img className="logo-img" src={logo} alt="" />
                </div>
                <ul className="header-menu">
                    <li><NavLink to={'/hospital'}>Գլխավոր</NavLink></li>
                    <li><NavLink to={'/about'}>Մեր մասին</NavLink></li>
                    <li><NavLink to={'/produce'}>Արտադրանք</NavLink></li>
                    <li><NavLink to={'/services'}>Ծառայություներ</NavLink></li>
                    <li><NavLink to={'/colleagues'}>Գործընկերներ</NavLink></li>
                    <li><NavLink to={'/contact'}>Հետադարձ կապ</NavLink></li>
                    <li className="language"><img src={flag} alt="" /></li>
                </ul>
            </header>
        </>
    )
}

export default Header;