import React from "react";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Slider from "../components/Slider";

function Main() {
    return (
        <>
            <Header />
            <Slider />
            <Contact />
            <Hero />
            <Faq />
        </>
    );
}

export default Main;
