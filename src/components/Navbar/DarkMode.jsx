import { BiSun } from "react-icons/bi"; 
import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";

const DarkMode = () => {
  const isBrowser = typeof window !== "undefined";
  const [Theme, setTheme] = useState(
    isBrowser ? (window.localStorage.getItem("theme") ? window.localStorage.getItem("theme") : "light") : "light"
  );

  useEffect(() => {
    if (isBrowser) {
      window.localStorage.setItem("theme", Theme);
      if (Theme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
      }
    }
  }, [Theme, isBrowser]);

  return (
    <span
      className="cursor-pointer"
      onClick={() => setTheme(Theme === "dark" ? "light" : "dark")}
    >
      {Theme === "dark" ? <MdDarkMode size={22} /> : <BiSun size={22} />}
    </span>
  );
};
export default DarkMode;
