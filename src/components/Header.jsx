export default function Header() {
  return (
    <>
      <div className="top-bar">✨ Same Day Fresh Flower Delivery - Order Now!</div>
      <header>
        <div className="nav-container">
          <a href="#" className="logo">
            <img src="Logo.PNG" alt="Phoolwalle Logo" onError={(e) => { e.target.style.display = 'none'; }} />
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#d4145a' }}>PHOOLWALLE</span>
          </a>
          <div className="nav-links">
            <a href="#categories">Occasions</a>
            <a href="#best-sellers">Best Sellers</a>
            <a href="https://wa.me/7992650041">Support</a>
          </div>
          <div className="icons">
            <i className="fa fa-search"></i>
            <i className="fa fa-shopping-bag"></i>
          </div>
        </div>
      </header>
    </>
  )
}
