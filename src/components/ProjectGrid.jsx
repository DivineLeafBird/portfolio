import React from "react";
import Venpic from "../assets/venpic.png";
import Purpletray from "../assets/purpletray.png";
import Foodie from "../assets/foodie.png";

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
      imgSrc: Foodie,
      tech: ["Mobile", "UX/UI", "Figma"],
      name: "Foodie App",
    },
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
  ];
  return (
    <>
      <section className="gradientBg text-tertiary px-5 py-10 max-w-screen-2xl mx-auto ">
        <h2 className="text-2xl text-tertiary font-semibold pb-8 ml-5 text-center md:text-left">
          Projects
        </h2>
        <div className="animate-scroll">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-pink p-5 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  className="w-full h-50 object-cover"
                  src={project.imgSrc}
                  alt={project.name}
                />
                <span className=" text-secondary block text-center mt-2">
                  {project.name}
                </span>
                <div className="mt-2 flex justify-between">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block  text-secondary border-2 border-secondary rounded-full px-2 py-1 text-xs font-medium mr-2"
                    >
                      {tech}
                    </span>
                  ))}
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
