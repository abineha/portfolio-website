import { useState } from 'react'
import styles from './ImageButton.module.css'

/**
 * Reusable image button — swaps src on hover.
 * When `src` is provided, renders an <img>.
 * When not provided, renders children (CSS placeholder mode).
 */
export default function ImageButton({ src, hoverSrc, alt = '', onClick, className = '', children }) {
  const [hovered, setHovered] = useState(false)

  if (src) {
    return (
      <button
        className={`${styles.imgBtn} ${className}`}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={hovered && hoverSrc ? hoverSrc : src} alt={alt} draggable={false} />
      </button>
    )
  }

  // CSS placeholder mode — renders children with hover class
  return (
    <button
      className={`${styles.placeholderBtn} ${hovered ? styles.placeholderHover : ''} ${className}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  )
}
