import React from "react";
import Kassim from "../assets/kassim.png";
import getExperienceYears from "../data/yearsOfExperience";

const Introduction = () => {
  const experienceYears = getExperienceYears(2024);
  return (
    <>
      <section className="gradientBg text-tertiary px-5 py-20 max-w-screen-2xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="container mx-auto md:w-1/2">
            <h1 className="text-2xl font-semibold mt-5 text-center md:text-left ">
              Hello, I'm <span className="text-pink">Kassim</span>
            </h1>
            <p className="text-lg mt-5 text-center md:text-left">
              A Junior <em className="text-pink/95">IT Support Specialist</em>,{" "}
              <em className="text-pink/95">Software Engineer</em>, and{" "}
              <em className="text-pink/95">UX / UI Designer.</em>
            </p>
            <p className="text-lg mt-5">
              With a diverse skill set, and{" "}
              <strong>{experienceYears}+ years</strong> of experience, I can
              deliver efficient IT support, craft beautiful and intuitive
              interfaces, write the code that makes them tick, and troubleshoot
              any glitches that pop up.
            </p>
          </div>
          <div>
            <img
              src={Kassim}
              alt="hero"
              className="w-3/5 h-3/5 mx-auto md:mx-1 mt-10"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
