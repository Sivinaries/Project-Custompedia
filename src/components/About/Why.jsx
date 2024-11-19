import { useState } from "react";
import drop from "..//../assets/images/dropdown.png";

function Why() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
  };
  return (
    <div className="grid grid-cols-1 bg-black">
      <div className="md:my-20 my-8 mx-2 md:mx-4">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-10 gap-4">
          <div className="my-auto md:space-y-4 space-y-2">
            <div>
              <div>
                <h1 className="text-2xl text-center md:text-left md:text-7xl text-white font-extrabold">
                  WHY YOU
                </h1>
              </div>
              <div>
                <h1 className="text-2xl text-center md:text-left md:text-7xl text-blue-400 font-extrabold">
                  NEED US?
                </h1>
              </div>
            </div>
            <div className="text-xs md:text-base max-w-2xl">
              <h1
                className="text-white font-light text-left text-xs md:text-xl"
                style={{ textAlign: "justify" }}
              >
                In a world filled with endless distractions, capturing attention
                is an art and we are the masters of it. Our mission is clear:
                <span className="text-yellow-400">
                  to create extraordinary, winning social marketing campaigns,
                  comprehensive engagement strategies, and captivating
                  narratives that propel brands to new heights on industry.
                </span>
              </h1>
            </div>
          </div>
          <div className="my-auto space-y-4 mx-auto">
            <div className="bg-gray-800 p-4 md:p-6 rounded-3xl">
              <div className="flex justify-between">
                <div className="my-auto">
                  <h1 className="text-white font-semibold text-sm md:text-2xl">
                    Full-service creative agency
                  </h1>
                </div>
                <button onClick={toggleDropdown}>
                  <div className="my-auto">
                    <img
                      className="my-auto w-3/4 md:w-full"
                      src={drop}
                      alt=""
                    />
                  </div>
                </button>
              </div>
              {isDropdownOpen && (
                <div className="my-4 bg-gray-700 p-4 rounded-xl">
                  <p
                    className="text-white font-semibold text-left text-xs md:text-xl"
                    style={{ textAlign: "justify" }}
                  >
                    We map aut brand value, vision, objectives, and create the
                    precise step to react the target. From strategy, branding,
                    and execute the project, our professional team will help you
                    to handle the marketing from many aspects and bring the
                    business to certain target.
                  </p>
                </div>
              )}
            </div>
            <div className="bg-gray-800 p-4 md:p-6 rounded-3xl">
              <div className="flex justify-between">
                <div className="my-auto">
                  <h1 className="text-white font-semibold text-sm md:text-2xl">
                    Conscientious in process and result oriented
                  </h1>
                </div>
                <button onClick={toggleDropdown2}>
                  <div className="my-auto">
                    <img
                      className="my-auto w-3/4 md:w-full"
                      src={drop}
                      alt=""
                    />
                  </div>
                </button>
              </div>
              {isDropdownOpen2 && (
                <div className="mt-4 bg-gray-700 p-4 rounded-xl">
                  <p
                    className="text-white font-semibold text-left text-xs md:text-xl"
                    style={{ textAlign: "justify" }}
                  >
                    From the vision to strategy, from strategy to execute, our
                    objective is that the process and progress will lead the
                    project to targeted KPI.
                  </p>
                </div>
              )}
            </div>
            <div className="bg-gray-800 p-4 md:p-6 rounded-3xl">
              <div className="flex justify-between">
                <div className="my-auto">
                  <h1 className="text-white font-semibold text-sm md:text-2xl">
                    Crafting the project with creativity and authentic ideas
                  </h1>
                </div>
                <button onClick={toggleDropdown3}>
                  <div className="my-auto">
                    <img
                      className="my-auto w-3/4 md:w-full"
                      src={drop}
                      alt=""
                    />
                  </div>
                </button>
              </div>
              {isDropdownOpen3 && (
                <div className="mt-4 bg-gray-700 p-4 rounded-xl">
                  <p
                    className="text-white font-semibold text-left text-xs md:text-xl"
                    style={{ textAlign: "justify" }}
                  >
                    As the world trend and customer behaviour change faster, it
                    makes the business face new issues and have to adapt day to
                    day. We create new new ideas to help the client to solve the
                    business issues, and to adapt in this era.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
