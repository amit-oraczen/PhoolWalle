export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <h3 className="footer-h3">Contact Our Office</h3>
          <p style={{ fontSize: '15px' }}>
            <i className="fa fa-map-marker-alt" style={{ color: 'var(--primary)', marginRight: '10px' }}></i>
            <strong>Phoolwalle HQ:</strong><br />
            Plot No. 123, Floral Hub,<br />
            Sailashree Vihar, Bhubaneswar - 751021
          </p>
          <p style={{ fontSize: '15px' }}>
            <i className="fa fa-phone" style={{ color: 'var(--primary)', marginRight: '10px' }}></i>
            +91 98XXX XXXXX
          </p>
          <p style={{ fontSize: '15px' }}>
            <i className="fa fa-envelope" style={{ color: 'var(--primary)', marginRight: '10px' }}></i>
            info@phoolwalle.com
          </p>
        </div>

        <div>
          <h3 className="footer-h3">Find Us Here</h3>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7482.382520405697!2d85.809349!3d20.333716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19090191dfac49%3A0x4dd391b2d08b4c33!2sGoddess%20Tarini%20Temple!5e0!3m2!1sen!2sin!4v1766328813137!5m2!1sen!2sin" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        &copy; 2025 Phoolwalle.com | Garden to God.
      </div>
    </footer>
  )
}
