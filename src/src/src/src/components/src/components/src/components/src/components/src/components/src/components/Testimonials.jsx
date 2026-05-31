import React, { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    text: "J'avais cherché seul pendant trois ans sur les plateformes habituelles. En six semaines avec Royal Capital Invest, j'ai eu accès à quatre villas off-market dans la Palmeraie. J'ai signé le compromis lors de mon premier week-end à Marrakech.",
    name: 'K.B.',
    role: 'Ingénieur · Lyon, France',
    deal: 'Villa Palmeraie',
    amount: '780 000€',
    flag: '🇫🇷',
    persona: 'MRE France'
  },
  {
    id: 2,
    text: "Sophie et moi avions visité Marrakech plusieurs fois comme touristes. L'équipe a géré l'intégralité du processus depuis la Belgique. Le riad est aujourd'hui géré à distance. Rendement de première année : 6.8%.",
    name: 'M. & S. V.',
    role: 'Dirigeants · Bruxelles, Belgique',
    deal: 'Riad Médina',
    amount: '1 420 000€',
    flag: '🇧🇪',
    persona: 'Acheteur Européen'
  },
  {
    id: 3,
    text: "La question de l'Office des Changes me bloquait depuis des années. L'équipe a géré la totalité de la procédure depuis le Canada. Tout est documenté, conforme, sans surprise.",
    name: 'F.A.',
    role: 'Médecin spécialiste · Montréal, Canada',
    deal: 'Villa Guéliz',
    amount: '920 000€',
    flag: '🇨🇦',
    persona: 'MRE Canada'
  },
  {
    id: 4,
    text: "Nous gérons un portefeuille immobilier international depuis Genève. Royal Capital Invest a su proposer trois actifs correspondant exactement à notre stratégie patrimoniale. La confidentialité et le professionnalisme ont été sans faille.",
    name: 'Family Office',
    role: 'Gestion de patrimoine · Genève, Suisse',
    deal: 'Portefeuille 3 actifs',
    amount: 'Sur demande',
    flag: '🇨🇭',
    persona: 'UHNWI'
  },
  {
    id: 5,
    text: "After 35 years in Munich, we wanted a second residence in a warmer climate. From initial contact to receiving the keys of our Palmeraie villa took exactly 9 weeks. Outstanding service, no surprises.",
    name: 'H. & E.W.',
    role: 'Retraités · Munich, Germany',
    deal: 'Villa Palmeraie',
    amount: '1 150 000€',
    flag: '🇩🇪',
    persona: 'European Buyer'
  }
]

function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev =>
        (prev + 1) % testimonials.length
      )
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[current]

  return (
    <section id="testimonials" style={{
      padding: '100px 40px',
      background: '#0A0A0A'
    }}>

      {/* Header */}
      <div style={{
        textAlign: 'center',
        maxWidth: '560px',
        margin: '0 auto 60px'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'cent
