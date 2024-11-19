import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import map from "../../assets/images/map.png";

function Nineyears() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="grid grid-cols-1 bg-black">
      <div className="md:my-20 my-8 mx-2 md:mx-4">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-10 gap-4">
          <div className="space-y-10">
            <div className="md:space-y-4 space-y-2">
              <div>
                <h1 className="text-2xl text-center md:text-left md:text-7xl text-white font-extrabold">
                  NINE YEARS
                </h1>
                <h1 className="text-2xl text-center md:text-left md:text-7xl text-blue-400 font-extrabold">
                  IN THE GAME
                </h1>
              </div>
              <div className="md:max-w-2xl">
                <p
                  className="text-white font-light text-left text-xs md:text-xl"
                  style={{ textAlign: "justify" }}
                >
                  Through our years of experience, we develop branding and
                  marketing strategic to best possible growth solutions for our
                  clients.
                </p>
              </div>
            </div>
            <div>
              <img src={map} alt="" />
            </div>
          </div>
          <div
            className="grid grid-cols-2 my-auto gap-5 md:gap-10 md:mx-10"
            ref={ref}
          >
            <div className="space-y-2">
              <div className="mx-auto md:mx-0 p-4 w-fit border-2 border-yellow-400 rounded-xl">
                <StatItem number="9" suffix="th" inView={inView} />
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-semibold text-xs md:text-lg text-blue-400">
                  Years of Experience
                </h2>
              </div>
              <div className="text-center md:text-left">
                <p className="text-white font-semibold text-xs">
                  We bring years of relevant expertise, ensuring the highest
                  standards in everything we do.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="mx-auto md:mx-0 p-4 w-fit border-2 border-yellow-400 rounded-xl">
              <StatItem number="50" suffix="+" inView={inView} />
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-semibold text-xs md:text-lg text-blue-400">
                  Skilled Professional
                </h2>
              </div>
              <div className="text-center md:text-left">
                <p className="text-white font-semibold text-xs">
                  Our team of highly skilled professionals offers relevant
                  solutions tailored to your needs.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="mx-auto md:mx-0 p-4 w-fit border-2 border-yellow-400 rounded-xl">
              <StatItem number="300" suffix="+" inView={inView} />
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-semibold text-xs md:text-lg text-blue-400">
                  Satisfied Clients
                </h2>
              </div>
              <div className="text-center md:text-left">
                <p className="text-white font-semibold text-xs">
                  We have a track record of delivering relevant results that
                  satisfy our clients.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="mx-auto md:mx-0 p-4 w-fit border-2 border-yellow-400 rounded-xl">
              <StatItem number="2499" suffix="+" inView={inView} />
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-semibold text-xs md:text-lg text-blue-400">
                  Project Done
                </h2>
              </div>
              <div className="text-center md:text-left">
                <p className="text-white font-semibold text-xs">
                  With over 2,500 projects done, our experience is both vast and
                  highly relevant to your success.
                </p>
              </div>
            </div>
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
      <p className="font-poppins text-3xl md:text-5xl font-bold text-white">
        {hasAnimated ? <CountUp end={parseInt(number)} duration={10} /> : "0"}
        {suffix}
      </p>
      <p className="font-poppins text-xs md:text-base font-semibold text-white">
        {text}
      </p>
    </div>
  );
}

export default Nineyears;
