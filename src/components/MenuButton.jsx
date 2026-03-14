import { useState } from 'react'
import { usePageTransition } from './TransitionContext'
import styles from './MenuButton.module.css'

/**
 * Circular top-left button.
 * mode="menu"  — shows ☰ hamburger, toggles fan menu
 * mode="home"  — shows ⌂, navigates to /
 *
 * TODO: Replace this CSS shape with:
 *   mode="menu": <img src="/assets/buttons/menu.png" /> (default)
 *                <img src="/assets/buttons/menu-hover.png" /> (hover)
 *   mode="home": <img src="/assets/buttons/home-btn.png" /> (default)
 *                <img src="/assets/buttons/home-btn-hover.png" /> (hover)
 *   Recommended size: 52×52px transparent PNG
 */
export default function MenuButton({ mode = 'menu', fanOpen = false, onToggle }) {
  const { navigateTo } = usePageTransition()
  const [hovered, setHovered] = useState(false)

  const handleClick = () => {
    if (mode === 'home') {
      navigateTo('/')
    } else {
      onToggle?.()
    }
  }

  return (
    <button
      className={`
        ${styles.btn}
        ${hovered ? styles.hovered : ''}
        ${mode === 'menu' && fanOpen ? styles.rotated : ''}
      `}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={mode === 'menu' ? 'Open navigation menu' : 'Go home'}
      data-sound={mode === 'home' ? 'close' : undefined}
    >
      {mode === 'menu' ? '☰' : '⌂'}
    </button>
  )
}
