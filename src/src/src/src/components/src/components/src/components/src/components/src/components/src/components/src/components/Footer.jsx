import React from 'react'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: '#080806',
      borderTop: '1px solid rgba(201,168,76,0.15)'
    }}>

      {/* CTA Band */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.04) 100%)',
        borderBottom: '1px solid rgba(201,168,76,0.12)',
        padding: '48px 40px'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '32px'
        }}>
          <div>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '28px',
              fontWeight: '300',
              color: '#FFFFFF',
              lineHeight: '1.3',
              marginBottom: '8px'
            }}>
              Prêt à investir dans l'immobilier<br />
              de prestige à Marrakech ?
            </h3>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.70)'
            }}>
              Rejoignez 340+ investisseurs qui nous
              ont confié leur projet.
            </p>
          </div>
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            <a href="#qualification" style={{
              padding: '16px 32px',
              background: '#C9A84C',
              color: '#0A0A0A',
              borderRadius: '4px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.06em'
            }}>
              Accéder au portefeuille →
            </a>
            <a href="#contact" style={{
              padding: '16px 32px',
              background: 'transparent',
              color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.35)',
              borderRadius: '4px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: '500'
            }}>
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </div>

      {/* Corps Footer */}
      <div style={{
        padding: '64px 40px',
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '48px'
      }}>

        {/* Col 1 — Marque */}
        <div>
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '20px',
            fontWeight: '300',
            color: '#C9A84C',
            letterSpacing: '0.08em',
            marginBottom: '16px'
          }}>
            Royal Capital Invest
          </div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.40)',
            lineHeight: '1.6',
            marginBottom: '24px'
          }}>
            Matchmaking immobilier de prestige<br />
            Off-Market · Marrakech
          </p>

          {/* Réseaux sociaux */}
          <div style={{
            display: 'flex',
            gap: '10px'
          }}>
            {[
              { label: 'IN', href: 'https://instagram.com/royalcapitalinvest' },
              { label: 'LI', href: 'https://linkedin.com/company/royal-capital-invest' },
              { label: 'WA', href: 'https://wa.me/212600000000' },
              { label: 'TK', href: 'https://tiktok.com/@royalcapitalinvest' }
            ].map(s => (
              <a key={s.label} href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  fontWeight: '600',
                  color: 'rgba(255,255,255,0.50)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background =
                    'rgba(201,168,76,0.12)'
                  e.currentTarget.style.color =
                    '#C9A84C'
                  e
