import gettouch from '../../assets/images/gettouch.jpg';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const GetInTouch = () => {

  return (
    <div className="grid grid-cols-1 h-screen relative bg-black z-30 p-2">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-700 opacity-40"></div>
      <div className="relative z-10 text-center my-auto">
        <h1 className="text-5xl md:text-9xl font-bold text-yellow-400 mb-4">GET IN</h1>
        <h1 className="text-5xl md:text-9xl font-bold text-yellow-400 mb-4">TOUCH</h1>
        <p className="text-white text-base md:text-lg mb-8 max-w-2xl md:max-w-4xl mx-auto">
          We’ll show you how to start powerful conversations, drive social engagement, build your brand, hit sales targets or meet other goals you have, wherever you are in the world.
        </p>
        <div className="flex  items-center  justify-center">
            <Link to="/contact">
              <div className="p-2 my-auto hover:scale-110 hover:bg-gradient-to-l flex justify-between from-blue-400 bg-gradient-to-r to-blue-500 rounded-xl w-fit duration-200 delay-150">
                <h1 className="text-white font-semibold text-left md:px-5 px-2 text-sm md:text-2xl">
                  Work With  Us
                </h1>
                <IoIosArrowForward className="text-white w-5 h-5 md:w-7 md:h-7" />
              </div>
            </Link>
          </div>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: `url(${gettouch})`, filter: 'brightness(0.5)' }}
      ></div>
    </div>
  );
};

export default GetInTouch;
