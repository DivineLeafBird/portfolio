import React from "react";
import { FaClipboardUser, FaGraduationCap } from "react-icons/fa6";
import { MdRadioButtonChecked, MdVolunteerActivism } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { IoBulb, IoLanguage } from "react-icons/io5";
import education from "../data/educationDetails";
import experience, { volunteer } from "../data/experienceDetails";
import certificates from "../data/certificateDetails";
import skills from "../data/skillsDetails";
const ResumeContent = () => {
  // const volunteer = [
  //   "Windows installation on new Desktop computers at Kilifi Township Secondary School.",
  //   "Mangrove restoration at Kiriba / Wangwani.",
  //   "Volunteer as a coding instructor at a local community center to teach coding skills to underprivileged youth.",
  // ];
  return (
    <>
      <section className="gradientBg text-tertiary items-center justify-center px-48 py-20 min-h-screen">
        <h1 className="text-3xl font-semibold mt-5  text-pink ">Resume</h1>
        {/* Education Timeline */}
        <div className="container xl:translate-x-4 mt-5">
          <div className="flex items-center gap-8 pb-5">
            <div className="bg-secondary p-2 rounded-lg">
              <FaGraduationCap className="w-6 h-6 text-tertiary" />
            </div>
            <div className="font-medium text-2xl text-tertiary">
              <h3>Education</h3>
            </div>
          </div>
          <ul className="ml-3">
            {education.map((item, index) => (
              <li
                key={index}
                className=" relative flex items-baseline gap-11 pb-10 text-wrap"
              >
                <div
                  className={`${
                    index !== education.length - 1
                      ? "before:absolute before:left-[7.4px] before:translate-y-2 before:bg-tertiary before:h-full before:w-[1px]"
                      : ""
                  }`}
                >
                  <MdRadioButtonChecked />
                </div>
                <div className="text-tertiary">
                  <h4 className="font-medium text-xl mb-1">{item.title}</h4>
                  <p className="font-normal text-lg mb-1 opacity-80">
                    {item.school},{" "}
                    <span className="text-stone-300"> {item.location} </span>
                  </p>
                  <p className="font-normal text-base mb-1 text-blue opacity-70">
                    {item.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Experience Timeline */}
        <div className="container xl:translate-x-4 mt-5 ">
          <div className="flex items-center gap-8 pb-5">
            <div className="bg-secondary p-2 rounded-lg">
              <FaClipboardUser className="w-6 h-6 text-tertiary" />
            </div>
            <div className="font-medium text-2xl text-tertiary">
              <h3>Experience</h3>
            </div>
          </div>
          <ul className="ml-3">
            {experience.map((item, index) => (
              <li
                key={index}
                className=" relative flex items-baseline gap-11 pb-10 text-wrap"
              >
                <div
                  className={`${
                    index !== experience.length - 1
                      ? "before:absolute before:left-[7.4px] before:translate-y-2 before:bg-tertiary before:h-full before:w-[1px]"
                      : ""
                  }`}
                >
                  <MdRadioButtonChecked />
                </div>
                <div className="text-tertiary">
                  <h4 className="font-medium text-xl mb-1">{item.title}</h4>
                  <p className="font-normal text-lg mb-1 opacity-80">
                    {item.company},
                    <span className="text-stone-300"> {item.location} </span>
                  </p>
                  <p className="font-normal text-base mb-1 text-blue opacity-70">
                    {item.date}
                  </p>
                  <span className="font-normal text-base mb-1 opacity-80">
                    <ul className="list-disc pl-5">
                      {item.description.map((detail, i) => (
                        <li key={i} className="p-2">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Volunteer */}
        <div className="container xl:translate-x-4 mt-5 ">
          <div className="flex items-center gap-8 pb-5">
            <div className="bg-secondary p-2 rounded-lg">
              <MdVolunteerActivism className="w-6 h-6 text-tertiary" />
            </div>
            <div className="font-medium text-2xl text-tertiary">
              <h3>Volunteer</h3>
            </div>
          </div>
          <div>
            <ul className="list-disc pl-5">
              {volunteer.map((item, index) => (
                <li key={index} className="p-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Certificates */}
        <div className="container xl:translate-x-4 mt-5 ">
          <div className="flex items-center gap-8 pb-5">
            <div className="bg-secondary p-2 rounded-lg">
              <TbCertificate className="w-6 h-6 text-tertiary" />
            </div>
            <div className="font-medium text-2xl text-tertiary">
              <h3>Certificates</h3>
            </div>
          </div>
          <div>
            <ul className="list-disc pl-5">
              {certificates.map((item, index) => (
                <li key={index} className="p-2">
                  <span>{item.title}</span>
                  {""} -{" "}
                  <span className="text-gray-300 text-sm">{item.school}</span>,{" "}
                  <span className="text-gray-300 text-sm">{item.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Languages */}
        <div className="container xl:translate-x-4 mt-5 ">
          <div className="flex items-center gap-8 pb-5">
            <div className="bg-secondary p-2 rounded-lg">
              <IoLanguage className="w-6 h-6 text-tertiary" />
            </div>
            <div className="font-medium text-2xl text-tertiary">
              <h3>Languages</h3>
            </div>
          </div>
          <div>
            <ul className="list-disc pl-5">
              <li className="p-2">English - Proficient</li>
              <li className="p-2">Swahili - Native</li>
            </ul>
          </div>
        </div>
        {/* Skills */}
        <div className="container xl:translate-x-4 mt-5 flex flex-col">
          <div className="flex items-center gap-8 pb-5">
            <div className="bg-secondary p-2 rounded-lg">
              <IoBulb className="w-6 h-6 text-tertiary" />
            </div>
            <div className="font-medium text-2xl text-tertiary">
              <h3>Skills</h3>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-secondary bg-opacity-30 px-8 py-4 rounded-lg md:w-1/2">
              <ul>
                {skills.map((item, index) => (
                  <li key={index} className="space-y-4">
                    <div className="flex gap-4 space-y-2 items-baseline pt-6">
                      <h5>{item.title}</h5>
                      <data value={item.percentage}>{item.percentage}%</data>
                    </div>
                    <div className="bg-pink rounded-lg h-1 mt-2">
                      <div
                        className="bg-blue rounded-lg h-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumeContent;
