const projects = [
  {
    title: 'E-Commerce Web App',
    description:
      'Built a scalable React-based e-commerce application with reusable components and REST API integration.',
  },
  {
    title: 'Task Management Dashboard',
    description:
      'Developed a dashboard with asynchronous data fetching and optimized rendering.',
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <button>View Project</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects