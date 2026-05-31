import React, { useState } from 'react'

const properties = [
  {
    id: 'prop-001',
    type: 'villa',
    title: 'Villa Contemporaine avec Spa',
    location: 'Palmeraie, Marrakech',
    price: 'Sur demande',
    surface: '1 200 m²',
    rooms: '6 ch.',
    badge: '✦ Exclusivité',
    badgeColor: 'rgba(201,168,76,0.20)',
    tags: ['Off-Market', 'Piscine', 'Spa'],
    image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=800&q=80'
  },
  {
    id: 'prop-002',
    type: 'riad',
    title: 'Riad Authentique Rénové XVIIIe',
    location: 'Médina historique, Marrakech',
    price: '1.8M€ – 2.2M€',
    surface: '580 m²',
    rooms: '4 suites',
    badge: '◆ Nouvelle entrée',
    badgeColor: 'rgba(34,197,94,0.15)',
    tags: ['Off-Market', 'Classé', 'Rénové'],
    image: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=800&q=80'
  },
  {
    id: 'prop-003',
    type: 'palais',
    title: "Palais d'Exception — 2 400m²",
    location: "Route de l'Ourika, Marrakech",
    price: 'Sur demande',
    surface: '2 400 m²',
    rooms: '10 suites',
    badge: '🔒 Confidentiel',
    badgeColor: 'rgba(239,68,68,0.15)',
    tags: ['UHNWI', 'Off-Market', 'Parc 1.2ha'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80'
  },
  {
    id: 'prop-004',
    type: 'appartement',
    title: 'Penthouse Prestige — Guéliz',
    location: 'Guéliz, Marrakech',
    price: '850 000€',
    surface: '320 m²',
    rooms: '4 ch.',
    badge: '✦ Exclusivité',
    badgeColor: 'rgba(201,168,76,0.20)',
    tags: ['Off-Market', 'Terrasse', 'Vue Atlas'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80'
  }
]

const filters = [
  { label: 'Tous', value: 'all' },
  { label: 'Villas', value: 'villa' },
  { label: 'Riads', value: 'riad' },
  { label: 'Palais', value: 'palais' },
  { label: 'Appartements', value: 'appartement' }
]

function Listings() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = properties.filter(p =>
    activeFilter === 'all' || p.type === activeFilter
  )

  return (
    <section id="listings" style={{
      padding: '100px 40px',
      background: '#0D0D0B'
    }}>

      {/* Header */}
      <div style={{
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto 48px'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          fontWeight: '500',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#C9A84C',
          marginBottom: '20px'
        }}>
          <span style={{
            width: '6px', height: '6px',
            background: '#C9A84C',
            borderRadius: '50%',
            display: 'inline-block'
          }}></span>
          Sélection Exclusive
        </div>

        <h2 style
