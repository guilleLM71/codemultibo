export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="about-inner">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" alt="MultiCode" />
        </div>
        <div className="about-content">
          <h2>CODEMULTIBO - AGENCIA CREATIVA</h2>
          <p>MultiCode es un estudio creativo especializado en la planificación, el diseño y el desarrollo de soluciones digitales a medida.</p>
          <p>Combinamos pasión y talento para crear experiencias web, apps móviles y estrategias SEO que conectan con tu audiencia. Ubicados en La Paz, Bolivia.</p>
          
          <div className="profile-card-container">
            <a href="https://guillelm71.is-a.dev/" target="_blank" rel="noopener noreferrer" className="profile-card">
              <div className="profile-photo">
                <img src="https://i.postimg.cc/qhKbqK0b/foto2.jpg" alt="Juan Guillermo Laura Mamani" />
              </div>
              <div className="profile-info">
                <h4>Juan Guillermo Laura Mamani</h4>
                <span>Ver Portafolio Profesional →</span>
              </div>
            </a>
            <a href="https://franzlarico.github.io/portfolio-clone/" target="_blank" rel="noopener noreferrer" className="profile-card">
              <div className="profile-photo">
                <img src="https://franzlarico.github.io/portfolio-clone/assets/image-1s9Bn1yS.png" alt="Franz Freddy Larico Luque" />
              </div>
              <div className="profile-info">
                <h4>Franz Freddy Larico Luque</h4>
                <span>Ver Portafolio Profesional →</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
