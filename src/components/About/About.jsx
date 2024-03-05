import { AiOutlineStar } from "react-icons/ai";
import React from "react";
import aboutimg from "@/assets/girl.jpg";
const About = () => {
  const bgstyle = {
    backgroundImage: `url(${aboutimg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "520px",
  };
  return (
    <section style={bgstyle}>
      <div className="text-white bg-black/80 min-h-[520px] flex py-10 items-center">
        <div className="container ">
          <div className="space-y-2 uppercase text-center">
            <p
              className="text-primary text-2xl font-bold 
            "
              data-aos="fade-up"
            >
              WE DO BEST
            </p>
            <h1
              className="text-2xl font-extrabold "
              data-aos="fade-up"
              data-aos-delay="600"
            >
              THAN YOU WISH
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 py-10  place-items-center gap-y-10">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className=" star flex justify-center items-center w-[70px] h-[70px] rounded-full bg-primary ">
                  <AiOutlineStar color="black" />
                </div>
                <div>
                  <h2 className="text-primary text-2xl  font-semibold">
                    FAST BOOKING
                  </h2>
                  <p className="my-2">
                    lorem ipsum dolor sit amet <br /> consectetur adipisicing
                    elit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
