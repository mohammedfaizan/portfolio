import "../styles/main.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I am <span className="accent-text">Your Name</span>
          </h1>
          <p className="hero-description">
            a senior-year Computer Science student specializing in full-stack
            development with a strong focus on frontend technologies. My
            expertise includes working with React, Node.js, and modern web
            frameworks.
          </p>
          <p className="hero-description">
            I love designing, developing, and deploying apps from start to
            finish. When I'm not coding, you'll find me [your
            hobbies/interests].
          </p>
          <div className="hero-cta">
            <a href="#projects" className="cta-button">
              Let's create something great together!
            </a>
          </div>
        </div>
        <div className="hero-image">
          {/* You can add your avatar/logo here */}
          <div className="avatar-container">
            {/* Replace with your own avatar or icon */}
            <div className="avatar-placeholder"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
