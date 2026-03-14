import { useState, useEffect } from 'react'
import SubPageLayout from '../components/SubPageLayout'
import { publications, DOMAIN_COLORS, DOMAIN_GLOWS, DOMAIN_LABELS } from '../data/publicationsData'
import styles from './Publications.module.css'

const BOOKS_PER_ROW = 6

function chunkRows(arr, size) {
  const rows = []
  for (let i = 0; i < arr.length; i += size) rows.push(arr.slice(i, i + size))
  return rows
}

// ── Book spine ───────────────────────────────────────────────────────────────
/*
 * TODO: Replace .spine with a hand-drawn book-spine image per publication:
 *   <img src="/assets/books/spine-[id].png" />        (default)
 *   <img src="/assets/books/spine-[id]-hover.png" />  (hover)
 *   Recommended size: ~58×300px transparent PNG, domain colour as background
 */
function BookSpine({ pub, onClick }) {
  const color = DOMAIN_COLORS[pub.domain]
  const glow  = DOMAIN_GLOWS[pub.domain]
  const year  = pub.date.split(' ').at(-1)
  const shortVenue = pub.venue.replace(/\s*\(.*?\)/g, '').trim()

  return (
    <div className={styles.spineWrapper} onClick={onClick}>
      <div className={styles.tooltip}>
        <span className={styles.tooltipVenue}>{shortVenue}</span>
        <span className={styles.tooltipYear}>{year}</span>
      </div>

      <div className={styles.spine} style={{ '--spine-color': color, '--spine-glow': glow }}>
        <span className={styles.spineTitle}>{pub.title}</span>
        <div className={styles.spineFooter}>
          <span className={styles.spineDomain}>{DOMAIN_LABELS[pub.domain]}</span>
        </div>
      </div>
    </div>
  )
}

// ── Parchment detail card ─────────────────────────────────────────────────────
function ParchmentCard({ pub, onClose }) {
  const [visible, setVisible] = useState(false)
  const color = DOMAIN_COLORS[pub.domain]

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
      className={`${styles.cardOverlay} ${visible ? styles.cardOverlayVisible : ''}`}
      onMouseDown={handleClose}
    >
      <div
        className={`${styles.parchmentCard} ${visible ? styles.parchmentVisible : ''}`}
        onMouseDown={e => e.stopPropagation()}
      >
        {/* Domain colour band */}
        <div className={styles.parchBand} style={{ background: color }} />

        <button className={styles.parchClose} onClick={handleClose} data-sound="close">✕</button>

        <div className={styles.parchBody}>
          <p className={styles.parchDomain} style={{ color }}>{DOMAIN_LABELS[pub.domain]}</p>
          <h2 className={styles.parchTitle}>{pub.title}</h2>
          <p className={styles.parchVenue}>{pub.venue}</p>
          <p className={styles.parchDate}>{pub.date}</p>

          <div className={styles.ornament}><span>◆</span></div>

          <p className={styles.parchSectionLabel}>Co-Authors</p>
          <p className={styles.parchAuthors}>{pub.coAuthors.join(' · ')}</p>

          <div className={styles.ornament}><span>◆</span></div>

          <p className={styles.parchSectionLabel}>Contributions</p>
          <ul className={styles.parchContribs}>
            {pub.contributions.map((c, i) => <li key={i}>{c}</li>)}
          </ul>

          {pub.link
            ? <a href={pub.link} target="_blank" rel="noreferrer" className={styles.parchLink}>
                View Publication →
              </a>
            : <p className={styles.parchNoLink}>Publication link coming soon</p>
          }
        </div>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Publications() {
  const [openPub, setOpenPub] = useState(null)
  const rows = chunkRows(publications, BOOKS_PER_ROW)

  return (
    <>
      <SubPageLayout title="Publications Library" wide>
        <div className={styles.library}>

          {rows.map((rowBooks, rowIdx) => (
            <div key={rowIdx} className={styles.shelfRow}>
              {/* TODO: Replace shelfRow::after plank with hand-drawn wood art */}
              <div className={styles.booksRow}>
                {rowBooks.map(pub => (
                  <BookSpine key={pub.id} pub={pub} onClick={() => setOpenPub(pub)} />
                ))}
              </div>
            </div>
          ))}

          <div className={styles.footnote}>
            <div className={styles.footnoteLine} />
            <p>
              Research conducted under the mentorship of dedicated supervisors —
              exploring creative experiments to validate ideas at the frontier of computer science.
            </p>
          </div>

        </div>
      </SubPageLayout>

      {/* Rendered outside SubPageLayout so it isn't clipped by the panel's backdrop-filter */}
      {openPub && <ParchmentCard pub={openPub} onClose={() => setOpenPub(null)} />}
    </>
  )
}
