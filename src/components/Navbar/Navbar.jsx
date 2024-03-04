"use client";
// import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import DarkMode from "./DarkMode";
import ResponsiveMenu from "./ResponsiveMenu";
import { link } from "./Links";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ visible]);

  const renderLink = link.map((link) => (
    <li
      key={`${link.href}`}
      className={`${
        pathname == link.href
          ? "bg-primary rounded-lg dark:text-black font-extrabold"
          : ""
      } p-2`}
    >
      <Link
        onClick={() => settoggle(false)}
        className="capitalize"
        href={`${link.href}`}
      >
        {link.title}
      </Link>
    </li>
  ));

  return (
    <nav
      className={`dark:bg-black bg-white dark:text-white py-3 z-30 w-full  shadow-lg  ${
        visible ? "fixed " : "relative"
      }  transition-all`}
    >
      <div className="flex justify-between items-center container">
        <p className="capitalize font-extrabold text-2xl">
          cab<span className="text-primary">Hub</span>
        </p>
        <div className="flex items-center gap-1">
          <ul
            className={`z-20 md:flex gap-2 md:static md:bg-transparent absolute right-[30px] rounded-xl dark:bg-dark/60 bg-white/60 min-w-[300px] text-center ${
              toggle ==true ? "top-20 shadow-2xl p-4 backdrop-blur-md" : "-top-[500px]"
            } transition-all duration-300`}
          >
            {renderLink}
          </ul>
          <div className="flex gap-3">
            <DarkMode />
            <ResponsiveMenu settoggle={settoggle} toggle={toggle} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
