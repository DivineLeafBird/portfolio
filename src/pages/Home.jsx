import React from "react";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Roles from "../components/Roles";
import ProjectGrid from "../components/ProjectGrid";
import Footer from "../components/Footer";
import Achievements from "../components/Achievements";

const Home = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Roles />
      <Achievements />
      <ProjectGrid />
      <Footer />
    </>
  );
};

export default Home;
