export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #1e1b4b 50%, #0f0a1e 100%)',
      color: 'white'
    }}>
      {/* Header */}
      <header style={{
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 700 }}>
          <span style={{ color: '#f59e0b' }}>Sign Printing</span> USA
        </h1>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#products" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Products</a>
          <a href="#gallery" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Gallery</a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={{
        textAlign: 'center',
        padding: '5rem 2rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 700, lineHeight: 1.1 }}>
          Custom Signs &<br />
          <span style={{ color: '#f59e0b' }}>Large Format Printing</span>
        </h2>
        <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Professional signage for businesses, events, and trade shows.
          Indoor and outdoor options with fast nationwide shipping.
        </p>
        <a href="#products" style={{
          background: '#f59e0b',
          color: '#0f0a1e',
          padding: '1rem 2.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1.1rem'
        }}>
          Shop Signs
        </a>
      </section>

      {/* Products */}
      <section id="products" style={{
        padding: '4rem 2rem',
        background: 'rgba(0,0,0,0.3)'
      }}>
        <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>Our Products</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { name: 'Vinyl Banners', desc: 'Indoor/outdoor, hemmed edges, grommets included', price: 'From $2.50/sqft' },
            { name: 'Yard Signs', desc: 'Corrugated plastic, double-sided available', price: 'From $8.99' },
            { name: 'Foam Board Signs', desc: 'Lightweight, great for indoor displays', price: 'From $15.99' },
            { name: 'Acrylic Signs', desc: 'Premium look, perfect for offices', price: 'From $29.99' },
            { name: 'Retractable Banners', desc: 'Portable displays with carrying case', price: 'From $89.99' },
            { name: 'Trade Show Displays', desc: 'Pop-up booths and backdrops', price: 'From $199.99' },
          ].map((product, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#f59e0b' }}>{product.name}</h4>
              <p style={{ opacity: 0.7, margin: '0.5rem 0', lineHeight: 1.5 }}>{product.desc}</p>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '1rem' }}>{product.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          flexWrap: 'wrap'
        }}>
          {[
            { icon: '🎨', title: 'Full Color', desc: 'Vibrant UV-resistant inks' },
            { icon: '☀️', title: 'Weather Proof', desc: 'Built for outdoor use' },
            { icon: '📐', title: 'Custom Sizes', desc: 'Any size you need' },
            { icon: '🚚', title: 'Fast Shipping', desc: '3-5 day turnaround' },
          ].map((feature, i) => (
            <div key={i} style={{ maxWidth: '180px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{feature.icon}</div>
              <h4 style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>{feature.title}</h4>
              <p style={{ opacity: 0.6, margin: 0, fontSize: '0.85rem' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{
        padding: '4rem 2rem',
        background: 'rgba(0,0,0,0.3)',
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Get a Quote</h3>
        <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
          Need a custom sign? Contact us for a free quote.
        </p>
        <a href="mailto:sales@signprintingusa.com" style={{
          color: '#f59e0b',
          textDecoration: 'none',
          fontSize: '1.25rem',
          fontWeight: 600
        }}>
          sales@signprintingusa.com
        </a>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        opacity: 0.6
      }}>
        <p style={{ margin: 0 }}>&copy; 2025 Sign Printing USA. All rights reserved.</p>
      </footer>
    </main>
  )
}
