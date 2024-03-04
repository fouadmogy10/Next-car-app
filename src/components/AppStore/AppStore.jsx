import React from "react";
import app_store from "@/assets/website/app_store.png"
import play_store from "@/assets/website/play_store.png"
import carBooking from "@/assets/carbooking.png"
import Image from "next/image";
const AppStore = () => {
  return (
    <section className="py-10 dark:bg-dark dark:text-white duration-300">
      <div className="space-y-2 uppercase text-center">
        <p
          className="text-primary text-2xl font-bold 
            "
          data-aos="fade-up"
        >
          DONWLOAD
        </p>
        <h1
          className="text-2xl font-extrabold "
          data-aos="fade-up"
          data-aos-delay="600"
        >
          BEST CAB SERVICE
        </h1>
      </div>
      <div className=" container flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center justify-center "  data-aos="fade-up" data-aos-delay="800">
          <div className=" md:max-w-[400px] z-10">
            <h1 className="text-2xl font-semibold ">Download the Cab voucher app  free! Get Exciting New Offers</h1>
            <p className="my-10">Lorem ipsum dolor sit amet consectetur adipisicing  elit. Blanditiis ad animi consequuntur aperiam unde!</p>
            <div className="flex gap-3 flex-wrap">
              <Image src={play_store} alt="play_store" width={180 } height={180} />
              <Image src={app_store} alt="app_store" width={180 } height={180} />
            </div>
          </div>
          <div>
            <Image src={carBooking} alt="booking car" className="max-w-[400px]"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStore;