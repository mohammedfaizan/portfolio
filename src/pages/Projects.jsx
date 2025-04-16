import "../styles/main.css";
import ProjectsSection from "../components/ProjectSection";

function ProjectsPage() {
  return (
    <main className="projects-page section">
      <div className="container">
        <h1 className="section-title">All Projects</h1>
        <ProjectsSection showAll={true} />
      </div>
    </main>
  );
}

export default ProjectsPage;
