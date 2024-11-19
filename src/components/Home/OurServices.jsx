import ads from "../../assets/images/ads.png";
import brand from "../../assets/images/brand.png";
import kol from "../../assets/images/kol.png";
import eo from "../../assets/images/eo.png";
import sosmed from "../../assets/images/sosmed.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const [active, setActive] = useState(2);
  const navigate = useNavigate();

  const items = [
    { id: 1, title: "Advertising", content: "See More", image: ads },
    { id: 2, title: "Brand Activation", content: "See More", image: brand },
    { id: 3, title: "KOL Management", content: "See More", image: kol },
    { id: 4, title: "Event Organizer", content: "See More", image: eo },
    { id: 5, title: "Social Media", content: "See More", image: sosmed },
    { id: 6, title: "Merchandise", content: "See More", image: sosmed },
    { id: 7, title: "Content Production", content: "See More", image: sosmed },
  ];

  const nextSlide = () => {
    setActive(active + 1 < items.length ? active + 1 : active);
  };

  const prevSlide = () => {
    setActive(active - 1 >= 0 ? active - 1 : active);
  };

  const handleSeeMoreClick = () => {
    navigate("/about");
  };

  return (
    <div className="bg-black text-white p-2 md:p-4 grid grid-cols-1 z-30">
      <div className="z-20 my-6 md:my-12">
        <div className="w-full">
          <div className="flex space-x-2">
            <div>
              <h1 className="text-xl text-left md:text-7xl text-white font-bold">
                Our Service
              </h1>
            </div>
            <div className="pt-3.5 md:pt-8 2md:pt-12">
              <div className="bg-yellow-400 p-1 md:p-2 rounded-xl px-8 md:px-16"></div>
            </div>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl">
            As your partner, we're dedicated to navigating the complex marketing
            landscape and delivering lasting impact.
          </p>
        </div>

        <div className="relative w-full h-[50vh] flex justify-center items-center overflow-hidden my-8">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`absolute w-72 h-96 md:w-96 md:h-[30rem] text-justify rounded-lg transition-all duration-500 ${
                index === active ? "z-10 opacity-100" : "opacity-60"
              }`}
              style={{
                backgroundColor: "rgba(11, 153, 206, 0.3)",
                transform:
                  index === active
                    ? "none"
                    : `translateX(${200 * (index - active)}px) scale(${
                        1 - 0.3 * Math.abs(index - active)
                      }) perspective(16px) rotateY(${
                        index > active ? "-1deg" : "1deg"
                      })`,
                filter: index === active ? "none" : "blur(5px)",
                backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.2), rgba(0, 0, 255, 0.2)), url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                paddingBottom: "1rem", // Add padding to the bottom of the parent container
              }}
            >
              <div className="bg-transparent p-3 md:p-4 mb-6 rounded-b-lg flex flex-col items-center">
                <h1 className="text-lg md:text-xl font-bold text-white text-center">
                  {item.title}
                </h1>
                <button
                  className="mt-1 md:mt-2 text-white border border-white px-2 py-1 md:px-3 md:py-1 rounded text-sm md:text-base"
                  onClick={handleSeeMoreClick}
                >
                  {item.content}
                </button>
              </div>
            </div>
          ))}
          <button
            id="next"
            className="absolute top-1/2 transform -translate-y-1/2 right-2 md:right-10 text-white text-4xl md:text-6xl font-bold"
            onClick={nextSlide}
          >
            {">"}
          </button>
          <button
            id="prev"
            className="absolute top-1/2 transform -translate-y-1/2 left-2 md:left-10 text-white text-4xl md:text-6xl font-bold"
            onClick={prevSlide}
          >
            {"<"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
