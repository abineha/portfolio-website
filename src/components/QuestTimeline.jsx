import { useState } from 'react'
import { experienceData, TYPE_META } from '../data/experienceData'
import styles from './QuestTimeline.module.css'

export default function QuestTimeline() {
  const [expanded, setExpanded] = useState({})
  const toggle = (i) => setExpanded(prev => ({ ...prev, [i]: !prev[i] }))

  return (
    <div className={styles.timelineOuter}>
      {/* Glowing spine */}
      <div className={styles.spine} />

      {/* You Are Here */}
      <div className={styles.youAreHere}>
        <span className={styles.yahIcon}>◉</span>
        <span className={styles.yahText}>You Are Here</span>
      </div>

      {/* Entries */}
      <div className={styles.entriesWrap}>
        {experienceData.map((exp, i) => {
          const meta   = TYPE_META[exp.type]
          const isLeft = i % 2 !== 0   // 0=right, 1=left, 2=right, 3=left
          const open   = !!expanded[i]

          return (
            <div
              key={i}
              className={`${styles.entry} ${isLeft ? styles.entryLeft : styles.entryRight}`}
            >
              {/* Spine diamond node */}
              <div
                className={styles.spineNode}
                style={{ '--nc': meta.color, '--ng': meta.glow }}
              >
                <div className={styles.diamond} />
              </div>

              {/* Horizontal connector */}
              <div className={styles.connector} />

              {/* Card */}
              <div
                className={styles.card}
                style={{ '--nc': meta.color, '--ng': meta.glow }}
              >
                {/* Corner ribbon */}
                <div
                  className={styles.ribbon}
                  style={{ background: meta.color }}
                >
                  {meta.label}
                </div>

                {/* Header */}
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{exp.title}</h3>
                  <span className={styles.cardOrg}>{exp.org}</span>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardDate}>{exp.dateStart} – {exp.dateEnd}</span>
                    <span className={styles.cardDot}>·</span>
                    <span className={styles.cardLoc}>{exp.location}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className={styles.cardSummary}>{exp.summary}</p>

                {/* Achievements toggle */}
                <button
                  className={styles.achieveToggle}
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                >
                  <span className={styles.toggleArrow}>{open ? '▾' : '▸'}</span>
                  Key Contributions
                </button>

                {open && (
                  <ul className={styles.achieveList}>
                    {exp.achievements.map((a, ai) => (
                      <li key={ai}>{a}</li>
                    ))}
                  </ul>
                )}

                {/* Tags */}
                <div className={styles.tags}>
                  {exp.tags.map(tag => (
                    <span
                      key={tag}
                      className={styles.tag}
                      style={{ borderColor: meta.color, color: meta.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
