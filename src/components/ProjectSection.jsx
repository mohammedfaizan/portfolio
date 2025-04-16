import { Link } from "react-router-dom";
import "../styles/main.css";
import ProjectCard from "./ProjectCard";
import PortfolioImage from "../assets/portfolio-project.png";
import QuestTrackProject from "../assets/daily_quest_tracker.png";
import TodoProject from "../assets/todo-app.png";

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "My portfolio website to showcase my skills, projects, and experience.",
      image: PortfolioImage, // You'll need to add these images
      techStack: ["react", "tailwind", "vite", "figma"],
      githubLink: "https://github.com/mohammedfaizan/portfolio",
      liveLink: "#",
    },
    {
      id: 2,
      title: "Daily Quest Tracker",
      description:
        "A Full Stack Project to visualize daily habits using Heatmaps, users can login and add new Daily Quests and a heatmap will be generated for the upcoming year",
      image: QuestTrackProject,
      techStack: ["nodejs", "mongodb", "express", "react"],
      githubLink: "https://github.com/mohammedfaizan/solo-leveling-fronted",
      liveLink: "https://sololevelr.netlify.app/",
    },
    {
      id: 3,
      title: "Feature Rich Todo App",
      description:
        "A Feature Rich full Stack Todo App to Add, Edit, View, Set Deadlines",
      image: TodoProject,
      techStack: ["javascript", "react", "mongoDB", "nodejs"],
      githubLink: "https://github.com/mohammedfaizan/wsa-todo-level1-frontend",
      liveLink: "https://todo-app-level1.netlify.app/",
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
