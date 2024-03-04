"use client";
import React, { useEffect } from "react";
import Hero from "@/components/Hero/Hero";
import Contact from "@/components/Contact/Contact";
import BestCabs from "@/components/BestCabs/BestCabs";
import About from "@/components/About/About";
import AppStore from "@/components/AppStore/AppStore";
import Testimonial from "@/components/Testimonial/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 600,
          easing: "ease-in-sine",
          delay: 100,
        });
        AOS.refresh();
      }, []);
    
  return (
    <>
     <Hero />
      <Contact />
      <BestCabs />
      <About />
      <AppStore />
      <Testimonial />
    </>
  )
}

export default Home