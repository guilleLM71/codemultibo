import { services } from '../../data/constants'

export default function Services() {
  return (
    <section className="services" id="servicios">
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
  )
}
