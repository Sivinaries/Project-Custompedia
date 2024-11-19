import { IoIosArrowForward } from "react-icons/io";
import ready from "../../assets/images/ready.jpg";
import { Link } from "react-router-dom";

const CTAJourney = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <img
        src={ready}
        alt="Business desk with laptop and papers"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-yellow-400 opacity-60"></div>
      <div className="relative z-10 h-full md:flex justify-between items-center p-6 md:p-10 lg:p-16">
        <h2 className="text-white text-left text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-md">
          Ready to start a new journey
          <br className="hidden sm:inline" />
          with your business?
        </h2>
        <div className="flex flex-col items-end mt-6 sm:mt-0">
          <p className="text-white text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 drop-shadow-md">
            Talk to us about your ideas
          </p>
          <div className="flex items-center justify-center">
            <Link to="/contact">
              <div className="p-2 my-auto hover:scale-110 hover:bg-gradient-to-l flex justify-between bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl w-fit duration-200 delay-150">
                <h1 className="text-white font-semibold text-left md:px-5 px-2 text-sm md:text-xl 2md:text-2xl">
                  Contact Us
                </h1>
                <IoIosArrowForward className="text-white w-5 h-5 md:w-7 md:h-7" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAJourney;
