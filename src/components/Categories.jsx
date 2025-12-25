export default function Categories() {
  const categories = [
    { id: 1, name: 'Birthday', image: 'https://images.unsplash.com/photo-1530103862676-fa8c91bbe178?w=300' },
    { id: 2, name: 'Anniversary', image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=300' },
    { id: 3, name: 'Romance', image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=300' },
    { id: 4, name: 'Congratulations', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=300' },
  ]

  return (
    <section id="categories">
      <h2 className="section-title">Shop by Occasion</h2>
      <div className="category-grid">
        {categories.map(cat => (
          <div key={cat.id} className="cat-item">
            <img src={cat.image} alt={cat.name} />
            <h4>{cat.name}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}
