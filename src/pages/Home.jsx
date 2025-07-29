import React from "react";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Roles from "../components/Roles";
import ProjectGrid from "../components/ProjectGrid";
import Footer from "../components/Footer";
import Achievements from "../components/Achievements";
import FeaturedProjects from "../components/FeaturedProjects";
import Badges from "../components/Badges";
import GetInTouch from "../components/GetInTouch";

const Home = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Roles />
      <FeaturedProjects />
      <Badges />
      <Achievements />
      <GetInTouch
        bgColor="gradientBg"
        title="Get In Touch"
        titleTextStyle="flex justify-center text-2xl text-tertiary font-semibold pb-8"
        width="w-full md:w-3/4"
      />
      <Footer />
    </>
  );
};

export default Home;
