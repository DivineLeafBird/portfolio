import React from "react";
import Kassim from "../assets/kassim.png";

const Introduction = () => {
  return (
    <>
      <section className="gradientBg text-tertiary px-5 py-20 max-w-screen-2xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="container mx-auto md:w-1/2">
            <h1 className="text-2xl font-semibold mt-5 text-center md:text-left ">
              Hi, I'm <span className="text-pink">Kassim</span>
            </h1>
            <p className="text-lg mt-5 text-center md:text-left">
              Software Engineer, <br />
              IT Support Specialist, and UX / UI Designer.
            </p>
            <p className="text-lg mt-5">
              I bring together the skills of a Software engineer, a UX/UI
              designer, and an IT support specialist. I can craft beautiful and
              intuitive interfaces, write the code that makes them tick, and
              then troubleshoot any glitches that pop up.
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
