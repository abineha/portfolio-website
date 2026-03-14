import { useState, useEffect } from 'react'
import SubPageLayout from '../components/SubPageLayout'
import { projects, TOTAL_SLOTS, DOMAIN_COLORS, DOMAIN_GLOWS, DOMAIN_LABELS } from '../data/projectsData'
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
function ProjectFrame({ project, onClick }) {
  const color      = DOMAIN_COLORS[project.domain]
  const glow       = DOMAIN_GLOWS[project.domain]
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
          <span className={styles.nameplateText}>{project.title}</span>
        </div>
      </div>
    </div>
  )
}

// ── Detail overlay ────────────────────────────────────────────────────────────
function DetailPanel({ project, onClose }) {
  const [visible, setVisible] = useState(false)
  const color = DOMAIN_COLORS[project.domain]
  const glow  = DOMAIN_GLOWS[project.domain]

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
      <SubPageLayout title="Projects showcase" wide>
        <div className={styles.galleryWall}>
          <div className={styles.grid}>
            {slots.map(p =>
              p.status === 'empty'
                ? <EmptyFrame key={p.id} />
                : <ProjectFrame key={p.id} project={p} onClick={() => setOpenProject(p)} />
            )}
          </div>
        </div>
      </SubPageLayout>

      {openProject && (
        <DetailPanel project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </>
  )
}
