import { FiExternalLink } from "react-icons/fi";
import Image from "../assets/renkla-temp.jpg";
import { Link } from "react-router-dom";
import featuredProjects from "../data/featuredProjects";
import { IoIosArrowRoundForward } from "react-icons/io";

const FeaturedProjects = () => {
  return (
    <>
      <section className="gradientBg text-tertiary px-5 py-10 max-w-screen-2xl mx-auto ">
        <h2 className="flex justify-center text-2xl text-tertiary font-semibold pb-8">
          Featured Projects
        </h2>
        <p className="text-center text-lg text-tertiary max-w-4xl mx-auto mb-8">
          Explore a selection of my most impactful projects, each reflecting my
          commitment to thoughtful design, strategic thinking, and attention to
          detail.These featured projects represent the range and depth of my
          skills, combining creativity, problem-solving, and real-world results.
        </p>
        <div className="grid  md:grid-cols-4 gap-8 md:mx-20">
          {/* Project cards*/}
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white col-span-2 lg:col-span-1 rounded-lg shadow-md"
            >
              <div className="max-h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt="project thumbnail"
                  className="w-full h-full rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-secondary font-medium">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description} <br />
                </p>
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  <p className="text-primary font-medium text-lg py-2">
                    Learn more{" "}
                    <FiExternalLink className="w-4 h-4 inline relative -top-[3px]" />
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="/projects"
            className="bg-pink text-primary px-8 py-2 font-medium rounded-3xl mt-10 hover:bg-pink/70 md:transition lg:duration-500 lg:ease-in-out lg:transform lg:hover:-translate-y-1 lg:hover:scale-110 outline-none cursor-pointer"
          >
            More Projects{" "}
            <IoIosArrowRoundForward className="w-8 h-8 inline animate-bounce-x" />
          </Link>
        </div>
        {/* <div className="flex items-center justify-center my-8 bg-pink w-20  p-4 rounded-lg">
          <Link to="/projects" className="text-primary hover:underline">
            More Projects
          </Link>
        </div> */}
      </section>
    </>
  );
};

export default FeaturedProjects;
