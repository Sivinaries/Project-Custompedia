import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from '../../assets/images/star1.png';

function Runningtext() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    variableWidth: true,
  };

  return (
    <div className="h-fit grid grid-cols-1 w-full max-w-fit mx-auto bg-blue-800 z-30">
      <div className="my-4 md:my-18">
        <Slider className="" {...settings}>
          <div className="w-full">
            <h1 className="text-white text-xl md:text-5xl font-extrabold flex items-center">
              Merchant Branding <img src={star} alt="Running Star" className="ml-2 h-6 xl:h-10" />
            </h1>
          </div>
          <div className="w-full">
            <h1 className="text-white text-xl md:text-5xl font-extrabold flex items-center">
              POI & POSM <img src={star} alt="Running Star" className="ml-2 h-6 xl:h-10" />
            </h1>
          </div>
          <div className="w-full">
            <h1 className="text-white text-xl md:text-5xl font-extrabold flex items-center">
              Advertising <img src={star} alt="Running Star" className="ml-2 h-6 xl:h-10" />
            </h1>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Runningtext