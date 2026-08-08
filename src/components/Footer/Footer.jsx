export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-grid">
        <div className="footer-logo">
          <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: 700, marginBottom: '20px' }}>CodeMultiBo</h2>
          <p>Agencia Creativa que ofrece servicios de diseño, desarrollo web, apps móviles y SEO.</p>
          <div className="footer-info">
            <p>La Paz, Bolivia</p>
            <p>Cel: 77291606 / 78889375</p>
            <p><a href="mailto:franzlarico19@gmail.com">franzlarico19@gmail.com</a></p>
            <p><a href="mailto:jguillermolaura@gmail.com">jguillermolaura@gmail.com</a></p>
            <p><a href="#hero">www.multicode.com</a></p>
          </div>
          <div className="social-links">
            <a href="https://instagram.com/multicode" target="_blank" rel="noopener noreferrer" className="social-icon">📷</a>
            <a href="https://facebook.com/multicode" target="_blank" rel="noopener noreferrer" className="social-icon">f</a>
            <a href="https://linkedin.com/company/multicode" target="_blank" rel="noopener noreferrer" className="social-icon">in</a>
          </div>
        </div>
        <div className="footer-links">
          <h6>Servicios</h6>
          <ul>
            <li><a href="#servicios">Diseño Gráfico</a></li>
            <li><a href="#servicios">Desarrollo Web</a></li>
            <li><a href="#servicios">Apps Móviles</a></li>
            <li><a href="#servicios">SEO</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h6>Contacto</h6>
          <ul>
            <li><a href="tel:77291606">77291606</a> / <a href="tel:78889375">78889375</a></li>
            <li><a href="mailto:franzlarico19@gmail.com">franzlarico19@gmail.com</a></li>
            <li><a href="mailto:jguillermolaura@gmail.com">jguillermolaura@gmail.com</a></li>
            <li><a href="#contacto">Solicitar presupuesto</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="#hero">© CodeMultiBo - Agencia Creativa Online</a>
        <span>•</span>
        <a href="#hero">Política de Privacidad</a>
      </div>
    </footer>
  )
}
