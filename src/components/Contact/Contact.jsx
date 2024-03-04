import React from "react";

const Contact = () => {
  return (
    <section className="bg-primary  text-black sm:min-h-[600px] sm:grid sm:place-items-center duration-300 pt-24 pb-10 sm:pb-0 ">
      <div className="container">
        <div
          className="grid grid-cols-1 md:grid-cols-2 place-items-center "
          data-aos="fade-up"
        >
          <div className="space-y-5 md:p-16 p-2 pb-6 ">
            <h1 className="capitalize text-2xl sm:text-3xl font-bold">
              best in city
            </h1>
            <h1 className="text-3xl sm:text-4xl font-bold " data-aos="fade-up">
              TRUSTED CAB SERVIES IN NEW YORK
            </h1>
            <p className="leading-8 tracking-wide" data-aos="fade-up">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              natus assumenda alias numquam. Repudiandae dolorum fugiat
              perspiciatis non ratione assumenda fugit. Quis id.
            </p>
            <button
              data-aos="fade-up"
              className="text-white px-4 py-2  rounded-lg
bg-black uppercase"
            >
              BOOK nOW
            </button>
          </div>
          <div className="w-full md:max-w-[350px] mx-auto md:mb-0 mb-5">
            <h1 className="uppercase text-2xl text-white bg-black px-5 py-3">
              book a cab
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 bg-white p-5">
              <input
                type="text"
                className="inputField"
                name="phone"
                id="phone"
                placeholder="phone"
              />
              <input
                type="text"
                className="inputField"
                name="name"
                id="name"
                placeholder="name"
              />
              <input
                type="text"
                className="inputField"
                name="start"
                id="start"
                placeholder="start"
              />
              <input
                type="text"
                className="inputField"
                name="end"
                id="end"
                placeholder="end"
              />
              <input
                type="text"
                className="inputField"
                name=""
                id=""
                placeholder="choose"
              />
              <button
                className="text-white px-4 py-2  rounded-lg
bg-black uppercase"
              >
                BOOK nOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
