import { useEffect, useState } from 'react'
import styles from './BackgroundVideo.module.css'

const FALLBACK = '/assets/videos/home.mp4'

export default function BackgroundVideo({ src }) {
  const [current, setCurrent] = useState(src)
  const [prev, setPrev] = useState(null)

  useEffect(() => {
    if (src === current) return
    setPrev(current)
    setCurrent(src)
    const t = setTimeout(() => setPrev(null), 700)
    return () => clearTimeout(t)
  }, [src]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleError = (e) => {
    if (e.target.src && !e.target.src.endsWith(FALLBACK)) {
      e.target.src = FALLBACK
    }
  }

  return (
    <div className={styles.container}>
      {prev && (
        <video
          key={`prev-${prev}`}
          className={`${styles.video} ${styles.fadeOut}`}
          src={prev}
          autoPlay muted loop playsInline
          onError={handleError}
        />
      )}
      <video
        key={`curr-${current}`}
        className={`${styles.video} ${styles.fadeIn}`}
        src={current}
        autoPlay muted loop playsInline
        onError={handleError}
      />
    </div>
  )
}
