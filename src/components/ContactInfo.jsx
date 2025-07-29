import React from "react";
import Kassim from "../assets/kassim.png";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import GetInTouch from "./GetInTouch";

const ContactInfo = () => {
  const initiateGoogleMeetCall = () => {
    window.open(
      `https://meet.google.com/calling/`,
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <>
      <section className="gradientBg text-tertiary px-5 py-20 max-w-screen-2xl mx-auto min-h-screen flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <div className="bg-primary bg-opacity-50 rounded-lg flex flex-col items-center  md:flex-row md:gap-4 p-5">
            <div className="w-1/2">
              <img src={Kassim} alt="" className="object-cover md:h-48" />
            </div>

            <div className="flex flex-col p-5">
              <h1 className="text-lg ml-14 font-semibold text-pink">
                Kassim Yahya Ali
              </h1>
              <p className="text-xs md:text-sm md:text-nowrap mt-1 text-pink">
                Software Engineer, IT Support Specialist, UX/UI Designer, Data
                Analyst
              </p>
              <p className="flex items-center gap-8 mt-6">
                <FaEnvelope className="w-6 h-6 text-tertiary" />
                <Link
                  to="mailto:kassimyahya93@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kassimyahya93@gmail.com{" "}
                </Link>
              </p>
              <p className="flex items-center gap-8 mt-6">
                <FaLinkedin className="w-6 h-6 text-tertiary" />
                <Link
                  to="https://www.linkedin.com/in/kassim-yahya-ali-b35274184/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kassim-yahya-ali{" "}
                </Link>
              </p>
              <p className="flex items-center gap-8 mt-6">
                <FaGithub className="w-6 h-6 text-tertiary" />
                <Link
                  to="https://github.com/DivineLeafBird"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DivineLeafBird{" "}
                </Link>
              </p>
              <button
                onClick={initiateGoogleMeetCall}
                className="px-4 py-2 rounded-3xl w-1/2 border-solid border-2 border-blue mt-6 outline-none hover:bg-secondary md:transition lg:duration-500 lg:ease-in-out lg:transform lg:hover:-translate-y-1 lg:hover:scale-110"
              >
                Let's talk
              </button>
            </div>
          </div>
          <div className="bg-primary bg-opacity-50 rounded-lg md:gap-4 p-5">
            <h4 className="text-lg text-center font-semibold text-pink pb-4">
              Location
            </h4>
            <figure>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63706.25763538672!2d39.78018131249438!3d-3.6689184962179633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183fe62b8fadac17%3A0x8c1a6e02a9960388!2sKiriba%2FWangwani!5e0!3m2!1sen!2ske!4v1753668882168!5m2!1sen!2ske"
                loading="lazy"
                rel="noopener noreferrer"
                className="w-full h-96 rounded-lg"
              ></iframe>
            </figure>
          </div>
          <div className="bg-primary bg-opacity-50 rounded-lg">
            <GetInTouch
              bgColor="bg-transparent"
              title="Leave A Message"
              titleTextStyle="text-lg text-center font-semibold text-pink pb-4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;

// Kiriba/Wangwani  https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63706.25763538672!2d39.78018131249438!3d-3.6689184962179633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183fe62b8fadac17%3A0x8c1a6e02a9960388!2sKiriba%2FWangwani!5e0!3m2!1sen!2ske!4v1753668882168!5m2!1sen!2ske

// Nairobi  https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3586908131!2d36.68257835708777!3d-1.3028602772359434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1753440189799!5m2!1sen!2ske
