import { getProject } from "../../api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import moment from "moment";

function Workus() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectData = await getProject(1); // Fetch the first page of projects
        const latestProjects = projectData.data.slice(0, 4); // Get only the first 4 projects
        setProjects(latestProjects);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 h-full">
      <div className="space-y-4 md:space-y-20">
        <div className="space-y-2 md:space-y-4">
          <div className="flex space-x-2">
            <div className="bg-blue-500 rounded p-1 md:p-2 w-fit">
              <h1 className="text-white text-xs md:text-xl font-semibold">
                Our Latest Work
              </h1>
            </div>
          </div>
          <div className="max-w-6xl">
            <p
              className="text-black text-sm md:text-xl w-full md:w-1/2"
              style={{ textAlign: "justify" }}
            >
              Our ongoing project exemplifies our dedication and collaboration,
              driving us towards innovative and impactful results.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {projects.map((project) => (
            <div key={project.id} className="">
              <Link to={`/project/${project.id}`}>
                <div className="">
                  <img
                    src={`https://panel.custompedia.agency/storage/${project.img1}`}
                    alt={project.title}
                    className="w-full object-cover rounded-3xl"
                  />
                  <div className="space-y-2 p-2">
                    <div className="md:flex md:space-x-2">
                      <p className="text-black text-xs md:text-lg">
                        {moment(project.created_at).format("DD MMM, YYYY")}
                      </p>
                      <p className="text-blue-500 text-xs md:text-lg font-bold">
                        Custompedia
                      </p>
                    </div>
                    <h2 className="font-bold text-xs md:text-3xl text-left">
                      {project.project}
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link to="/work">
            <div className="p-2 my-auto hover:scale-110 hover:bg-gradient-to-l flex justify-between from-blue-400 to-blue-600 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl w-fit duration-200 delay-150">
              <h1 className="text-white font-semibold text-left md:px-5 px-2 text-sm md:text-2xl">
                View All Our Works
              </h1>
              <IoIosArrowForward className="text-white w-5 h-5 md:w-7 md:h-7" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Workus;
