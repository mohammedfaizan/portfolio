import "../styles/main.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  const { title, description, image, techStack, githubLink, liveLink } =
    project;

  return (
    <div className="project-card card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <div className="project-divider"></div>
        <p className="project-description">{description}</p>

        <div className="project-tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className={`tech-icon ${tech}`}></span>
          ))}
        </div>

        <div className="project-links">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaGithub />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
