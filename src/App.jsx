import { useState, useEffect } from 'react'
import './App.css'

const slides = [
  {
    bg: 'https://introworks.es/wp-content/uploads/2014/06/introworks_fondo_17.png',
    icon: 'https://introworks.es/wp-content/uploads/2014/06/introworks_fondo_071.png',
    title: 'Agencia Creativa Online',
    subtitle: 'Pasión y Talento desde 2002',
    link: '/',
    btnText: '¿Jugamos?'
  },
  {
    bg: 'https://introworks.es/wp-content/uploads/2014/06/introworks_fondo_15.png',
    icon: 'https://introworks.es/wp-content/uploads/2014/06/introworks_icono_02.png',
    title: 'Diseño y Creatividad Gráfica',
    subtitle: 'Creatividad gráfica. Ilustración. Branding. Diseño Editorial.',
    link: '/',
    btnText: 'Conoce nuestros trabajos',
    dark: true
  },
  {
    bg: 'https://introworks.es/wp-content/uploads/2014/06/introworks_fondo_09.png',
    icon: 'https://introworks.es/wp-content/uploads/2014/06/introworks_fondo_081.png',
    title: 'Diseño y Desarrollo Web',
    subtitle: 'Web a medida. Comercio electrónico. Campañas online.',
    link: '/',
    btnText: 'Programación web'
  },
  {
    bg: 'https://introworks.es/wp-content/uploads/2014/06/introworks_fondo_14.png',
    icon: 'https://introworks.es/wp-content/uploads/2014/06/introworks_icono_03.png',
    title: 'Marketing Online',
    subtitle: 'Planes de Marketing Online. SEO. SEM. SMM.',
    link: '/',
    btnText: 'Conoce más'
  },
  {
    bg: 'https://introworks.es/wp-content/uploads/2014/06/introworks_fondo_13.png',
    icon: 'https://introworks.es/wp-content/uploads/2014/06/introworks_icono_05.png',
    title: 'Desarrollo de APPs',
    subtitle: 'Diseño, funcionalidad y desarrollo de apps móviles.',
    link: '/',
    btnText: 'Desarrollo de APP'
  },
  {
    bg: 'https://introworks.es/wp-content/uploads/2014/06/introworks_fondo_16.png',
    icon: 'https://introworks.es/wp-content/uploads/2014/06/introworks_icono_06.png',
    title: 'Producción y Postproducción de Vídeo',
    subtitle: 'Edición y postproducción digital de vídeo.',
    link: '/',
    btnText: 'Ver más'
  }
]

const services = [
  {
    icon: '🎨',
    title: 'Diseño Gráfico',
    description: 'Creatividad gráfica, ilustración, branding, diseño editorial y desarrollo de campañas gráficas.'
  },
  {
    icon: '💻',
    title: 'Desarrollo Web',
    description: 'Webs a medida, comercio electrónico, programación y animaciones interactivas.'
  },
  {
    icon: '📱',
    title: 'Apps Móviles',
    description: 'Diseño y desarrollo de aplicaciones para iOS y Android.'
  },
  {
    icon: '📈',
    title: 'Marketing Online',
    description: 'SEO, SEM, redes sociales y estrategias digitales.'
  },
  {
    icon: '🎬',
    title: 'Producción de Vídeo',
    description: 'Edición, postproducción y producción audiovisual.'
  }
]

