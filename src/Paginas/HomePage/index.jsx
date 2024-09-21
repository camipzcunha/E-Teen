import Header from "../../components/Header";
import Hero from "../../Components/Hero";
import Services from "../../Components/Services"
import About from "../../Components/About";
import Games from "../../Components/Games";
import Contact from "../../Components/Contact";
import React from "react";
export default function HomePage(){
    return(
        <>
            <Hero/>
            <Services/>
            <Games/>
            <Contact/>
            <About />
           

        </>
    )
}