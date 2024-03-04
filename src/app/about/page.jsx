import About from "@/components/About/About";
import AppStore from "@/components/AppStore/AppStore";
import React from "react";

export const metadata = {
  title: "About Page",
  description: "Lorem ipsum dolor sit amet.",
};

const page = () => {
  
  return (
    <>
      <About />
      <AppStore />
    </>
  );
};

export default page;
