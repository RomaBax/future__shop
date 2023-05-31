import React from "react";
import  "react-router-dom";
import Navbar from './Component/Navbar'
import Cart from './carts/Card'
import Footer from "./Component/Footer";

export default function Comp(){
    return(
        <>
        <Navbar/>
        <Cart/>
        <Footer/>
        </>
    )
}