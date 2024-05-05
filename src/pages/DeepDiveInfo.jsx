import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DeepDive from "../components/DeepDive";
import projectDetails from "../data/projectDetails";

const DeepDiveInfo = () => {
  const { projectId } = useParams();

  const project = projectDetails.find(
    (project) => project.id === parseInt(projectId)
  );
  return (
    <>
      <Header />
      {project ? <DeepDive project={project} /> : <p>Project not found.</p>}
      <Footer />
    </>
  );
};

export default DeepDiveInfo;
