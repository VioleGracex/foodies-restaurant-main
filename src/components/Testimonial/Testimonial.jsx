import React from "react";
import Slider from "react-slick";
import { FaUtensils } from "react-icons/fa"; // Import fork and spoon icons

const testimonialData = [
  {
    id: 1,
    name: "Самуэль",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Джон Доу",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Смит",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Что говорят наши клиенты
            </p>
            <h1 className="text-3xl font-bold">Отзывы</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div key={data.id} className="my-6">
                    <div
                      className="flex flex-col justify-center items-center gap-4 text-center shadow-xl p-6 mx-4 rounded-3xl dark:bg-gray-800 bg-primary/10 relative"
                      style={{
                        background: "radial-gradient(circle, #fff, #f1f1f1)", // Plate background effect
                        borderRadius: "50%", // Circular plate shape
                        border: "8px solid #e2e2e2", // Plate-like border
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)", // Shadow to give a plate effect
                        padding: "40px", // Padding to ensure content fits well
                      }}
                    >
                      {/* Fork and Spoon Icons */}
                      <div className="absolute top-2 left-2 text-3xl text-gray-600">
                        <FaUtensils />
                      </div>
                      <div className="absolute top-2 right-2 text-3xl text-gray-600">
                        <FaUtensils />
                      </div>

                      <img
                        className="rounded-full block mx-auto"
                        src={data.img}
                        alt={data.name}
                      />
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 mr-6">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
