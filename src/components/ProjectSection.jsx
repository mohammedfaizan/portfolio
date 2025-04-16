import { Link } from "react-router-dom";
import "../styles/main.css";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "My portfolio website to showcase my skills, projects, and experience.",
      image: "/project-thumbnail-1.jpg", // You'll need to add these images
      techStack: ["react", "tailwind", "vite", "figma"],
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "#",
    },
    {
      id: 2,
      title: "Note Management System",
      description: "A system to automate and digitize how notes are managed.",
      image: "/project-thumbnail-2.jpg",
      techStack: ["nodejs", "mongodb", "express", "react"],
      githubLink: "https://github.com/yourusername/note-system",
      liveLink: "#",
    },
    {
      id: 3,
      title: "Project Manager",
      description:
        "An application to manage projects, making it easier to edit and track progress.",
      image: "/project-thumbnail-3.jpg",
      techStack: ["typescript", "react", "postgresql", "nodejs"],
      githubLink: "https://github.com/yourusername/project-manager",
      liveLink: "#",
    },
    // Add more projects as needed
  ];

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="view-all-container">
          <Link to="/projects" className="view-all-btn">
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
