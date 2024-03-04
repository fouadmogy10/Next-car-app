import React from "react";
import Image from "next/image";

const Card = ({ img, title, desc, price }) => {
  return (
    <div className="group rounded-2xl bg-white dark:bg-black hover:!bg-primary shadow-xl duration-200  relative p-2">
      <div className="h-[110px]">
        <Image
          src={img}
          alt={title}
          className="max-w-[200px] block mx-auto
transform -translate-y-20
group-hover:scale-110
group-hover:translate-x-4 duration-300"
        />
      </div>
      <div className="p-4 text-center space-y-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-gray-500 group-hover:text-black duration-300 line-clamp-2">
          {desc}
        </p>
        <p className="text-primary text-2xl font-bold group-hover:text-black duration-300">
          {price}
        </p>
        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
