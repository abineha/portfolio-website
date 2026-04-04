import { useState, useEffect } from 'react'
import SubPageLayout from '../components/SubPageLayout'
import { projects, TOTAL_SLOTS, DOMAIN_LABELS, FRAME_PALETTE } from '../data/projectsData'
import styles from './Projects.module.css'

const isUrl = (v) => typeof v === 'string' && v.startsWith('http')

const SIZE_CLASS = {
  large: styles.frameLarge,
  wide:  styles.frameWide,
  tall:  styles.frameTall,
  small: '',
}

// ── Empty frame ───────────────────────────────────────────────────────────────
function EmptyFrame() {
  return (
    <div className={`${styles.frame} ${styles.frameEmpty}`}>
      <span className={styles.emptyMark}>?</span>
    </div>
  )
}

// ── Project frame ─────────────────────────────────────────────────────────────
function ProjectFrame({ project, onClick, paletteIdx, number }) {
  const { color, glow } = FRAME_PALETTE[paletteIdx % FRAME_PALETTE.length]
  const inProgress = project.status === 'in-progress'
  const sizeClass  = SIZE_CLASS[project.size] || ''
  const isWide     = project.size === 'wide'

  return (
    <div
      className={`${styles.frame} ${sizeClass} ${inProgress ? styles.frameInProgress : ''}`}
      style={{ '--fc': color, '--fg': glow }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
    >
      {/* Frame number label — top-left of moulding */}
      <span className={styles.frameNum}>#{String(number).padStart(2, '0')}</span>

      {/* Corner ornaments on the frame moulding face */}
      <div className={styles.cornerTL} />
      <div className={styles.cornerTR} />
      <div className={styles.cornerBL} />
      <div className={styles.cornerBR} />

      {/* In-progress badge sits on the frame moulding */}
      {inProgress && <div className={styles.inProgressBadge}>◉ In Progress</div>}

      {/* Inner canvas — the "painting" inside the frame */}
      <div className={styles.frameInner}>
        {inProgress && <div className={styles.shimmer} />}

        <div className={`${styles.canvas} ${isWide ? styles.canvasWide : ''}`}>
          <div className={styles.canvasLeft}>
            <span className={`${styles.frameIcon} ${project.size === 'large' ? styles.frameIconLg : ''}`}>
              {project.icon}
            </span>
          </div>

          <div className={styles.canvasRight}>
            <p className={styles.frameDomain} style={{ color }}>{DOMAIN_LABELS[project.domain]}</p>
            <h3 className={styles.frameTitle}>{project.title}</h3>

            {(isWide || project.size === 'large') && (
              <p className={styles.frameSummary}>{project.summary}</p>
            )}

            <div className={styles.frameTags}>
              {project.tags.slice(0, isWide ? 4 : 3).map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Museum nameplate strip */}
        <div className={styles.nameplate}>
          <span className={styles.nameplateText}>#{String(number).padStart(2, '0')} · {project.title}</span>
        </div>
      </div>
    </div>
  )
}

// ── Detail overlay ────────────────────────────────────────────────────────────
function DetailPanel({ project, paletteIdx, onClose }) {
  const [visible, setVisible]   = useState(false)
  const [tab, setTab]           = useState('overview')
  const [slideIdx, setSlideIdx] = useState(0)
  const { color, glow } = FRAME_PALETTE[paletteIdx % FRAME_PALETTE.length]
  const media = project.media || []

  const prevSlide = () => setSlideIdx(i => (i - 1 + media.length) % media.length)
  const nextSlide = () => setSlideIdx(i => (i + 1) % media.length)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10)
    return () => clearTimeout(t)
  }, [])

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 300)
  }

  const renderLinks = () =>
    Object.entries(project.links || {})
      .filter(([, v]) => v && v !== 'TODO')
      .map(([key, value]) =>
        isUrl(value)
          ? <a key={key} href={value} target="_blank" rel="noreferrer" className={styles.linkBtn}>{key} ↗</a>
          : <span key={key} className={styles.linkBadge}>{key}: {value}</span>
      )

  return (
    <div
      className={`${styles.detailOverlay} ${visible ? styles.detailOverlayVisible : ''}`}
      onMouseDown={handleClose}
    >
      <div
        className={`${styles.detailCard} ${visible ? styles.detailCardVisible : ''}`}
        style={{ '--fc': color, '--fg': glow }}
        onMouseDown={e => e.stopPropagation()}
      >
        <div className={styles.detailBand} />
        <button className={styles.detailClose} onClick={handleClose} data-sound="close">✕</button>

        {/* Tab bar */}
        <div className={styles.tabBar}>
          <button
            className={`${styles.tabBtn} ${tab === 'overview' ? styles.tabBtnActive : ''}`}
            onClick={() => setTab('overview')}
          >Overview</button>
          <button
            className={`${styles.tabBtn} ${tab === 'gallery' ? styles.tabBtnActive : ''}`}
            onClick={() => setTab('gallery')}
          >Gallery {media.length > 0 && <span className={styles.tabCount}>{media.length}</span>}</button>
        </div>

        {/* ── Overview tab ── */}
        {tab === 'overview' && (
          <div className={styles.detailBody}>
            <p className={styles.detailDomain} style={{ color }}>{DOMAIN_LABELS[project.domain]}</p>

            <div className={styles.detailHeader}>
              <span className={styles.detailIcon}>{project.icon}</span>
              <h2 className={styles.detailTitle}>{project.title}</h2>
            </div>

            {project.status === 'in-progress' && (
              <span className={styles.detailInProgress} style={{ color }}>◉ In Progress</span>
            )}

            <div className={styles.ornament}><span>◆</span></div>

            <p className={styles.detailSummary}>{project.summary}</p>

            <div className={styles.ornament}><span>◆</span></div>

            <p className={styles.sectionLabel}>Contributions</p>
            <ul className={styles.detailContribs}>
              {project.contributions.map((c, i) => <li key={i}>{c}</li>)}
            </ul>

            <div className={styles.detailTags}>
              {project.tags.map(t => (
                <span key={t} className={styles.detailTag} style={{ borderColor: color + '55', color }}>{t}</span>
              ))}
            </div>

            {(Object.keys(project.links || {}).length > 0 || project.restricted) && (
              <div className={styles.detailLinks}>
                {project.restricted
                  ? <span className={styles.linkRestricted}>🔒 Restricted / Classified</span>
                  : renderLinks()
                }
              </div>
            )}
          </div>
        )}

        {/* ── Gallery tab ── */}
        {tab === 'gallery' && (
          <div className={styles.slideshow}>
            {media.length === 0 ? (
              <div className={styles.galleryEmpty}>
                <span>📷</span>
                <p>No media added yet.</p>
              </div>
            ) : (
              <>
                {/* Main media */}
                <div className={styles.slideMedia}>
                  {media[slideIdx].type === 'video'
                    ? <video key={slideIdx} src={media[slideIdx].src} className={styles.slideImg} controls muted playsInline />
                    : <img key={slideIdx} src={media[slideIdx].src} alt={media[slideIdx].caption || project.title} className={styles.slideImg} />
                  }
                </div>

                {/* Caption + counter */}
                <div className={styles.slideFooter}>
                  <p className={styles.slideCaption}>{media[slideIdx].caption || ''}</p>
                  <span className={styles.slideCounter}>{slideIdx + 1} / {media.length}</span>
                </div>

                {/* Arrows */}
                {media.length > 1 && (
                  <>
                    <button className={`${styles.slideArrow} ${styles.slideArrowL}`} onClick={prevSlide}>‹</button>
                    <button className={`${styles.slideArrow} ${styles.slideArrowR}`} onClick={nextSlide}>›</button>
                  </>
                )}

                {/* Dot indicators */}
                {media.length > 1 && (
                  <div className={styles.slideDots}>
                    {media.map((_, i) => (
                      <button
                        key={i}
                        className={`${styles.slideDot} ${i === slideIdx ? styles.slideDotActive : ''}`}
                        onClick={() => setSlideIdx(i)}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Projects() {
  const [openProject, setOpenProject] = useState(null)

  const slots = [...projects]
  while (slots.length < TOTAL_SLOTS) {
    slots.push({ id: `empty-${slots.length}`, status: 'empty', size: 'small' })
  }

  return (
    <>
      <SubPageLayout title="Projects" wide>
        <div className={styles.galleryWall}>
          <div className={styles.grid}>
            {slots.map((p, idx) =>
              p.status === 'empty'
                ? <EmptyFrame key={p.id} />
                : <ProjectFrame key={p.id} project={p} onClick={() => setOpenProject({ project: p, paletteIdx: idx })} paletteIdx={idx} number={idx + 1} />
            )}
          </div>
        </div>
      </SubPageLayout>

      {openProject && (
        <DetailPanel project={openProject.project} paletteIdx={openProject.paletteIdx} onClose={() => setOpenProject(null)} />
      )}
    </>
  )
}
