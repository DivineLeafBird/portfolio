import React from "react";
import Venpic from "../assets/venpic.png";
import Purpletray from "../assets/purpletray.png";
import Foodie4 from "../assets/foodie4.png";
import Portfolio from "../assets/portfolio.png";
const ProjectGrid = () => {
  const projects = [
    {
      imgSrc: Venpic,
      tech: ["Web", "Laravel", "PHP"],
      name: "Venpic Agencies",
    },
    {
      imgSrc: Purpletray,
      tech: ["Web", "React", "JavaScript"],
      name: "Purpletray",
    },
    {
      imgSrc: Foodie4,
      tech: ["Mobile", "UX/UI", "Figma"],
      name: "Foodie App",
    },
    {
      imgSrc: Portfolio,
      tech: ["Web", "UX/UI", "Figma"],
      name: "Portfolio",
    },
    {
      imgSrc: Portfolio,
      tech: ["Web", "React", "JavaScript"],
      name: "Portfolio",
    },
  ];
  return (
    <>
      <section className="gradientBg text-tertiary px-5 py-10 max-w-screen-2xl mx-auto ">
        <h2 className="text-2xl text-tertiary font-semibold pb-8 ml-5 text-center md:text-left">
          Projects
        </h2>
        <div className="animate-scroll">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row lg:overflow-clip gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-pink   p-5 rounded-lg overflow-hidden shadow-md "
              >
                <div className="md:h-36 lg:h-40">
                  <img
                    className="w-full h-full object-cover md:object-fill"
                    src={project.imgSrc}
                    alt={project.name}
                  />
                </div>
                <div>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectGrid;
