import Header from "../../components/Header";
import Hero from "../../Components/Hero";
import About from "../../Components/Sobre";
import Games from "../../Components/Games";
import Contact from "../../Components/Contact";
import React from "react";
export default function HomePage(){
    return(
        <>
            <Header />
            <Hero/>
            <About/>
            <Games/>
            <Contact/>
           

        </>
    )
}