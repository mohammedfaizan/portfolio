// src/components/ProjectsSection.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Keep motion import
// No useRef needed for grid layout
import "../styles/main.css";
import ProjectCard from "./ProjectCard";
import PortfolioImage from "../assets/portfolio-project.png";
import QuestTrackProject from "../assets/daily_quest_tracker.png";
import TodoProject from "../assets/todo-app.png";

// Define animation variants for the container (grid)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of children
    },
  },
};

// Define animation variants for each card item
const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Start hidden, slightly down
  visible: {
    opacity: 1,
    y: 0, // Animate to visible, original position
    transition: {
      duration: 0.5,
      // Optional: Use spring if you prefer the bounce
      // type: "spring",
      // bounce: 0.4,
    },
  },
};

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "My portfolio website to showcase my skills, projects, and experience.",
      image: PortfolioImage,
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

  // No containerRef needed

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        {/* Use the grid container again */}
        {/* Wrap the grid with motion.div and apply container variants */}
        <motion.div
          className="projects-grid" // Use the grid class name
          variants={containerVariants}
          initial="hidden" // Start with the 'hidden' variant
          whileInView="visible" // Animate to 'visible' when in view
          viewport={{ once: true, amount: 0.1 }} // Trigger once, when 10% is visible
        >
          {projects.map((project) => (
            // Wrap each ProjectCard with motion.div and apply item variants
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
            // Removed the scroll prompt
          ))}
        </motion.div>

        {/* View All button */}
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
