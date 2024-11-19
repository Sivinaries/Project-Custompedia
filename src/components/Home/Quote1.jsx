import company from "../../assets/images/company.png";
import star1 from "../../assets/images/star1.png";
import star2 from "../../assets/images/star2.png";

function Quote1() {
  return (
    <div className="relative grid grid-cols-1 text-white bg-gradient-to-br from-yellow-500 to-blue-500 z-30 p-2 xl:p-4">
      {/* Combined Background Images */}
      
      {/* Overlay */}
      <div className="bg-black z-10 absolute w-full h-full opacity-75"></div>
      
      {/* Content */}
      <div className="z-20 my-24 md:my-44">
        <div className="relative w-full text-left">
          <p className="text-xl md:text-7xl font-bold font-unbounded mb-2 leading-tight flex flex-wrap items-center gap-2 text-justify">
            <span>A</span>
            <span className="text-white border-blue-400 border rounded-lg px-2 py-1">
              CREATIVE
            </span>
            <img
              src={star1}
              alt="star"
              className="w-4 h-4 sm:w-6 sm:h-6 lg:w-10 lg:h-10 md:w-12 md:h-12"
            />
            <span>MIND</span>
            <img
              src={star2}
              alt="star"
              className="w-4 h-4 sm:w-2 sm:h-2 lg:w-5 lg:h-5 md:w-8 md:h-8"
            />
            <span className="text-white border-blue-400 border rounded-lg px-2 py-1">
              KNOWS
            </span>
          </p>
          <p className="text-xl md:text-7xl font-bold mb-2 flex flex-wrap items-center gap-2 text-justify">
            <span>HOW</span>
            <img
              src={star2}
              alt="star"
              className="w-4 h-4 md:w-8 md:h-8"
            />
            <span>TO</span>
            <span>DO</span>
            <span>THE</span>
            <span>RIGHT</span>
            <img
              src={star1}
              alt="star"
              className="w-4 h-4 md:w-12 md:h-12"
            />
            <span className="font-serif text-white px-1 py-1">Things</span>
          </p>
          <p className="text-xl md:text-7xl font-bold mb-2 flex flex-wrap items-center gap-2 text-justify">
            <span>AT</span>
            <span>THE</span>
            <span>RIGHT</span>
            <img
              src={star2}
              alt="star"
              className="w-4 h-4 md:w-8 md:h-8"
            />
            <span>PLACE</span>
            <img
              src={star2}
              alt="star"
              className="w-4 h-4 md:w-8 md:h-8"
            />
            <span>AND</span>
            <span>AT</span>
          </p>
          <p className="text-2xl md:text-7xl font-bold flex flex-wrap items-center gap-2 text-justify">
            <span className="text-white border-blue-400 border rounded-lg px-2 py-1 font-serif">
              THE
            </span>
            <img
              src={star1}
              alt="star"
              className="w-4 h-4 md:w-12 md:h-12"
            />
            <span>RIGHT</span>
            <img
              src={star2}
              alt="star"
              className="w-4 h-4 md:w-8 md:h-8"
            />
            <span className="text-white border-blue-400 border rounded-lg px-2 py-1 font-serif">
              TIME
            </span>
          </p>
        </div>
      </div>
      
   
    </div>
  );
}

export default Quote1;
