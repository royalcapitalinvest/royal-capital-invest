import React from 'react'

function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `linear-gradient(
        135deg,
        rgba(10,10,10,0.95) 0%,
        rgba(10,10,10,0.75) 50%,
        rgba(10,10,10,0.90) 100%
      ), url('https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textAlign: 'center',
      padding: '0 20px'
    }}>

      {/* Badge */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        padding: '0 20px'
      }}>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid rgba(201,168,76,0.40)',
          background: 'rgba(201,168,76,0.08)',
          padding: '8px 20px',
          borderRadius: '100px',
          marginBottom: '32px'
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            background: '#C9A84C',
            borderRadius: '50%',
            display: 'inline-block'
          }}></span>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            fontWeight: '500',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#E8C97A'
          }}>
            Accès Off-Market — Sur Invitation
          </span>
        </div>

        {/* Titre */}
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(42px, 6vw, 72px)',
          fontWeight: '300',
          color: '#FFFFFF',
          lineHeight: '1.1',
          marginBottom: '24px'
        }}>
          L'Immobilier de Prestige<br />
          à Marrakech.<br />
          <em style={{ 
            color: '#C9A84C',
            fontStyle: 'italic' 
          }}>
            En Accès Privé.
          </em>
        </h1>

        {/* Sous-titre */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(15px, 1.8vw, 18px)',
          fontWeight: '300',
          color: 'rgba(255,255,255,0.70)',
          maxWidth: '560px',
          margin: '0 auto 40px',
          lineHeight: '1.7'
        }}>
          Nous connectons investisseurs qualifiés
          et propriétés d'exception — hors marché,
          négociées avant toute mise en vente publique.
        </p>

        {/* Boutons CTA */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a href="#qualification" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '16px 32px',
            background: '#C9A84C',
            color: '#0A0A0A',
            borderRadius: '4px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.08em',
            transition: 'all 0.3s'
          }}>
            Accéder au Portefeuille →
          </a>

          <a href="#contact" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '16px 32px',
            background: 'transparent',
            color: '#FFFFFF',
            border: '1px solid rgba(255,255,255,0.35)',
            borderRadius: '4px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            fontWeight: '500',
            letterSpacing: '0.08em'
          }}>
            Parler à un Conseiller
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.40)'
        }}>
          Découvrir
        </span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, #C9A84C, transparent)'
        }}></div>
      </div>

    </section>
  )
}

export default Hero
