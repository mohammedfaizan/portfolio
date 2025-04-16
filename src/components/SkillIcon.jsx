import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDotnet,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiDocker,
} from "react-icons/si";
import "../styles/main.css";

function SkillIcon({ name, icon }) {
  // This function maps icon strings to React Icons components
  const getIconComponent = (iconName) => {
    const iconMap = {
      js: <SiJavascript className="tech-icon-svg js" />,
      ts: <SiTypescript className="tech-icon-svg ts" />,
      python: <SiPython className="tech-icon-svg python" />,
      react: <SiReact className="tech-icon-svg react" />,
      nextjs: <SiNextdotjs className="tech-icon-svg nextjs" />,
      tailwind: <SiTailwindcss className="tech-icon-svg tailwind" />,
      dotnet: <SiDotnet className="tech-icon-svg dotnet" />,
      nodejs: <SiNodedotjs className="tech-icon-svg nodejs" />,
      express: <SiExpress className="tech-icon-svg express" />,
      mongodb: <SiMongodb className="tech-icon-svg mongodb" />,
      postgresql: <SiPostgresql className="tech-icon-svg postgresql" />,
      mysql: <SiMysql className="tech-icon-svg mysql" />,
      git: <SiGit className="tech-icon-svg git" />,
      docker: <SiDocker className="tech-icon-svg docker" />,
      // Add more icons as needed
    };

    return iconMap[iconName] || <div className="placeholder-icon"></div>;
  };

  return (
    <div className="skill-icon">
      <div className="icon-container">{getIconComponent(icon)}</div>
      <span className="icon-name">{name}</span>
    </div>
  );
}

export default SkillIcon;
