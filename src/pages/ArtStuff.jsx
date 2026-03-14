import { useState, useEffect } from 'react'
import SubPageLayout from '../components/SubPageLayout'
import { artPieces } from '../data/artData'
import styles from './ArtStuff.module.css'

// ── Pushpin ────────────────────────────────────────────────────────────────
function Pin({ color }) {
  return <div className={styles.pin} style={{ '--pin': color }} />
}

// ── Single pinned piece ────────────────────────────────────────────────────
function PinnedPiece({ piece, onClick }) {
  return (
    <div
      className={styles.pinned}
      style={{ '--tilt': `${piece.tilt}deg` }}
      onClick={() => onClick(piece)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick(piece)}
    >
      <Pin color={piece.pinColor} />

      <div className={styles.photo}>
        {piece.src
          ? <img src={piece.src} alt={piece.title} className={styles.img} />
          : <div
              className={`${styles.placeholder} ${styles[piece.size]}`}
              style={{ '--pc': piece.pinColor }}
            />
        }
      </div>

      <p className={styles.caption}>{piece.title}</p>
    </div>
  )
}

// ── Lightbox ───────────────────────────────────────────────────────────────
function Lightbox({ piece, onClose }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10)
    return () => clearTimeout(t)
  }, [])

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 280)
  }

  return (
    <div
      className={`${styles.lightboxOverlay} ${visible ? styles.lightboxVisible : ''}`}
      onMouseDown={handleClose}
    >
      <div
        className={`${styles.lightboxCard} ${visible ? styles.lightboxCardVisible : ''}`}
        style={{ '--pin': piece.pinColor }}
        onMouseDown={e => e.stopPropagation()}
      >
        <button className={styles.lightboxClose} onClick={handleClose}>✕</button>

        {piece.src
          ? <img src={piece.src} alt={piece.title} className={styles.lightboxImg} />
          : <div
              className={`${styles.lightboxPlaceholder} ${styles[piece.size]}`}
              style={{ '--pc': piece.pinColor }}
            />
        }

        <div className={styles.lightboxMeta}>
          <div className={styles.lightboxDivider} style={{ background: piece.pinColor }} />
          <h2 className={styles.lightboxTitle}>{piece.title}</h2>
          <p className={styles.lightboxFeeling}>{piece.feeling}</p>
        </div>
      </div>
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function ArtStuff() {
  const [open, setOpen] = useState(null)

  return (
    <>
      <SubPageLayout title="Trying a bit of art stuff" wide>
        <div className={styles.board}>
          {artPieces.map(p => (
            <PinnedPiece key={p.id} piece={p} onClick={setOpen} />
          ))}
        </div>
      </SubPageLayout>

      {open && <Lightbox piece={open} onClose={() => setOpen(null)} />}
    </>
  )
}
