import React from "react";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Roles from "../components/Roles";
import ProjectGrid from "../components/ProjectGrid";

const Home = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Roles />
      <ProjectGrid />
    </>
  );
};

export default Home;
