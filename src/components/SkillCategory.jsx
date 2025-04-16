import "../styles/main.css";
import SkillIcon from "./SkillIcon";

function SkillCategory({ title, skills }) {
  return (
    <div className="skill-category">
      <h3 className="category-title">{title}</h3>
      <div className="category-divider"></div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillIcon key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;
