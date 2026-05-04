import { useState, useEffect } from 'react'
import { slides } from '../../data/constants'

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="hero-slider" id="hero">
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
          <div className="slide-bg" style={{backgroundImage: `url(${slide.bg})`}}></div>
          <div className="slide-content">
            {slide.icon && <img src={slide.icon} alt="" />}
            <h2 style={{color: slide.dark ? '#242424' : '#fff'}}><span>{slide.title}</span></h2>
            <p style={{color: slide.dark ? '#242424' : '#fff'}}>{slide.subtitle}</p>
            <a href={slide.link} className="slide-btn">{slide.btnText} →</a>
          </div>
        </div>
      ))}
      
      <button className="slider-arrow prev" onClick={prevSlide} aria-label="Slide anterior">❮</button>
      <button className="slider-arrow next" onClick={nextSlide} aria-label="Slide siguiente">❯</button>
      
      <div className="slider-nav">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  )
}
