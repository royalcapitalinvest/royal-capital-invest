import React from 'react'

const steps = [
  {
    num: '01',
    title: 'Qualification\nde votre profil',
    desc: 'En 2 minutes, notre formulaire analyse votre profil investisseur. Budget, objectifs, horizon et préférences.',
    details: [
      'Formulaire de pré-qualification',
      'Analyse IA de votre profil',
      'Réponse sous 48h garantie'
    ],
    duration: '2 minutes'
  },
  {
    num: '02',
    title: 'Sélection\nsur mesure',
    desc: 'Notre équipe parcourt notre réseau off-market pour identifier les propriétés correspondant à vos critères.',
    details: [
      'Accès portefeuille confidentiel',
      'Vérification titre foncier',
      '3 à 5 biens présélectionnés'
    ],
    duration: '48 à 72 heures'
  },
  {
    num: '03',
    title: 'Visite &\nnégociation',
    desc: 'Visite privée organisée à Marrakech avec votre conseiller dédié. Négociation et due diligence complète.',
    details: [
      'Visite privée avec conseiller',
      'Négociation prix et conditions',
      'Due diligence juridique complète'
    ],
    duration: '1 week-end suffît'
  },
  {
    num: '04',
    title: 'Signature &\nremise des clés',
    desc: 'Coordination notariale, transfert de fonds via Office des Changes, signature et remise des clés.',
    details: [
      'Coordination notaire & Office des Changes',
      'Acte définitif & titre foncier',
      'Gestion locative optionnelle'
    ],
    duration: '6 à 12 semaines'
  }
]

function Process() {
  return (
    <section id="process" style={{
      padding: '100px 40px',
      background: '#111111'
    }}>

      {/* Header */}
      <div style={{
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto 80px'
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
          Notre méthode
        </div>

        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(36px, 4vw, 52px)',
          fontWeight: '300',
          color: '#FFFFFF',
          lineHeight: '1.15',
          marginBottom: '16px'
        }}>
          De la première contact<br />
          à{' '}
          <em style={{
            fontStyle: 'italic',
            color: '#C9A84C'
          }}>
            la remise des clés
          </em>
        </h2>

        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '15px',
          fontWeight: '300',
          color: 'rgba(255,255,255,0.70)',
          lineHeight: '1.7'
        }}>
          Un processus structuré, transparent et
          entièrement coordonné par notre équipe —
          où que vous soyez dans le monde.
        </p>
      </div>

      {/* Steps Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '24px',
        maxWidth: '1280px',
        margin: '0 auto 80px'
      }}>
        {steps.map((step, index) => (
          <div key={step.num} style={{
            background: index === 3
