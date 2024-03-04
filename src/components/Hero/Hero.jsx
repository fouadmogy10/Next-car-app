import React from "react";
import YellowCap from "@/assets/yellow-cab.png";
import bgCity from "@/assets/city.jpg";
import Image from "next/image";

const Hero = () => {
  const bgstyle = {
    backgroundImage: `url(${bgCity.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "520px",
  };
  return (
    <header style={bgstyle}>
      <div className="dark:bg-black/60 bg-white/60 backdrop-blur-sm dark:text-white duration-300 h-[520px] flex">
        <div className="container grid grid-cols-1 place-items-center">
          <div className="text-center space-y-5 py-14">
            <p data-aos="fade-up"
             className="text-primary text-3xl font-semibold uppercase">book cab now</p>
            <h1 className="text-4xl md:text-6xl font-bold " data-aos="fade-up"
            data-aos-delay='600'>+12 3456 78945</h1>
            <p data-aos="fade-up"
            data-aos-delay='1000'
            className="tracking-[8px] text-base sm:text-xl font-semibold"
            >
              www.yourdomin.com
            </p>
          </div>
          <div data-aos="zoom-in-right"
            data-aos-delay='1000'><Image alt="yellow cap" src={YellowCap} className="max-h-[400px] sm:scale-125 translate-y-0 sm:translate-y-0"
          
          /></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
