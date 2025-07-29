import React from "react";
import Kassim from "../assets/kassim.png";
import rolesDetails from "../data/rolesDetails";
import getAge from "../data/age";

const AboutContent = () => {
  const age = getAge("1999-08-03");
  const background = [
    {
      title: "Personal Background",
      content: [
        "Name: Kassim Yahya Ali",
        `Age: ${age} Years`,
        "Postal Address: 88240-80100 Mombasa, Kenya",
        "Highest Education: BSc, Information Technology",
        "Professions: Software Engineer, IT Support Specialist, UX/UI Designer, Data Analyst",
      ],
    },
  ];

  return (
    <>
      <section className="gradientBg text-tertiary px-5 py-20 max-w-screen-2xl mx-auto min-h-screen">
        {/* background card start */}
        <div className="container mx-auto flex flex-col items-center gap-8 mt-5">
          <img
            src={Kassim}
            alt="Kassim"
            className="object-cover w-1/3 lg:w-1/6"
          />
          {/* background card list */}
          <div>
            {background.map((item, index) => (
              <div
                key={index}
                className="bg-pink rounded-lg flex flex-col items-center p-2"
              >
                <h4 className="text-secondary text-lg md:text-xl   font-medium lg:font-semibold text-center p-2">
                  {item.title}
                  <hr className="border-indigo-700 opacity-50 transform translate-y-2" />
                </h4>

                <ul className="text-secondary  text-[10px] md:text-sm lg:text-base font-light   mt-2 flex flex-col items-center">
                  {item.content.map((detail, i) => (
                    <li key={i} className="p-2">
                      <span>
                        <strong>{detail}</strong>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/*profession cards start */}
          <div className="grid grid-cols-1 gap-8 mt-5 md:w-3/4 ">
            {Object.keys(rolesDetails).map((roleKey, index) => (
              <div key={index}>
                {rolesDetails[roleKey].map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-pink rounded-lg flex flex-col items-center  mx-auto p-2"
                  >
                    <h4 className="text-secondary font-medium lg:font-semibold text-lg md:text-xl   text-center p-2">
                      {item.title}
                      <hr className="border-indigo-700 opacity-50 transform translate-y-2" />
                    </h4>
                    <p className="font-normal text-xs md:text-sm lg:text-base text-center text-primary p-2">
                      "{item.qoute}"
                    </p>
                    <p className="font-normal text-base lg:text-lg text-center p-2  text-secondary opacity-95">
                      {item.intro}
                    </p>
                    <div className="flex flex-row flex-wrap items-center justify-center gap-2 p-2">
                      {Array.isArray(item.skills) &&
                        item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className=" border border-primary text-secondary px-4 py-1 text-nowrap rounded-lg text-xs md:text-sm lg:text-base"
                          >
                            {skill}
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
