import React, { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener(
      'scroll', handleScroll
    )
  }, [])

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      background: scrolled 
        ? 'rgba(8,8,6,0.97)' 
        : 'transparent',
      backdropFilter: scrolled 
        ? 'blur(20px)' : 'none',
      borderBottom: scrolled 
        ? '1px solid rgba(201,168,76,0.15)' 
        : 'none',
      transition: 'all 0.4s ease',
      padding: '0 40px',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>

      {/* Logo */}
      <a href="/" style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '22px',
        fontWeight: '300',
        color: '#C9A84C',
        letterSpacing: '0.08em'
      }}>
        Royal Capital Invest
      </a>

      {/* Menu Desktop */}
      <nav style={{
        display: 'flex',
        gap: '32px',
        alignItems: 'center'
      }}>
        {[
          ['Portefeuille', '#listings'],
          ['Processus', '#process'],
          ['Témoignages', '#testimonials'],
          ['Contact', '#contact']
        ].map(([label, href]) => (
          <a key={label} href={href} style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.75)',
            letterSpacing: '0.04em',
            transition: 'color 0.2s'
          }}
          onMouseEnter={e => 
            e.target.style.color = '#C9A84C'}
          onMouseLeave={e => 
            e.target.style.color = 
            'rgba(255,255,255,0.75)'}
          >
            {label}
          </a>
        ))}

        {/* CTA Button */}
        <a href="#qualification" style={{
          padding: '10px 22px',
          background: '#C9A84C',
          color: '#0A0A0A',
          borderRadius: '4px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '0.06em',
          transition: 'all 0.3s'
        }}
        onMouseEnter={e => 
          e.target.style.background = '#E8C97A'}
        onMouseLeave={e => 
          e.target.style.background = '#C9A84C'}
        >
          Accès Privé →
        </a>
      </nav>

    </header>
  )
}

export default Navbar
