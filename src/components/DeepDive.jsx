import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";

const DeepDive = ({ project }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="gradientBg text-tertiary px-5 py-20 max-w-screen-2xl mx-auto min-h-screen">
      {project && project.images && project.images.length > 0 && (
        <div className="container mx-auto md:w-1/2 mt-5">
          <div className="relative rounded-xl overflow-hidden">
            <div className="carousel ">
              {project.images.map(
                (image, index) =>
                  image !== "" && (
                    <img
                      key={index}
                      src={image}
                      alt={`image ${index + 1}`}
                      className={`h-full w-full p-12 object-cover ${
                        activeIndex === index ? "" : "hidden"
                      }`}
                    />
                  )
              )}
            </div>

            <div className="flex items-center justify-between">
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 hover:bg-opacity-75 rounded-full p-3  outline-none"
                onClick={handlePrev}
              >
                &lt;
              </button>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 hover:bg-opacity-75 rounded-full p-3  outline-none"
                onClick={handleNext}
              >
                &gt;
              </button>
            </div>
            <div className="absolute bottom-4 left-0 w-full flex justify-center">
              <div className="flex gap-2">
                {project.images.map((_, index) => (
                  <span
                    key={index}
                    className={`block h-1 w-4 cursor-pointer rounded-2xl transition-all ${
                      activeIndex === index ? "bg-blue w-8" : "bg-blue/50"
                    }`}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto space-y-4 mt-5 md:w-1/2">
        <h2 className="text-2xl font-semibold text-center">Project Details</h2>
        <p className="flex items-center space-x-4">
          <span className="font-medium text-lg">Title:</span>{" "}
          <span className="text-base font-normal ">{project.name}</span>
        </p>
        <p className="flex items-center space-x-4">
          <span className="font-medium text-lg">Platform:</span>{" "}
          <span className="text-base font-normal ">{project.platform}</span>
        </p>
        <p className="flex items-center space-x-4">
          <span className="font-medium text-lg">Role:</span>{" "}
          <span className="text-base font-normal ">{project.role}</span>
        </p>
        <p className="flex items-stretch space-x-4">
          <span className="font-normal text-lg inline-flex">Front-end: </span>
          <span className="grid grid-cols-2 gap-1 text-center md:flex md:items-center space-x-2 text-xs md:text-base font-normal ">
            {project &&
              project.frontEnd &&
              project.frontEnd.length > 0 &&
              project.frontEnd.map(
                (tech, index) =>
                  tech !== "" && (
                    <span
                      key={index}
                      className="bg-[#FB503B] rounded-2xl px-4 py-1"
                    >
                      {tech}
                    </span>
                  )
              )}
          </span>
        </p>
        <p className="flex items-stretch space-x-4">
          <span className="font-normal text-lg inline-flex">Back-end: </span>
          <span className="grid grid-cols-2 gap-1 text-center md:flex md:items-center space-x-2 text-xs md:text-base font-normal ">
            {project &&
              project.backEnd &&
              project.backEnd.length > 0 &&
              project.backEnd.map(
                (tech, index) =>
                  tech !== "" && (
                    <span
                      key={index}
                      className="bg-[#FB503B] rounded-2xl px-4 py-1 "
                    >
                      {tech}
                    </span>
                  )
              )}
          </span>
        </p>
        <p className="flex items-center space-x-4">
          <span className="font-medium text-lg">Repository:</span>{" "}
          <span className="text-base font-normal  ">
            <a
              href={project.githubLink}
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <AiOutlineLink />
              {""} {project.name}
            </a>
          </span>
        </p>
        <p className="flex flex-col gap-4">
          <span className="font-medium text-lg text-center">Description</span>{" "}
          <span className="text-base/7 opacity-90 font-normal ">
            {project.description}
          </span>
        </p>
      </div>
    </section>
  );
};

export default DeepDive;
