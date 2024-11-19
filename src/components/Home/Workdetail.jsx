import { getProjectDetail } from "../../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Workdetail() {
  const [project, setProject] = useState(null);
  const { id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 0,
    rtl: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectDetails = await getProjectDetail(id);
        console.log("Fetched Project Details:", projectDetails);
        setProject(projectDetails.project);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const images = [project.img1, project.img2, project.img3];
  console.log("Background Image URL:", project.img1);


  return (
    <div className="grid grid-cols-1 bg-black">
      <div
        className="bg-cover bg-opacity-40 bg-center h-screen flex justify-start items-center"
        style={{
          backgroundImage: `url(https://panel.custompedia.agency/storage/${encodeURIComponent(project.img1)})`,
        }}
      >
        <div className="mx-5 xl:mx-28 p-2 bg-opacity-45 bg-black rounded-xl">
          <div className="flex space-x-2">
            <div>
              <h1 className="text-base text-left xl:text-3xl 2xl:text-5xl text-white font-bold">
                Our project, their story
              </h1>
            </div>
            <div className="pt-2 xl:pt-5">
              <div className="border-yellow-400 border-2 p-1 rounded-xl px-8 xl:px-16"></div>
            </div>
          </div>
          <div className="">
            <h1 className="text-white font-bold text-3xl xl:text-6xl">
              {project.project}
            </h1>
          </div>
        </div>
      </div>
      <div className="my-16 xl:my-32 mx-5 xl:mx-24 2xl:mx-28">
        <div className="space-y-6 xl:space-y-20">
          <div>
            <h1 className="text-base text-left xl:text-3xl 2xl:text-5xl text-white font-base"
                              style={{ textAlign: "justify" }}
>
              {project.description}
            </h1>
          </div>
          <div className="p-2 xl:p-16">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`p-4 my-auto rounded-xl ${index === currentSlide
                    ? "transform scale-110 rounded-xl"
                    : ""
                    } transition-transform`}
                >
                  <div>
                    <img
                      className="w-full h-full"
                      src={`https://panel.custompedia.agency/storage/${image}`}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div>
            <video autoPlay playsInline loop className="rounded w-full h-full">
              <source
                src={`https://panel.custompedia.agency/storage/${project.video}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workdetail;
