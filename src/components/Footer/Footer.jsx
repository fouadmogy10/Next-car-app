import { GiArrowCursor } from "react-icons/gi";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";
import { BsAndroid } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import React from "react";
import Image from "next/image";
import Title from "./title";

const Footer = () => {
  return (
    <>
      <div className="py-10 bg-primary grid place-items-center text-center ">
        <div>
          <p className="md:text-3xl text-2xl mb-5 font-semibold">
            WE ARE READY TO TAKE YOUR CALL 24 HOURS, 7 DAYS!
          </p>
          <h2 className="md:text-5xl text-3xl font-bold">+123 4567 8900</h2>
        </div>
      </div>
      <footer className="dark:bg-dark bg-white dark:text-white py-10">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <Title
              head={"ABOUT CAB HUB"}
              desc={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente   corrupti aliquam corporis sunt. Iusto ipsam obcaecati quas veritatis consectetur exercitationem."
              }
            />
            <div className="flex gap-2  items-center  dark:text-primary text-[#7d7d00g5]">
              <BsFacebook size={30} />
              <AiOutlineInstagram size={30} />
              <AiOutlineGoogle size={30} />
              <AiOutlineTwitter size={30} />
            </div>
          </div>
          <div>
            <Title
              desc={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente corrupti aliquam corporis"
              }
              head={"DOWNLOAD"}
            />
            <p className="flex items-center gap-2 text-primary font-semibold text-2xl">
              Android user
              <BsAndroid  className="dark:text-white text-black" />
            </p>
            <p className="flex items-center gap-2 text-primary font-semibold text-2xl">
              IOS user
              <FaAppStoreIos  className="dark:text-white text-black"/>
            </p>
          </div>
          <div>
            <Title head={"CONTACT"} />
            <p className="flex items-center gap-2 mb-5 mt-5">
              <BiMap className="dark:text-primary "  />
              123 Street, New York, USA
            </p>
            <p className="flex items-center gap-2 mb-5">
              <BsFillTelephoneFill className="dark:text-primary "  />
              +123 4567 8900
            </p>
            <p className="flex items-center gap-2 mb-5">
              <AiFillMail className="dark:text-primary "  />
              nGqo6@example.com
            </p>
            <p className="flex items-center gap-2 ">
              <GiArrowCursor className="dark:text-primary "  /> www.cabhub-tcj.com
            </p>
          </div>
        </div>
      </footer>
        <div className="bg-primary py-4 text-center text-2xl font-bold">
        Copyright © 2024. All rights reserved
        </div>
    </>
  );
};

export default Footer;
