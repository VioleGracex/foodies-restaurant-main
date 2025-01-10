import React, { useState, useEffect } from "react";
import BorschtImg from "../../assets/borscht3.png"; // Replace with your actual image path
import PelmeniImg from "../../assets/pelmeni.png"; // Replace with your actual image path
import BliniImg from "../../assets/blen.png"; // Replace with your actual image path
import StarRatings from "react-star-ratings";

// Fallback image if an image doesn't exist
const fallbackImage = "path/to/fallback-image.png"; // Provide a fallback image path

// Data for services (Russian food and descriptions)
const ServicesData = [
  {
    id: 1,
    img: BorschtImg,
    name: "Борщ",
    description:
      "Традиционный русский суп с свеклой, капустой, мясом и сметаной. Отличается насыщенным вкусом и богатством ингредиентов.",
  },
  {
    id: 2,
    img: PelmeniImg,
    name: "Пельмени",
    description:
      "Русские пельмени, начиненные мясом, в сочетании с ароматным бульоном или сметаной. Тепло и вкусно в каждом укусе.",
  },
  {
    id: 3,
    img: BliniImg,
    name: "Блины",
    description:
      "Тонкие русские блины с различными начинками, от икры до варенья. Классический русский десерт для любого праздника.",
  },
];

const Services = () => {
  const [imagesLoaded, setImagesLoaded] = useState({});

  // Function to check if an image exists
  const checkImageExists = (src) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImagesLoaded((prevState) => ({ ...prevState, [src]: true }));
    };
    img.onerror = () => {
      setImagesLoaded((prevState) => ({ ...prevState, [src]: false }));
    };
  };

  // Check images on component mount
  useEffect(() => {
    ServicesData.forEach((service) => {
      checkImageExists(service.img);
    });
  }, []);

  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Наши услуги
            </p>
            <h1 className="text-3xl font-bold">Наши блюда</h1>
            <p className="text-xs text-gray-400">
              Откройте для себя богатство русской кухни. Каждое блюдо — это
              часть нашей традиции.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={
                      imagesLoaded[service.img] === false
                        ? fallbackImage
                        : service.img
                    }
                    alt={service.name}
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full">
                    {/* Uncomment to add star ratings */}
                    {/* <StarRatings
                      rating={4}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                      starDimension="20px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    /> */}
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
