import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

const MediaCard = ({ src, projectId }) => (
  <div className="w-full">
    <Link to={`/project/${projectId}`}>
      <img
        src={`https://panel.custompedia.agency/storage/${src}`}
        alt="Project"
        className="w-full h-full object-cover rounded-xl"
      />
    </Link>
  </div>
);

MediaCard.propTypes = {
  src: PropTypes.string.isRequired,
  projectId: PropTypes.number.isRequired,
};

const Serviceus = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://panel.custompedia.agency/api/kategoris"
        );
        setCategories([{ id: "all", kategori: "All" }, ...response.data]);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch categories");
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const allProjects = categories.flatMap((category) =>
    category.id === "all" ? [] : category.projects
  );

  const displayedProjects =
    selectedCategory === "All"
      ? allProjects
      : categories.find((cat) => cat.kategori === selectedCategory)?.projects ||
        [];

  return (
    <div className="bg-gray-100 grid grid-cols-1 p-4 h-screen">
      <div className="space-y-4 md:space-y-8 ">
        <div className="flex space-x-2">
          <div>
            <h1 className="text-xl text-left md:text-7xl text-black font-bold">
              Services
            </h1>
          </div>
          <div className="pt-3.5 md:pt-8 2md:pt-12">
            <div className="bg-yellow-400 p-1 md:p-2 rounded-xl px-8 md:px-16"></div>
          </div>
        </div>
        <div className="flex gap-2 overflow-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 md:px-8 p-1 md:p-2 text-xs md:text-sm font-bold rounded-xl ${
                category.kategori === selectedCategory
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black "
              }`}
              onClick={() => setSelectedCategory(category.kategori)}
            >
              {category.kategori}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {displayedProjects.map((project) => (
            <MediaCard
              key={project.id}
              src={project.img1}
              projectId={project.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Serviceus;