const recentPosts = [
  { title: 'El ábside abducido', date: 'julio 22, 2023', link: '/' },
  { title: 'Fundación Pablo Palazuelo: nueva web', date: 'mayo 21, 2019', link: '/' },
  { title: 'Fundación Oxiria: Rediseño web', date: 'mayo 16, 2019', link: '/' },
  { title: 'Campaña del Mes del Jugón Xbox', date: 'abril 30, 2019', link: '/' }
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [sideMenuOpen, setSideMenuOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <img src="https://introworks.es/wp-content/uploads/2014/03/Logotipo_Intro-Works2.png" alt="Intro Works" />
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <a href="/">Nosotros</a>
            <a href="/">Diseño</a>
            <a href="/">Web</a>
            <a href="/">Marketing</a>
            <a href="/">Blog</a>
            <a href="/" className="contact-btn">Contacto</a>
          </nav>
        </div>
      </header>

      <button className="side-menu-toggle" onClick={() => setSideMenuOpen(true)}>☰</button>

      <div className={`side-menu-overlay ${sideMenuOpen ? 'active' : ''}`} onClick={() => setSideMenuOpen(false)}></div>
      <aside className={`side-menu ${sideMenuOpen ? 'active' : ''}`}>
        <button className="side-menu-close" onClick={() => setSideMenuOpen(false)}>×</button>
        <h3>CONTACTA CON NOSOTROS</h3>
        <p>Si necesitas resolver alguna consulta, pedir un presupuesto o más información sobre nuestros servicios, ponte en contacto.</p>
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Nombre *" required />
          <input type="email" placeholder="Email *" required />
          <textarea placeholder="Mensaje"></textarea>
          <label style={{color: '#ccc', fontSize: '12px', display: 'block', marginBottom: '15px'}}>
            <input type="checkbox" style={{marginRight: '8px'}} />
            Acepto la política de privacidad
          </label>
          <button type="submit">Enviar</button>
        </form>

        <div className="contact-info">
          <h5>91 223 70 86</h5>
          <h6>contacta@introworks.es</h6>
          <p>C/ Luis I, 11 2ºB<br/>28031 MADRID</p>
        </div>
      </aside>

      <section className="hero-slider">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <div className="slide-bg" style={{backgroundImage: `url(${slide.bg})`}}></div>
            <div className="slide-content">
              <img src={slide.icon} alt="" />
              <h2 style={{color: slide.dark ? '#242424' : '#fff'}}><span>{slide.title}</span></h2>
              <p style={{color: slide.dark ? '#242424' : '#fff'}}>{slide.subtitle}</p>
              <a href={slide.link} className="slide-btn">{slide.btnText} →</a>
            </div>
          </div>
        ))}
        
        <button className="slider-arrow prev" onClick={prevSlide}>❮</button>
        <button className="slider-arrow next" onClick={nextSlide}>❯</button>
        
        <div className="slider-nav">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </section>

      <section className="services">
        <h2>NUESTROS SERVICIOS</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about">
        <div className="about-inner">
          <div className="about-image">
            <img src="https://introworks.es/wp-content/uploads/2014/06/introworks_fondo_17.png" alt="Intro Works" />
          </div>
          <div className="about-content">
            <h2>AGENCIA CREATIVA DESDE 2002</h2>
            <p>Intro Works es un estudio creativo especializado en la planificación, el diseño, la producción y la medición de campañas publicitarias online y offline.</p>
            <p>Con más de 20 años de experiencia, combinamos pasión y talento para crear soluciones creativas que conectan con tu audiencia.</p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-grid">
          <div className="feature-card">
            <h3>Planificación</h3>
          </div>
          <div className="feature-card">
            <h3>Diseño</h3>
          </div>
          <div className="feature-card">
            <h3>Producción</h3>
          </div>
          <div className="feature-card">
            <h3>Medición</h3>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-logo">
            <img src="https://introworks.es/wp-content/uploads/2014/08/Logotipo_Intro-Works2.png" alt="Logo" />
            <p>Agencia Creativa que ofrece servicios de publicidad y marketing online desde 2002.</p>
            <div className="footer-info">
              <p>C/ Luis I, 11 2ºB 28031 MADRID</p>
              <p>Tel: 91 223 70 86</p>
              <p><a href="mailto:contacta@introworks.es">contacta@introworks.es</a></p>
              <p><a href="/">www.introworks.es</a></p>
            </div>
            <div className="social-links">
              <a href="https://instagram.com/introworks" target="_blank" rel="noopener noreferrer" className="social-icon">📷</a>
              <a href="https://facebook.com/introworksagencia" target="_blank" rel="noopener noreferrer" className="social-icon">f</a>
              <a href="https://linkedin.com/company/intro-works" target="_blank" rel="noopener noreferrer" className="social-icon">in</a>
              <a href="https://twitter.com/Intro_Works" target="_blank" rel="noopener noreferrer" className="social-icon">𝕏</a>
            </div>
          </div>
          <div className="footer-links">
            <h6>Servicios</h6>
            <ul>
              <li><a href="/">Diseño Gráfico</a></li>
              <li><a href="/">Desarrollo Web</a></li>
              <li><a href="/">Marketing Online</a></li>
              <li><a href="/">Producción de Vídeo</a></li>
              <li><a href="/">Apps Móviles</a></li>
            </ul>
          </div>
          <div className="footer-posts">
            <h6>Últimas Entradas</h6>
            <ul>
              {recentPosts.map((post, index) => (
                <li key={index}>
                  <a href={post.link}>{post.title}</a>
                  <span className="post-date">{post.date}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <h6>Contacto</h6>
            <ul>
              <li><a href="tel:912237086">91 223 70 86</a></li>
              <li><a href="mailto:contacta@introworks.es">contacta@introworks.es</a></li>
              <li><a href="/">Solicitar presupuesto</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <a href="/">© INTRO WORKS Agencia Creativa Online</a>
          <span>•</span>
          <a href="/">Política de Privacidad</a>
        </div>
      </footer>
    </>
  )
}

export default App