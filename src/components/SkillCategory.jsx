// src/components/SkillCategory.jsx
import { motion } from "framer-motion";
import "../styles/main.css";
import SkillIcon from "./SkillIcon";

// Variants for the category container (simple fade-in, inherits stagger from parent)
const categoryContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

// Variants for the grid container to stagger the icons within it
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the icons
    },
  },
};

function SkillCategory({ categoryData }) {
  const categoryNames = Object.keys(categoryData); // Make it dynamic

  return (
    <div className="skill-categories-grouped">
      {categoryNames.map((group) => (
        // This motion.div fades in the whole category card (staggered by TechnologySection)
        <motion.div
          key={group}
          className="skill-category"
          variants={categoryContainerVariants}
          // Inherits initial="hidden" and whileInView="visible" from parent in TechnologySection
        >
          <h3 className="category-title">{group}</h3>
          <div className="category-divider"></div>

          {/* This motion.div staggers the SkillIcon components inside */}
          <motion.div
            className="skills-grid"
            variants={gridContainerVariants}
            // It also inherits hidden/visible state, triggering its own stagger
          >
            {categoryData[group]?.map((skill) => (
              // SkillIcon component now handles its own flip animation
              <SkillIcon
                key={skill.name} // Use unique name as key
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default SkillCategory;
