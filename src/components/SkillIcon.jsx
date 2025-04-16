import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGoland,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiPostman,
  SiMongodb,
  SiExpress,
  SiNetlify,
  SiRender,
  SiDocker,
  SiApollographql,
  SiTailwindcss,
} from "react-icons/si";
import "../styles/main.css";

function SkillIcon({ name, icon }) {
  const getIconComponent = (iconName) => {
    const iconMap = {
      html: <SiHtml5 className="tech-icon-svg html" />,
      css: <SiCss3 className="tech-icon-svg css" />,
      js: <SiJavascript className="tech-icon-svg js" />,

      react: <SiReact className="tech-icon-svg react" />,
      nodejs: <SiNodedotjs className="tech-icon-svg nodejs" />,
      golang: <SiGoland className="tech-icon-svg golang" />,
      git: <SiGit className="tech-icon-svg git" />,
      github: <SiGithub className="tech-icon-svg github" />,
      postman: <SiPostman className="tech-icon-svg postman" />,
      mongodb: <SiMongodb className="tech-icon-svg mongodb" />,
      express: <SiExpress className="tech-icon-svg express" />,
      netlify: <SiNetlify className="tech-icon-svg netlify" />,
      render: <SiRender className="tech-icon-svg render" />,
      docker: <SiDocker className="tech-icon-svg docker" />,
      api: <SiApollographql className="tech-icon-svg api" />,
      tailwind: <SiTailwindcss className="tech-icon-svg tailwind" />,
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
