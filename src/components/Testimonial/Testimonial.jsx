import React from "react";
import img from "@/assets/testimonial.png";
import Slider from "react-slick";
import guest1 from "@/assets/guest/image_guests_1.png";
import guest2 from "@/assets/guest/image_guests_2.png";
import guest3 from "@/assets/guest/image_guests_3.png";
const Testimonial = () => {
  const bgstyle = {
    backgroundImage: `url(${img.src})`,
    backgroundPosition: "center",
    minHeight: "320px",
  };

  var settings = {
    dots: false,
    
    infinite: true,
arrows:false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay:true,
    autoplayspeed:2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  const cardData = [
    {
      id: 1,
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo consequuntur similique architecto magni pariatur aperiam, inventore laudantium ipsa vel labore?",
      image: guest1.src,
      name: "user 1",
      role: "frontEnd Developer",
    },
    {
      id: 4,
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo consequuntur similique architecto magni pariatur aperiam, inventore laudantium ipsa vel labore?",
      image: guest2.src,
      name: "user 2",
      role: "MERN Developer",
    },
    {
      id: 3,
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo consequuntur similique architecto magni pariatur aperiam, inventore laudantium ipsa vel labore?",
      image: guest3.src,
      name: "user 3",
      role: "frontEnd Developer",
    },
    {
      id: 2,
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo consequuntur similique architecto magni pariatur aperiam, inventore laudantium ipsa vel labore?",
      image: guest1.src,
      name: "user 4 ",
      role: "BackEnd Developer",
    },
    // Add more objects as needed
  ];
  return (
    <section style={bgstyle}>
      <div className=" bg-white/80 dark:bg-dark/80 min-h-[320px] flex py-10 items-center">
        <div className="container">
          <h2 data-aos="fade-up" className="dark:text-white text-4xl font-extrabold text-center  py-10">
            Choose Best Cab
          </h2>
          <div className="slider-container">
            <Slider {...settings}>
              {
                cardData.map(item=>(

              <div key={item.id} className="" data-aos="fade-left">
                <div className="m-4 bg-white dark:bg-dark  dark:text-white p-4 rounded-3xl">
                  <p className="mb-4 text-[14px] line-clamp-4">
                    {item.content}
                  </p>
                  <div className="flex gap-4 items-center">
                    <img src={item.image} width={70} height={70} alt="" />
                    <div className="capitalize">
                      <h2 className="text-primary font-extrabold">
                        {item.name}
                      </h2>
                      <p className="font-extrabold">{item.role}</p>
                    </div>
                  </div>
                </div>{" "}
              </div>
                ))
              }

            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
{
  /* <div className="bg-white dark:bg-dark dark:text-white p-4">
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  consequuntur similique architecto magni pariatur aperiam,
                  inventore laudantium ipsa vel labore?
                </p>
                <div className="flex gap-1 ">
                  <img src={guest1} width={100} height={100} alt="" />
                  <div className="capitalize">
                    <h2>fouad mogy</h2>
                    <p>developer</p>
                  </div>
                </div>
              </div> */
}
