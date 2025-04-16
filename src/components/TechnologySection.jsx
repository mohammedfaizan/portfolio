import "../styles/main.css";
import SkillCategory from "./SkillCategory";

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
  };

  return (
    <section className="section tech-section" id="technologies">
      <div className="container">
        <h2 className="section-title">Technology</h2>
        <p className="tech-subtitle">Here's what I typically work with.</p>
        <SkillCategory categoryData={categoryData} />
      </div>
    </section>
  );
}

export default TechnologySection;
