import Link from 'next/link';

const highlights = [
  {
    title: 'Calidez',
    description: 'Un diseño que transmite cercanía con tonos suaves y animaciones sutiles.'
  },
  {
    title: 'Conexión',
    description: 'Pensado para compartir un saludo auténtico y memorable en segundos.'
  },
  {
    title: 'Presencia',
    description: 'Optimizado para verse increíble en cualquier dispositivo y navegador.'
  }
];

export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: '900px',
        width: '100%',
        background: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(16px)',
        borderRadius: '32px',
        padding: '3.5rem',
        boxShadow: '0 30px 80px rgba(14, 165, 233, 0.15), inset 0 0 0 1px rgba(148, 163, 184, 0.1)',
        border: '1px solid rgba(148, 163, 184, 0.18)'
      }}
    >
      <section style={{ display: 'grid', gap: '2.5rem' }}>
        <header style={{ display: 'grid', gap: '1.5rem' }}>
          <span
            style={{
              alignSelf: 'start',
              padding: '0.35rem 0.85rem',
              borderRadius: '999px',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            Hola Mundo
          </span>
          <h1
            style={{
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              lineHeight: 1.05,
              fontWeight: 700
            }}
          >
            ¡Hola! <span style={{ color: '#38bdf8' }}>Bienvenido</span> a una experiencia que abraza el
            idioma y la emoción.
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5f5', maxWidth: '60ch', lineHeight: 1.6 }}>
            Este rincón digital es un saludo extendido con estilo, pensado para inspirar conexiones
            auténticas. Disfruta de la suavidad visual, la tipografía premium y un mensaje que se siente
            tan cercano como una conversación cara a cara.
          </p>
          <nav style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href="#explorar"
              style={{
                padding: '0.95rem 1.6rem',
                background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
                borderRadius: '999px',
                fontWeight: 600,
                color: '#0f172a',
                boxShadow: '0 10px 25px rgba(79, 70, 229, 0.35)'
              }}
            >
              Explorar
            </Link>
            <Link
              href="mailto:hola@example.com"
              style={{
                padding: '0.95rem 1.6rem',
                borderRadius: '999px',
                border: '1px solid rgba(148, 163, 184, 0.35)',
                color: '#e2e8f0'
              }}
            >
              Saludar de vuelta
            </Link>
          </nav>
        </header>

        <section
          id="explorar"
          style={{
            display: 'grid',
            gap: '1.5rem',
            padding: '2.5rem',
            borderRadius: '24px',
            background:
              'linear-gradient(135deg, rgba(14, 165, 233, 0.18), rgba(99, 102, 241, 0.15))',
            border: '1px solid rgba(148, 163, 184, 0.25)'
          }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 600 }}>¿Qué hace único a este Hola?</h2>
          <div
            style={{
              display: 'grid',
              gap: '1.25rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))'
            }}
          >
            {highlights.map((item) => (
              <article
                key={item.title}
                style={{
                  padding: '1.5rem',
                  borderRadius: '20px',
                  background: 'rgba(15, 23, 42, 0.65)',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  display: 'grid',
                  gap: '0.75rem'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{item.title}</h3>
                <p style={{ color: '#cbd5f5', lineHeight: 1.55 }}>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <footer
          style={{
            textAlign: 'center',
            fontSize: '0.95rem',
            color: 'rgba(226, 232, 240, 0.8)'
          }}
        >
          Creado con cariño para quienes creen en el poder de un saludo sincero.
        </footer>
      </section>
    </main>
  );
}
