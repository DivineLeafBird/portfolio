import React from "react";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Roles from "../components/Roles";
import ProjectGrid from "../components/ProjectGrid";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Roles />
      <ProjectGrid />
      <Footer />
    </>
  );
};

export default Home;
