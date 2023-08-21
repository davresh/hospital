import React, { createContext } from "react";
import Header from "../pages/header/header";
import Footer from "../pages/footer/footer";
import Home from "../pages/home/home";
import { product } from "../store/store";
import { Route,Routes } from 'react-router-dom';
import About from "../pages/about/about";
import Produce from "../pages/produce/produce";
import Services from "../pages/services/services";
import Colleague from "../pages/colleague/colleague";
import Register from "../components/register/register";
import AboutProduct from "../components/about-product/aboutProduct";

export const myContext = createContext('')

function Router(){
    return (
        <myContext.Provider value={product}>
            <div className="container">
                <Header/>
                <Routes>
                    <Route path="/hospital" index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/produce" element={<Produce/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/colleagues" element={<Colleague/>}/>
                    <Route path="/contact" element={<Register/>}/>
                    <Route path="/aboutProduct" element={<AboutProduct/>}/>
                </Routes>
                <Footer/>
            </div>
        </myContext.Provider>
    )
}

export default Router;