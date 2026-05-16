const skills = [
  'React.js',
  'JavaScript',
  'HTML5',
  'CSS3',
  'REST APIs',
  'Responsive Design',
  'Git',
  'Performance Optimization',
]

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills