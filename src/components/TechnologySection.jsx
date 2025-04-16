import "../styles/main.css";
import SkillCategory from "./SkillCategory";

function TechnologySection() {
  const technologies = {
    Languages: [
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "Python", icon: "python" },
      // Add more as needed
    ],
    Frontend: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind", icon: "tailwind" },
      // Add more as needed
    ],
    Backend: [
      { name: ".NET", icon: "dotnet" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      // Add more as needed
    ],
    Databases: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      // Add more as needed
    ],
    Tools: [
      { name: "AWS", icon: "aws" },
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      // Add more as needed
    ],
  };

  return (
    <section className="section tech-section" id="technologies">
      <div className="container">
        <h2 className="section-title">Technology</h2>
        <p className="tech-subtitle">Here's what I typically work with.</p>

        <div className="tech-categories">
          {Object.entries(technologies).map(([category, skills]) => (
            <SkillCategory key={category} title={category} skills={skills} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologySection;
