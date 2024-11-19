import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import teamyellow from "../../assets/images/teamyellow.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative grid grid-cols-1 text-white bg-gradient-to-br from-yellow-500 to-blue-500 z-30">
      <div className="bg-black z-10 absolute w-full h-full opacity-75"></div>

      <div className="my-16 md:my-44 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 space-x-0 md:space-x-8  p-4">
          <div className="my-auto">
            <img
              src={teamyellow}
              alt="Team"
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="text-center md:text-left my-auto space-y-4 md:space-y-6">
            <div>
              <h1 className="text-yellow-500 text-2xl md:text-4xl font-semibold">
                About Us
              </h1>
            </div>
            <div className="md:w-4/5">
              <h1 className="text-white md:text-4xl font-semibold">
                We Use <span className="text-blue-500">Creativity</span> to
                Deliver Your Brand Vision.
              </h1>
            </div>
            <div className="md:w-4/5">
              <p className="text-gray-300 text-sm md:text-lg text-center md:text-left">
                Through our years of experience, we develop branding and
                marketing strategies to best possible growth solutions for our
                clients.
              </p>
            </div>
            <div className="flex items-center justify-center md:w-fit w-full">
              <Link to="/about">
                <div className="p-2 my-auto hover:scale-110 hover:bg-gradient-to-l flex justify-between from-blue-400 to-blue-600 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl w-fit duration-200 delay-150">
                  <h1 className="text-white font-semibold text-left md:px-5 px-2 text-sm md:text-xl xl:text-2xl">
                    Get To Know More
                  </h1>
                  <IoIosArrowForward className="text-white w-5 h-5 md:w-7 md:h-7" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className="p-4 z-20"
        style={{
          background:
            "linear-gradient(to right, rgba(250, 192, 22, 0.3), rgba(11, 153, 206, 0.3))",
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 h-56 z-20">
          <div className="flex items-center justify-center h-full z-20">
            <StatItem
              number="9"
              suffix="th"
              text="Years of Experience"
              inView={inView}
            />
          </div>
          <div className="flex items-center justify-center h-full">
            <StatItem
              number="50"
              suffix="+"
              text="Skilled Professionals"
              inView={inView}
            />
          </div>
          <div className="flex items-center justify-center h-full">
            <StatItem
              number="300"
              suffix="+"
              text="Satisfied Clients"
              inView={inView}
            />
          </div>
          <div className="flex items-center justify-center h-full">
            <StatItem
              number="2500"
              suffix=""
              text="Projects Done"
              inView={inView}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatItem({ number, suffix, text, inView }) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div className="text-center">
      <p className="font-poppins text-3xl md:text-5xl font-bold text-yellow-400">
        {hasAnimated ? <CountUp end={parseInt(number)} duration={10} /> : "0"}
        {suffix}
      </p>
      <p className="font-poppins text-xs md:text-base font-semibold text-white">
        {text}
      </p>
    </div>
  );
}

export default AboutUs;
