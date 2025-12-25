export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Luxury Red Rose Bouquet',
      price: '₹799',
      image: 'https://images.unsplash.com/photo-1561181286-d397369328d3?w=500',
      order: 'I want to order Luxury Red Roses'
    },
    {
      id: 2,
      name: 'Exotic Lily & Rose Mix',
      price: '₹1,299',
      image: 'https://images.unsplash.com/photo-1525310238806-3733c36c91a0?w=500',
      order: 'I want to order Exotic Lily Mix'
    }
  ]

  return (
    <section id="best-sellers">
      <h2 className="section-title">Best Sellers</h2>
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="p-info">
              <h3>{product.name}</h3>
              <div className="p-price">{product.price}</div>
              <a 
                href={`https://wa.me/7992650041?text=${encodeURIComponent(product.order)}`}
                className="btn-buy"
              >
                <i className="fab fa-whatsapp"></i> Order on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
