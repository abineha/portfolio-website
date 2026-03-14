import { useState, useRef, useEffect } from 'react'
import { useAudio } from './AudioManager'
import styles from './BottomBar.module.css'

/**
 * Bottom-right: About Me, Contact Me, Volume buttons.
 *
 * TODO: Replace each CSS shape with image buttons via ImageButton component:
 *   About Me:    src="/assets/buttons/about-me.png"    hoverSrc="/assets/buttons/about-me-hover.png"
 *   Contact Me:  src="/assets/buttons/contact-me.png"  hoverSrc="/assets/buttons/contact-me-hover.png"
 *   Volume:      src="/assets/buttons/volume.png"       hoverSrc="/assets/buttons/volume-hover.png"
 *   Recommended size: ~160×52px for About/Contact, ~52×52px for Volume
 */
export default function BottomBar({ onAbout, onContact }) {
  const { volume, setVolume, muted, toggleMute } = useAudio()
  const [showSlider, setShowSlider] = useState(false)
  const sliderRef = useRef(null)
  const volumeBtnRef = useRef(null)

  // Close slider when clicking outside
  useEffect(() => {
    if (!showSlider) return
    const handler = (e) => {
      if (
        sliderRef.current && !sliderRef.current.contains(e.target) &&
        volumeBtnRef.current && !volumeBtnRef.current.contains(e.target)
      ) {
        setShowSlider(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [showSlider])

  return (
    <div className={styles.bar}>
      {/* TODO: Replace with <ImageButton src="..." hoverSrc="..." onClick={onAbout}>About Me</ImageButton> */}
      <button className={styles.btn} onClick={onAbout}>Intro</button>

      {/* TODO: Replace with <ImageButton src="..." hoverSrc="..." onClick={onContact}>Summon Me</ImageButton> */}
      <button className={styles.btn} onClick={onContact}>Summon Me</button>

      {/* Volume control */}
      <div className={styles.volumeWrapper}>
        {showSlider && (
          <div ref={sliderRef} className={styles.sliderPanel}>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={muted ? 0 : volume}
              onChange={e => {
                if (muted) toggleMute()
                setVolume(parseFloat(e.target.value))
              }}
              className={styles.slider}
              orient="vertical"
            />
            <span className={styles.volLabel}>{muted ? '0' : Math.round(volume * 100)}</span>
          </div>
        )}
        {/* TODO: Replace with <ImageButton src="/assets/buttons/volume.png" hoverSrc="/assets/buttons/volume-hover.png"> */}
        <button
          ref={volumeBtnRef}
          className={`${styles.circleBtn} ${muted ? styles.muted : ''}`}
          onClick={() => setShowSlider(p => !p)}
          onContextMenu={e => { e.preventDefault(); toggleMute() }}
          title="Left-click: open slider  |  Right-click: mute toggle"
        >
          {muted ? '🔇' : '♫'}
        </button>
      </div>
    </div>
  )
}
