import { getProject } from "../../api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Workus() {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectData = await getProject(currentPage);
        setProjects(projectData.data);
        setTotalPages(projectData.last_page);
        console.log("Total Pages:", projectData.last_page);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      console.log("Next button clicked");
      setCurrentPage(currentPage + 1);
      console.log("Current Page:", currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-black text-white p-2 md:p-4 grid grid-cols-1 z-30">
      <div className="z-20 my-6 md:my-12">
        <div className="space-y-5 md:space-y-12">
          <div className="w-full">
            <div className="flex space-x-2">
              <div>
                <h1 className="text-xl text-left md:text-7xl text-white font-bold">
                  Our Work
                </h1>
              </div>
              <div className="pt-3.5 md:pt-8 2md:pt-12">
                <div className="bg-yellow-400 p-1 md:p-2 rounded-xl px-8 md:px-16"></div>
              </div>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl">
            Moves Businesses Forward
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 md:p-8 p-2">
            {projects.map((project) => (
              <div className="w-full my-auto" key={project.id}>
                <Link className="" to={`/project/${project.id}`}>
                  <div className="relative group shadow-xl transform duration-500 hover:bg-right cursor-pointer">
                    <img
                      src={`https://panel.custompedia.agency/storage/${project.img1}`}
                      alt={project.project}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 py-8 md:py-36 hover:bg-opacity-75 transform duration-300 flex items-center justify-center">
                      <h2 className="text-white duration-300 mx-5 bottom-0 font-extrabold text-xs md:text-4xl opacity-0 transition-opacity group-hover:opacity-100 hover:text-white">
                        {project.project}
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <button className="p-2 my-auto hover:scale-110 hover:bg-gradient-to-l flex justify-between from-blue-400 to-blue-600 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl w-fit duration-200 delay-150" onClick={handlePrevPage} disabled={currentPage === 1}>
              <IoIosArrowBack className='text-white w-5 h-5 md:w-7 md:h-7' />
              <h1 className="text-white font-semibold text-left md:px-5 px-2 text-sm md:text-2xl">Previous</h1>
            </button>
            <button className="p-2 my-auto hover:scale-110 hover:bg-gradient-to-l flex justify-between from-blue-400 to-blue-600 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl w-fit duration-200 delay-150" onClick={handleNextPage} disabled={currentPage === totalPages}>
              <h1 className="text-white font-semibold text-left md:px-7 px-4 text-sm md:text-2xl">Next</h1>
              <IoIosArrowForward className='text-white w-10 h-5 md:w-12 md:h-7' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workus;
