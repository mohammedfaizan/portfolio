import "../styles/main.css";
import MyPicture from "../assets/myPicture.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I am <span className="accent-text">Mohammed Faizan</span>
          </h1>
          <p className="hero-description">
            A full-stack developer with a strong focus on frontend technologies.
            I work with HTML, CSS, JavaScript, React, and Node.js, and enjoy
            bringing user interfaces to life with clean, responsive designs.
          </p>
          <p className="hero-description">
            On the backend, I’ve built and deployed robust APIs using Golang,
            Node.js, MongoDB, and Mongoose. I’m comfortable using tools like
            Git, GitHub, Postman, and deploying apps with Netlify and Render..
          </p>
          <div className="hero-cta">
            <a href="#projects" className="cta-button">
              Let's create something great together!
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar-container">
            <div className="avatar-placeholder">
              <img src={MyPicture} alt="mohammed faizan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
