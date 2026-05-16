function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="hero-subtitle">React.js Developer</p>

        <h1>
          Building scalable and high-performance web applications.
        </h1>

        <p className="hero-text">
          Software Engineer with 3 years of experience developing
          modern frontend applications using React.js,
          JavaScript, REST APIs, and responsive UI architecture.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a
            href="https://www.linkedin.com/in/shaik-pervez-ahmed"
            target="_blank"
            className="secondary-btn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero