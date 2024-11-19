import pertamina from "../../assets/images/pertamina.svg";
import gojek from "../../assets/images/gojek.png";
import gopay from "../../assets/images/gopay.svg";
import airbnb from "../../assets/images/airbnb.svg";
import astra from "../../assets/images/astra.svg";
import ojk from "../../assets/images/ojk.svg";
import emina from "../../assets/images/emina.svg";
import shopee from "../../assets/images/shopee.svg";
import bni from "../../assets/images/BNI.svg";
import btn from "../../assets/images/BTN.svg";
import bpr from "../../assets/images/BPR.png";
import unika from "../../assets/images/unika.svg";
import roda from "../../assets/images/Roda.svg";
import pegipegi from "../../assets/images/PegiPegi.svg";
import bytedance from "../../assets/images/bytedance.svg";
import traveloka from "../../assets/images/traveloka.svg";
import sampoerna from "../../assets/images/Sampoerna.svg";
import tokopedia from "../../assets/images/tokopedia.svg";
import pradita from "../../assets/images/pradita.svg";
import semarang from "../../assets/images/semarang.svg";
import hsb from "../../assets/images/HSB.svg";
import sanggar from "../../assets/images/sanggar.svg";
import iris from "../../assets/images/Iris.png";
import pln from "../../assets/images/pln.svg";
import jateng from "../../assets/images/jateng.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Clientus() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller devices
        settings: {
          slidesToShow: 3, // Show 3 images
        }
      },
      {
        breakpoint: 640, // For mobile devices
        settings: {
          slidesToShow: 3, // Show 2 images
        }
      },
      {
        breakpoint: 480, // For small mobile devices
        settings: {
          slidesToShow: 3, // Show 1 image
        }
      }
    ]
  };

  return (
    <div className="bg-black text-white p-7 grid grid-cols-1 space-y-4">
      <div className="space-y-5 md:space-y-12 ">
        <div className="flex space-x-2">
          <div>
            <h1 className="text-xl text-left md:text-7xl text-white font-bold">
              Our Client
            </h1>
          </div>
          <div className="pt-3.5 md:pt-12">
            <div className="bg-yellow-400 p-1 md:p-2 rounded-xl px-8 md:px-16"></div>
          </div>
        </div>
        <Slider className='w-full bg-white rounded-xl' {...settings}>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="w-full h-full mx-auto my-auto" src={pertamina} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="w-full h-full mx-auto my-auto" src={airbnb} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={astra} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={ojk} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={emina} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={shopee} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={bni} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={unika} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={bytedance} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={btn} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={pegipegi} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={roda} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={gopay} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={traveloka} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={pradita} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={sampoerna} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={tokopedia} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={sanggar} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={semarang} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={jateng} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={hsb} alt="" />
          </div>
          <div className='w-full h-28 md:h-44 p-2 md:p-4'>
            <img className="h-full w-full mx-auto my-auto" src={pln} alt="" />
          </div>
        </Slider>
      </div>
      <div className="w-fit">
        <Link to="/work">
          <div className="p-2 my-auto hover:scale-110 hover:bg-gradient-to-l flex justify-between from-blue-400 to-blue-600 bg-gradient-to-r rounded-xl w-fit duration-200 delay-150">
            <h1 className="text-white font-semibold text-left md:px-5 px-2 text-sm md:text-2xl">
              See More
            </h1>
            <IoIosArrowForward className="text-white w-5 h-5 md:w-7 md:h-7" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Clientus;
