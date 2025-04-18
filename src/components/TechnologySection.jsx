// src/components/TechnologySection.jsx
import { motion } from "framer-motion"; // Import motion
import "../styles/main.css";
import SkillCategory from "./SkillCategory";

// Define animation variants for the container to stagger children
const techContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Adjust stagger timing as needed
    },
  },
};

function TechnologySection() {
  const categoryData = {
    Frontend: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "js" },
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
    Backend: [
      { name: "Golang", icon: "golang" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "Docker", icon: "docker" },
      { name: "Netlify", icon: "netlify" },
      { name: "Render", icon: "render" },
      { name: "REST APIs", icon: "api" },
    ],
    // Add more categories here if needed
  };

  return (
    <section className="section tech-section" id="technologies">
      <div className="container">
        {/* Optional: Animate title/subtitle */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          My Toolkit {/* Using a suggested name */}
        </motion.h2>
        <motion.p
          className="tech-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Here's what I typically work with.
        </motion.p>

        {/* Wrap SkillCategory component to trigger stagger */}
        <motion.div
          variants={techContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% is visible
        >
          <SkillCategory categoryData={categoryData} />
        </motion.div>
      </div>
    </section>
  );
}

export default TechnologySection;
