import React from "react";
import Venpic from "../assets/venpic.png";
import Purpletray from "../assets/purpletray.png";
import Foodie4 from "../assets/foodie4.png";
import Portfolio from "../assets/portfolio.png";
import Renkla from "../assets/renkla.png";
import { Link } from "react-router-dom";

const ProjectGrid = () => {
  const projects = [
    {
      imgSrc: Venpic,
      tech: ["Web", "Laravel", "PHP"],
      name: "Venpic Agencies",
      link: "/projects/4/venpic-agencies",
    },
    {
      imgSrc: Purpletray,
      tech: ["Web", "React", "JavaScript"],
      name: "Purpletray",
      link: "/projects/3/purpletray",
    },
    {
      imgSrc: Foodie4,
      tech: ["Mobile", "UX/UI", "Figma"],
      name: "Foodie App",
      link: "/projects/1/foodie-app",
    },
    {
      imgSrc: Portfolio,
      tech: ["Web", "React", "JavaScript"],
      name: "Portfolio",
      link: "/projects/7/portfolio",
    },
    {
      imgSrc: Renkla,
      tech: ["Mobile", "UX/UI", "Figma"],
      name: "Renkla",
      link: "/projects/8/renkla",
    },
  ];

  const handleClick = (link) => {
    // Navigate to the project details page
    window.location
      ? (window.location.href = link)
      : (window.location.href = link);
  };

  return (
    <>
      <section className=" hidden lg:block gradientBg text-tertiary px-5 py-10 max-w-screen-2xl mx-auto ">
        <h2 className="flex items-center justify-center text-tertiary font-semibold text-2xl pb-20 ">
          Projects
        </h2>
        <div className="animate-scroll">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row lg:overflow-clip gap-8 ">
            {projects.map((project, index) => (
              <div key={index} className="bg-pink p-5 rounded-lg shadow-lg ">
                <div className="md:h-36 lg:h-40">
                  <img
                    className="w-full h-full object-cover md:object-fill"
                    src={project.imgSrc}
                    alt={project.name}
                    // onClick={() => handleClick(project.link)}
                  />
                </div>
                {/* <div>
                  <span className=" text-secondary font-medium block text-center mt-2">
                    {project.name}
                  </span>
                  <div className="mt-2 flex justify-between">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block  text-secondary border-2 border-secondary rounded-full px-2 py-1 text-[8px] xl:text-xs font-normal md:space-x-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectGrid;
