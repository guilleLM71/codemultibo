export default function SideMenu({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`side-menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      ></div>

      <aside className={`side-menu ${isOpen ? 'active' : ''}`} id="contacto">
        <button className="side-menu-close" onClick={onClose} aria-label="Cerrar menú">×</button>
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
          <h5>77291606 / 78889375</h5>
          <h6>franzlarico19@gmail.com</h6>
          <h6>jguillermolaura@gmail.com</h6>
          <p>La Paz, Bolivia</p>
        </div>
      </aside>
    </>
  )
}
