import React, { useState, useEffect, useRef } from 'react'

function StatItem({ target, suffix, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          let start = 0
          const step = target / 60
          const timer = setInterval(() => {
            start += step
            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 25)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} style={{
      textAlign: 'center',
      padding: '0 24px'
    }}>
      <span style={{
        display: 'block',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(28px, 4vw, 42px)',
        fontWeight: '300',
        color: '#C9A84C',
        lineHeight: '1',
        marginBottom: '8px'
      }}>
        {count}{suffix}
      </span>
      <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '11px',
        fontWeight: '400',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.40)',
        lineHeight: '1.5'
      }}>
        {label}
      </span>
    </div>
  )
}

function Stats() {
  return (
    <section style={{
      background: '#111111',
      padding: '60px 40px',
      borderTop: '1px solid rgba(201,168,76,0.15)',
      borderBottom: '1px solid rgba(201,168,76,0.15)'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '40px'
      }}>

        <StatItem
          target={120}
          suffix="M€+"
          label={"Transactions\nfacilitées"}
        />

        <div style={{
          width: '1px',
          height: '48px',
          background: 'rgba(201,168,76,0.25)'
        }}></div>

        <StatItem
          target={340}
          suffix="+"
          label={"Investisseurs\naccompagnés"}
        />

        <div style={{
          width: '1px',
          height: '48px',
          background: 'rgba(201,168,76,0.25)'
        }}></div>

        <StatItem
          target={48}
          suffix="h"
          label={"Délai moyen\nde réponse"}
        />

        <div style={{
          width: '1px',
          height: '48px',
          background: 'rgba(201,168,76,0.25)'
        }}></div>

        <StatItem
          target={300}
          suffix="+"
          label={"Jours de soleil\npar an"}
        />

      </div>
    </section>
  )
}

export default Stats
