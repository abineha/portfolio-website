import { useEffect, useRef } from 'react'
import styles from './CustomCursor.module.css'

const STARS = ['✦', '✧', '⋆', '✵', '·', '✦', '✧']
const MAX_TRAIL = 18

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const containerRef = useRef(null)
  const posRef = useRef({ x: -100, y: -100 })
  const lastStarPos = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const cursor = cursorRef.current
    const container = containerRef.current

    const onMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      posRef.current = { x, y }

      // Move cursor dot
      cursor.style.transform = `translate(${x}px, ${y}px)`

      // Spawn star only if moved enough (avoids dense cluster when idle)
      const dx = x - lastStarPos.current.x
      const dy = y - lastStarPos.current.y
      if (dx * dx + dy * dy < 28) return
      lastStarPos.current = { x, y }

      // Enforce max trail count
      const existing = container.querySelectorAll(`.${styles.star}`)
      if (existing.length >= MAX_TRAIL) existing[0].remove()

      const star = document.createElement('span')
      star.className = styles.star
      star.textContent = STARS[Math.floor(Math.random() * STARS.length)]

      // Randomise spread & size
      const spread = (Math.random() - 0.5) * 16
      const size = 0.55 + Math.random() * 0.6
      star.style.left = `${x + spread}px`
      star.style.top  = `${y + spread}px`
      star.style.fontSize = `${size}rem`
      star.style.setProperty('--tx', `${(Math.random() - 0.5) * 28}px`)
      star.style.setProperty('--ty', `${-(12 + Math.random() * 24)}px`)

      container.appendChild(star)
      star.addEventListener('animationend', () => star.remove(), { once: true })
    }

    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      {/* Trail container */}
      <div ref={containerRef} className={styles.trailContainer} />
      {/* Cursor dot */}
      <div ref={cursorRef} className={styles.cursor} />
    </>
  )
}
