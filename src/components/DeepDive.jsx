import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

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
            <div className="carousel mx-8 ">
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
              <div
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/20  hover:bg-pink/50 rounded-full p-4 outline-none"
                onClick={handlePrev}
              >
                <IoChevronBackOutline className="w-6 h-6 text-white" />
              </div>

              <div
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/20  hover:bg-pink/50 rounded-full p-4 outline-none"
                onClick={handleNext}
              >
                <IoChevronForwardOutline className="w-6 h-6 text-white" />
              </div>
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
        <div className="flex-col items-center justify-center space-x-4">
          <p className="font-medium text-lg">Tools & Technologies: </p>
          <div className="flex flex-wrap gap-2 py-4 items-center justify-start text-xs md:text-base font-normal ">
            {project &&
              project.stack &&
              project.stack.length > 0 &&
              project.stack.map(
                (tech, index) =>
                  tech !== "" && (
                    <span
                      key={index}
                      className="bg-blue/40 text-nowrap rounded-2xl px-4 py-1"
                    >
                      {tech}
                    </span>
                  )
              )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <p className="font-medium text-lg">Repository:</p>{" "}
          <div className="text-base font-normal hover:text-blue transition-all duration-300">
            <a
              href={project.githubLink}
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <AiOutlineLink />
              <span>visit project</span>
            </a>
          </div>
        </div>
        <div className="flex-col items-center justify-center">
          <p className="font-medium text-lg">Description:</p>{" "}
          <p className="text-base/7 opacity-90 font-normal pt-4 ">
            {project.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeepDive;
