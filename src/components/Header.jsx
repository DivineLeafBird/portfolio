import React from "react";
import Logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { link: "Projects", path: "/projects" },
    { link: "About", path: "/about" },
    { link: "Resume", path: "/resume" },
    { link: "Contact", path: "/contact" },
  ];
  const location = useLocation();
  return (
    <>
      <header>
        {/* Navbar */}
        <nav className="gradientBg px-5 max-w-screen-2xl mx-auto  fixed top-0 left-0 right-0">
          <div className="text-lg py-4 container mx-auto flex justify-between items-center font-medium">
            {/* Logo */}
            <div>
              <Link to="/">
                <img
                  src={Logo}
                  alt="logo"
                  className="inline-block items-center "
                />
              </Link>
            </div>
            {/* Nav Links */}
            <div>
              <ul className="md:flex space-x-12 hidden text-tertiary">
                {navItems.map(({ link, path }) => (
                  <Link
                    key={link}
                    to={path}
                    className={`block hover:text-blue-300 cursor-pointer ${
                      location.pathname === path ? "text-blue" : ""
                    }`}
                  >
                    {link}
                  </Link>
                ))}
              </ul>
            </div>
            {/*Toggle Mobile Menu */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none focus:text-gray-300"
              >
                {isMenuOpen ? (
                  <FaXmark className="w-6 h-6 text-tertiary" />
                ) : (
                  <FaBars className="w-6 h-6 text-tertiary" />
                )}
              </button>
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div
          className={`space-y-4 px-4 pt-24 pb-5 bg-primary text-tertiary text-xl ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={link}
              to={path}
              className={`block hover:text-blue-300 cursor-pointer ${
                location.pathname === path ? "text-blue" : ""
              }`}
              onClick={toggleMenu}
            >
              {link}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;
