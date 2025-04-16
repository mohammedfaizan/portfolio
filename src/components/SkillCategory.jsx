import "../styles/main.css";
import SkillIcon from "./SkillIcon";

function SkillCategory({ categoryData }) {
  return (
    <div className="skill-categories-grouped">
      {["Frontend", "Backend"].map((group) => (
        <div key={group} className="skill-category">
          <h3 className="category-title">{group}</h3>
          <div className="category-divider"></div>
          <div className="skills-grid">
            {categoryData[group]?.map((skill, index) => (
              <SkillIcon key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillCategory;
