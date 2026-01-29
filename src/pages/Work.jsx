import './Work.css'

function Work() {
  return (
    <div className="work-page">
      <section className="work-hero section">
        <div className="container">
          <h1 className="section-title">My Work</h1>
          <p className="work-intro">
            I work with creative studios and teams to bring digital projects to life. 
            Here are some of the production studios I collaborate with.
          </p>
        </div>
      </section>

      <section className="work-content section">
        <div className="container">
          <div className="work-studios">
            <div className="studio-card">
              <div className="studio-header">
                <h2>Nūriya Studio</h2>
                <span className="studio-badge">Production Studio</span>
              </div>
              <p className="studio-description">
                A creative production studio focused on bringing innovative digital experiences to life.
              </p>
              <div className="studio-link">
                <a 
                  href="https://nuriya-studio-production.up.railway.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit Nūriya Studio
                  <span className="link-icon">↗</span>
                </a>
              </div>
            </div>

            <div className="studio-card">
              <div className="studio-header">
                <h2>Āthariq</h2>
                <span className="studio-badge">Games Studio</span>
              </div>
              <p className="studio-description">
                A games studio creating immersive gaming experiences and interactive entertainment.
              </p>
              <div className="studio-link">
                <a 
                  href="https://athariq-production.up.railway.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit Āthariq
                  <span className="link-icon">↗</span>
                </a>
              </div>
            </div>

            <div className="studio-card">
              <div className="studio-header">
                <h2>KhayrCape Experiences</h2>
                <span className="studio-badge">Tourism Website</span>
              </div>
              <p className="studio-description">
                A tourism website showcasing experiences and destinations.
              </p>
              <div className="studio-link">
                <a 
                  href="https://khayrcape-experiences.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit KhayrCape Experiences
                  <span className="link-icon">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Work

