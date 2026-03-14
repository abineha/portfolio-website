import { useState, useEffect } from 'react'
import SubPageLayout from '../components/SubPageLayout'
import { musicPieces } from '../data/musicData'
import styles from './MusicStuff.module.css'

// ── CSS-drawn cassette ─────────────────────────────────────────────────────
function Cassette({ piece, onClick }) {
  return (
    <div className={styles.cassetteWrapper} onClick={() => onClick(piece)}>
      {/* Hover tooltip */}
      <div className={styles.tooltip}>
        <span className={styles.tooltipTitle}>{piece.title}</span>
        <span className={styles.tooltipGenre}>{piece.genre}</span>
      </div>

      <div
        className={styles.cassette}
        style={{ '--cc': piece.shellColor, '--cg': piece.glowColor }}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && onClick(piece)}
      >
        {/* Tape reels */}
        <div className={styles.reelRow}>
          <div className={styles.reel}><div className={styles.reelHub} /></div>
          <div className={styles.reel}><div className={styles.reelHub} /></div>
        </div>

        {/* Centre label */}
        <div
          className={styles.label}
          style={{ background: piece.labelBg, color: piece.labelColor }}
        >
          <span className={styles.labelTitle}>{piece.title}</span>
          <span className={styles.labelGenre}>{piece.genre}</span>
        </div>

        {/* Tape window */}
        <div className={styles.tapeWindow}>
          <div className={styles.tape} />
        </div>
      </div>
    </div>
  )
}

// ── Player popup ───────────────────────────────────────────────────────────
function PlayerCard({ piece, onClose }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10)
    return () => clearTimeout(t)
  }, [])

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 300)
  }

  return (
    <div
      className={`${styles.playerOverlay} ${visible ? styles.playerOverlayVisible : ''}`}
      onMouseDown={handleClose}
    >
      <div
        className={`${styles.playerCard} ${visible ? styles.playerCardVisible : ''}`}
        style={{ '--cc': piece.shellColor, '--cg': piece.glowColor }}
        onMouseDown={e => e.stopPropagation()}
      >
        {/* Domain colour band at top */}
        <div className={styles.playerBand} />
        <button className={styles.playerClose} onClick={handleClose}>✕</button>

        <div className={styles.playerBody}>
          {/* Header: mini cassette + title */}
          <div className={styles.playerHeader}>
            <div className={styles.miniCassette} style={{ '--cc': piece.shellColor }}>
              <div className={styles.miniReels}>
                <div className={styles.miniReel} />
                <div className={styles.miniReel} />
              </div>
              <div className={styles.miniTapeWindow} />
            </div>
            <div>
              <p className={styles.playerGenre} style={{ color: piece.shellColor }}>{piece.genre}</p>
              <h2 className={styles.playerTitle}>{piece.title}</h2>
            </div>
          </div>

          <div className={styles.ornament}><span>◆</span></div>

          {/* Video player or placeholder */}
          {piece.src
            ? <video src={piece.src} controls className={styles.video} />
            : <div className={styles.videoPlaceholder}>
                <span className={styles.videoPlaceholderText}>No video file yet — add src in musicData.js</span>
              </div>
          }

          <div className={styles.ornament}><span>◆</span></div>

          <p className={styles.playerFeeling}>{piece.feeling}</p>
        </div>
      </div>
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function MusicStuff() {
  const [open, setOpen] = useState(null)

  return (
    <>
      <SubPageLayout title="Trying a bit of music stuff" wide>
        <div className={styles.library}>
          <div className={styles.shelfRow}>
            <div className={styles.cassettesRow}>
              {musicPieces.map(p => (
                <Cassette key={p.id} piece={p} onClick={setOpen} />
              ))}
            </div>
          </div>

          <div className={styles.footnote}>
            <div className={styles.footnoteLine} />
            <p>Click a cassette to play</p>
          </div>
        </div>
      </SubPageLayout>

      {open && <PlayerCard piece={open} onClose={() => setOpen(null)} />}
    </>
  )
}
