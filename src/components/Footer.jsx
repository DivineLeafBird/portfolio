import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoIosArrowRoundUp } from "react-icons/io";

const Footer = () => {
  // const navItems = [
  //   { link: "Who am I", path: "/about" },
  //   { link: "Contact", path: "/contact" },
  //   { link: "Projects", path: "/projects" },
  //   { link: "Resume", path: "/resume" },
  // ];

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="gradientBg text-tertiary px-5 py-10 max-w-screen-2xl mx-auto ">
        <div className="container mx-auto px-4 ">
          <div className="text-center md:flex flex-wrap justify-between md:pr-6 lg:pr-12 items-center">
            <img
              src={Logo}
              alt="logo"
              className="inline-block items-center w-32 h-12"
            />

            {/* <nav>
              <ul className="block text-center space-y-2 md:space-y-0  md:flex md:space-x-20 lg:space-x-36 text-tertiary">
                {navItems.map(({ link, path }) => (
                  <Link
                    key={link}
                    to={path}
                    className={`block hover:text-secondary cursor-pointer ${
                      location.pathname === path ? "text-blue" : ""
                    }`}
                  >
                    {link}
                  </Link>
                ))}
              </ul>
            </nav> */}
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer hidden lg:flex items-center justify-center bg-pink text-primary rounded-full p-2 animate-bounce-y"
            >
              <IoIosArrowRoundUp className="w-8 h-8 inline " />
            </div>
          </div>
          <hr className="my-3" />
          <div className="text-center text-sm md:flex justify-between">
            <p>
              &copy; 2024 - {currentYear} . Kassim Yahya Ali . All Rights
              Reserved.
            </p>
            <p>Privacy Policy | Terms & Conditions</p>
            <div className="hidden lg:flex items-center justify-center lg:space-x-2">
              <FaFacebook className="text-sm" />
              <span>Facebook |</span>
              <FaXTwitter className="text-sm" />
              <span>Twitter |</span>
              <FaInstagram className="text-sm" />
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
