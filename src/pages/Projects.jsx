import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Listing from "../components/Listing";

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <Listing />
      <Footer />
    </>
  );
};

export default Projects;
