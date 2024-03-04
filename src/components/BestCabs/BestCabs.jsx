import React from "react";
import img from "@/assets/car2.png";
import Card from "./Card";
const BestCabs = () => {
  const bestCab = [
    {
      title: "Economy Class    ",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.    ",
      img,
      price: "$10/km    ",
    },
    {
      title: "Standard Class    ",
      desc: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet    ",
      img,
      price: "$10/km      ",
    },
    {
      title: "Business Class      ",
      desc: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet    ",
      img,
      price: "$10/km      ",
    },
  ];
  return (
    <section className=" dark:bg-[#111111] py-10" data-aos="fade-up">
      <div className="container flex flex-col gap-20">
        <h2 className="dark:text-white text-4xl font-extrabold text-center ">
          Choose Best Cab
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 place-items-center  md:grid-cols-3 ">

          {bestCab.map((cab) => (
          <Card key={cab.title} {...cab}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestCabs;
