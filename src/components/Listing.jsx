import React, { useState } from "react";
import { Link } from "react-router-dom";
import projectDetails from "../data/projectDetails";

const Listing = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(12);

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    setVisibleProjects(12); // Reset visible projects when filters change
  };

  const handleLoadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 12);
  };

  const filters = [
    { name: "All", value: "all" },
    { name: "Web", value: "web" },
    { name: "Mobile", value: "mobile" },
    { name: "UX / UI", value: "design" },
  ];

  return (
    <>
      <section className="gradientBg text-tertiary px-5 py-20 max-w-screen-2xl mx-auto">
        <h1 className="text-2xl font-semibold md:px-8 mt-5 mx-auto  text-pink ">
          Projects
        </h1>
        <nav>
          <ul className="flex justify-start gap-4 md:px-4 md:gap-8 py-8">
            {filters.map(({ name, value }) => (
              <li key={value}>
                <Link
                  onClick={() => handleFilterChange(value)}
                  className={`cursor-pointer rounded-2xl px-4 py-1  text-pink text-sm md:text-lg font-medium hover:bg-pink hover:text-primary ${
                    selectedFilter === value ? "text-blue" : ""
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
          {projectDetails
            .filter(
              (project) =>
                selectedFilter === "all" || project.category === selectedFilter
            )
            .slice(0, visibleProjects)
            .map((project, index) => (
              <Link
                to={{
                  pathname: `/projects/${project.id}/${project.name
                    .toLowerCase()
                    .replace(/\s/g, "-")}`,
                }}
                key={index}
                // onClick={() => console.log("Project:", project)}
              >
                <div className="bg-pink p-5 rounded-lg overflow-hidden shadow-md cursor-pointer hover:bg-gray-50 md:transition lg:duration-500 lg:ease-in-out lg:transform lg:hover:-translate-y-1 lg:hover:scale-110">
                  <div>
                    <img
                      className="object-cover"
                      src={project.imgSrc}
                      alt={project.name}
                    ></img>
                  </div>
                  <span className=" text-secondary block font-medium mt-2">
                    {" "}
                    {project.name}
                  </span>
                  <span className=" text-secondary block font-normal mt-2">
                    {" "}
                    {project.platform}
                  </span>
                  <div className="mt-2 flex flex-wrap">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className=" text-secondary px-1 py-1 text-xs font-normal mr-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
        </div>
        {visibleProjects <
          projectDetails.filter(
            (project) =>
              selectedFilter === "all" || project.category === selectedFilter
          ).length && (
          <div className="flex items-center justify-center">
            <button
              onClick={handleLoadMore}
              className="bg-blue text-tertiary px-4 py-2 font-medium rounded-2xl mt-8 hover:bg-slate-400 outline-none"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Listing;
