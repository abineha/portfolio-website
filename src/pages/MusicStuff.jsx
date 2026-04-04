import { useState, useEffect } from 'react'
import SubPageLayout from '../components/SubPageLayout'
import { useAudio } from '../components/AudioManager'
import { musicPieces } from '../data/musicData'
import styles from './MusicStuff.module.css'

const SHELF_SIZE = 4

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
  const { duck, unduck } = useAudio()

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10)
    return () => clearTimeout(t)
  }, [])

  const handleClose = () => {
    unduck()
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

          {/* Video or audio player */}
          {piece.src
            ? piece.type === 'audio'
              ? (
                <div className={styles.audioWrap}>
                  <audio src={piece.src} controls className={styles.audio} />
                </div>
              )
              : <video
                  src={piece.src}
                  controls
                  className={styles.video}
                  onPlay={duck}
                  onPause={unduck}
                  onEnded={unduck}
                />
            : <div className={styles.videoPlaceholder}>
                <span className={styles.videoPlaceholderText}>No file yet — add src in musicData.js</span>
              </div>
          }

          {piece.feeling ? (
            <>
              <div className={styles.ornament}><span>◆</span></div>
              <p className={styles.playerFeeling}>{piece.feeling}</p>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function MusicStuff() {
  const [open, setOpen] = useState(null)

  // Chunk into shelves of SHELF_SIZE
  const shelves = []
  for (let i = 0; i < musicPieces.length; i += SHELF_SIZE) {
    shelves.push(musicPieces.slice(i, i + SHELF_SIZE))
  }

  return (
    <>
      <SubPageLayout title="Trying a bit of music stuff" wide>
        <div className={styles.library}>
          {shelves.map((shelf, si) => (
            <div key={si} className={styles.shelfRow}>
              <div className={styles.cassettesRow}>
                {shelf.map(p => (
                  <Cassette key={p.id} piece={p} onClick={setOpen} />
                ))}
              </div>
            </div>
          ))}

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
