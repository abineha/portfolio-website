import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './FanMenu.module.css'

const NAV_ITEMS = [
  { label: 'Education',       path: '/education' },
  { label: 'Work Experience', path: '/work-experience' },
  { label: 'Publications',    path: '/publications' },
  { label: 'Projects',        path: '/projects' },
  { label: 'Art Stuff',       path: '/art-stuff' },
  { label: 'Music Stuff',     path: '/music-stuff' },
]

// Evenly spaced 15° sectors across the 90° quarter-circle
const ANGLES   = [7.5, 22.5, 37.5, 52.5, 67.5, 82.5]
const ORIGIN_X = 26   // menu button center X
const ORIGIN_Y = 26   // menu button center Y

/**
 * FanMenu — quarter-circle radial nav from top-left.
 * Each blade pivots from the menu button center using transform-origin,
 * forming clean non-overlapping pie-slice wedges.
 *
 * TODO: Replace each fan item CSS shape with:
 *   <img src="/assets/buttons/nav-[name].png" /> (default)
 *   <img src="/assets/buttons/nav-[name]-hover.png" /> (hover)
 *   Recommended size: ~200×52px transparent PNG per item
 */
export default function FanMenu({ isOpen, onClose }) {
  const navigate = useNavigate()
  const overlayRef = useRef(null)

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => {
      if (overlayRef.current && e.target === overlayRef.current) onClose()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [isOpen, onClose])

  const handleNav = (path) => {
    onClose()
    navigate(path)
  }

  return (
    <>
      {/* Invisible overlay to catch outside clicks */}
      {isOpen && (
        <div ref={overlayRef} className={styles.overlay} onMouseDown={onClose} />
      )}

      <div className={styles.fanRoot}>
        {NAV_ITEMS.map((item, i) => (
          <button
            key={item.path}
            className={`${styles.fanItem} ${isOpen ? styles.open : ''}`}
            style={{
              left: `${ORIGIN_X}px`,
              top:  `${ORIGIN_Y}px`,
              '--rot':         `${ANGLES[i]}deg`,
              '--delay-open':  `${i * 45}ms`,
              '--delay-close': `${(NAV_ITEMS.length - 1 - i) * 30}ms`,
              transitionDelay: isOpen ? 'var(--delay-open)' : 'var(--delay-close)',
            }}
            onClick={() => handleNav(item.path)}
          >
            <span className={styles.fanLabel}>{item.label}</span>
          </button>
        ))}
      </div>
    </>
  )
}
