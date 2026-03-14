import { useState, useEffect } from 'react'
import styles from './Namecard.module.css'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xlgplngl'

// ── Constellation data ──────────────────────────────────────────────────────
const GROUPS = [
  {
    name: 'Languages',
    color: '#7ec8e3',
    nodes: [
      { id: 'python',     label: 'Python',      x: 62,  y: 105, level: 0.95 },
      { id: 'typescript', label: 'TS / JS',      x: 128, y: 52,  level: 0.88 },
      { id: 'cpp',        label: 'C / C++',      x: 185, y: 88,  level: 0.82 },
      { id: 'java',       label: 'Java',         x: 152, y: 162, level: 0.72 },
      { id: 'sql',        label: 'SQL',          x: 70,  y: 168, level: 0.76 },
    ],
    edges: [['python','typescript'],['typescript','cpp'],['cpp','java'],['java','sql'],['sql','python'],['python','java']],
  },
  {
    name: 'Frameworks',
    color: '#88dbb8',
    nodes: [
      { id: 'react',  label: 'React',    x: 248, y: 52,  level: 0.90 },
      { id: 'nextjs', label: 'Next.js',  x: 315, y: 85,  level: 0.82 },
      { id: 'nodejs', label: 'Node.js',  x: 332, y: 152, level: 0.80 },
      { id: 'django', label: 'Django',   x: 265, y: 175, level: 0.70 },
      { id: 'docker', label: 'Docker',   x: 218, y: 148, level: 0.75 },
    ],
    edges: [['react','nextjs'],['nextjs','nodejs'],['nodejs','django'],['django','docker'],['docker','react'],['react','nodejs']],
  },
  {
    name: 'Cloud & Data',
    color: '#c4a8f0',
    nodes: [
      { id: 'postgresql', label: 'PostgreSQL', x: 388, y: 55,  level: 0.85 },
      { id: 'mongodb',    label: 'MongoDB',    x: 450, y: 100, level: 0.78 },
      { id: 'gcp',        label: 'GCP',        x: 435, y: 165, level: 0.80 },
      { id: 'aws',        label: 'AWS',        x: 375, y: 198, level: 0.78 },
      { id: 'linux',      label: 'Linux',      x: 358, y: 118, level: 0.72 },
    ],
    edges: [['postgresql','mongodb'],['mongodb','gcp'],['gcp','aws'],['aws','linux'],['linux','postgresql'],['postgresql','gcp']],
  },
]

const BRIDGES = [
  { from: 'typescript', to: 'react'      },
  { from: 'nodejs',     to: 'postgresql' },
  { from: 'docker',     to: 'gcp'        },
]

// Build flat node lookup once
const NODE_MAP = {}
GROUPS.forEach(g => g.nodes.forEach(n => { NODE_MAP[n.id] = { ...n, color: g.color } }))

function ConstellationMap() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className={styles.constellation}>
      {/* Legend */}
      <div className={styles.constellationLegend}>
        {GROUPS.map(g => (
          <span key={g.name} className={styles.legendDot} style={{ color: g.color }}>
            ◆ {g.name}
          </span>
        ))}
      </div>

      <svg viewBox="0 0 470 215" className={styles.constellationSvg} aria-label="Skill constellation">
        {/* Bridge lines — cross-group, dashed */}
        {BRIDGES.map((b, i) => {
          const f = NODE_MAP[b.from], t = NODE_MAP[b.to]
          return (
            <line key={i}
              x1={f.x} y1={f.y} x2={t.x} y2={t.y}
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
              strokeDasharray="4 5"
            />
          )
        })}

        {/* Group edges */}
        {GROUPS.map(g =>
          g.edges.map(([a, b]) => {
            const na = NODE_MAP[a], nb = NODE_MAP[b]
            return (
              <line key={`${a}-${b}`}
                x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                stroke={g.color}
                strokeWidth="0.8"
                strokeOpacity={hovered && (hovered === a || hovered === b) ? 0.65 : 0.2}
                style={{ transition: 'stroke-opacity 0.2s ease' }}
              />
            )
          })
        )}

        {/* Nodes */}
        {GROUPS.map((g, gi) =>
          g.nodes.map((node, ni) => {
            const r = 3.5 + node.level * 4.5
            const isHovered = hovered === node.id
            const delay = `${(gi * 1.1 + ni * 0.38).toFixed(2)}s`
            const anchor = node.x < 110 ? 'start' : node.x > 370 ? 'end' : 'middle'
            const labelY = node.y < 55 ? node.y + r + 14 : node.y - r - 7

            return (
              <g key={node.id}
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: 'default' }}
              >
                {/* Outer halo — always present, pulses on hover */}
                <circle cx={node.x} cy={node.y}
                  r={isHovered ? r * 3.2 : r * 1.9}
                  fill={g.color}
                  opacity={isHovered ? 0.2 : 0.06}
                  style={{ transition: 'r 0.25s ease, opacity 0.25s ease' }}
                />
                {/* Core star */}
                <circle cx={node.x} cy={node.y}
                  r={isHovered ? r * 1.55 : r}
                  fill={g.color}
                  opacity={0.6 + node.level * 0.35}
                  className={styles.starNode}
                  style={{ animationDelay: delay, transition: 'r 0.2s ease' }}
                />
                {/* Label */}
                <text
                  x={node.x} y={labelY}
                  textAnchor={anchor}
                  fill={g.color}
                  fontSize={isHovered ? '10' : '8.5'}
                  fontWeight="600"
                  opacity={isHovered ? 1 : 0.72}
                  fontFamily="Quicksand, sans-serif"
                  style={{ transition: 'opacity 0.2s ease, font-size 0.2s ease' }}
                >
                  {node.label}
                </text>
              </g>
            )
          })
        )}
      </svg>
    </div>
  )
}

// ── About card ───────────────────────────────────────────────────────────────
function AboutContent() {
  return (
    <div className={styles.cardBody}>
      <div className={styles.ornament}><span>◆</span></div>
      <h2 className={styles.cardTitle}>Abineha Prabu</h2>
      <p className={styles.cardSubtitle}>Master's Student · Computer Science</p>
      <div className={styles.ornament}><span>◆</span></div>

      <div className={styles.visionRow}>
        <span className={styles.visionBadge}>✦ Solve Problems</span>
        <span className={styles.visionBadge}>✦ Create</span>
        <span className={styles.visionBadge}>✦ Research</span>
      </div>

      <div className={styles.aboutScroll}>
        <div className={styles.aboutSection}>
          <p className={styles.sectionLabel}>◈ Hello World!</p>
          <p className={styles.cardText}>
            I’m Abi, and I’m passionate about computer science because it brings ideas to life. I’m fascinated by all aspects of the field (Software Engineering, AI, Machine Learning, and Cybersecurity). 
          </p>
          <p className={styles.cardText}>
            My work so far has focused on solving real-world problems through collaboration with interdisciplinary experts: I partnered with cardiologists to develop a real-time arrhythmia detector for athletes, and with the Sulur Air Force Base to create a dashboard for equipment maintenance and calibration checks.
          </p>
          <p className={styles.cardText}>
            At my core, I love problem-solving and creating. I build tools inspired by art, music, and video games like visual chess optimization patterns to help beginners evaluate board positions, retro-style Pac-Man games, and more. I also enjoy research and experimentation, having published papers under the guidance of mentors, and I’m currently exploring AI agents and game theory.
          </p>
        
        </div>

        <div className={styles.aboutSection}>
          <p className={styles.sectionLabel}>◈ Skill Constellation</p>
          <ConstellationMap />
        </div>

        <div className={styles.aboutSection}>
          <p className={styles.sectionLabel}>◈ Hobbies</p>
          <div className={styles.hobbies}>
            <span className={styles.hobbyItem}>🎨 Art</span>
            <span className={styles.hobbyItem}>🎵 Music</span>
            <span className={styles.hobbyItem}>🎮 Gaming</span>
            <span className={styles.hobbyItem}>📖 Reading</span>
          </div>
        </div>

        <div className={styles.aboutSection}>
          <p className={styles.sectionLabel}>◈ Active Quest</p>
          <p className={styles.questText}>
            After graduation, I aim to pursue a full-time software role applying my skills to impactful projects, while continuing hardware creations and personal projects. My ultimate goal is to keep creating, experimenting, and solving problems that excite me.
      
          </p>
        </div>
      </div>
    </div>
  )
}

// ── Contact card ─────────────────────────────────────────────────────────────
function ContactContent() {
  const [note, setNote] = useState('')
  const [sendStatus, setSendStatus] = useState('idle')
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText('abinehaprabu@gmail.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const sendNote = async () => {
    if (!note.trim() || sendStatus === 'sending') return
    setSendStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ message: note }),
      })
      if (res.ok) {
        setSendStatus('sent')
        setNote('')
        setTimeout(() => setSendStatus('idle'), 3000)
      } else {
        setSendStatus('error')
        setTimeout(() => setSendStatus('idle'), 3000)
      }
    } catch {
      setSendStatus('error')
      setTimeout(() => setSendStatus('idle'), 3000)
    }
  }

  const sendLabel = { idle: 'Send ➤', sending: 'Sending…', sent: '✓ Sent!', error: '✗ Failed' }[sendStatus]

  return (
    <div className={styles.cardBody}>
      <div className={styles.ornament}><span>◆</span></div>
      <h2 className={styles.cardTitle}>Summon Me</h2>
      <p className={styles.cardSubtitle}>Reach out and let's create something!</p>
      <div className={styles.ornament}><span>◆</span></div>

      <ul className={styles.contactList}>
        <li className={styles.contactItem}>
          <span className={styles.contactIcon}>✉</span>
          <a href="#" onClick={copyEmail} className={styles.link}>
            {emailCopied ? '✓ Copied!' : 'abinehaprabu@gmail.com'}
          </a>
        </li>
        <li className={styles.contactItem}>
          <span className={styles.contactIcon}>in</span>
          <a href="https://www.linkedin.com/in/abineha-prabu" target="_blank" rel="noreferrer" className={styles.link}>linkedin.com/in/abineha-prabu</a>
        </li>
        <li className={styles.contactItem}>
          <span className={styles.contactIcon}>GH</span>
          <a href="https://github.com/abineha" target="_blank" rel="noreferrer" className={styles.link}>github.com/abineha</a>
        </li>
        <li className={styles.contactItem}>
          <span className={styles.contactIcon}>R</span>
          <a href="https://drive.google.com/file/d/1cY5w7nUpOklz5TQmq1i2YSwelmuevAOP/view?usp=sharing" target="_blank" rel="noreferrer" className={styles.link}>View Résumé</a>
        </li>
        <li className={styles.contactItem}>
          <span className={styles.contactIcon}>W</span>
          <span className={styles.linkDisabled}>Portfolio — coming soon</span>
        </li>
      </ul>

      <div className={styles.noteSection}>
        <p className={styles.noteLabel}>✦ Send a Note</p>
        <textarea
          className={styles.noteInput}
          placeholder="Come on… whisper into the void !"
          value={note}
          onChange={e => setNote(e.target.value)}
          rows={3}
        />
        <button
          className={`${styles.sendBtn} ${sendStatus === 'sent' ? styles.sendBtnSent : ''} ${sendStatus === 'error' ? styles.sendBtnError : ''}`}
          onClick={sendNote}
          disabled={sendStatus === 'sending' || sendStatus === 'sent'}
        >
          {sendLabel}
        </button>
      </div>
    </div>
  )
}

// ── Root ─────────────────────────────────────────────────────────────────────
export default function Namecard({ type, onClose }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10)
    return () => clearTimeout(t)
  }, [])

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 320)
  }

  return (
    <div
      className={`${styles.overlay} ${visible ? styles.overlayVisible : ''}`}
      onMouseDown={handleClose}
    >
      <div
        className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
        onMouseDown={e => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={handleClose} aria-label="Close" data-sound="close">✕</button>
        {type === 'about' ? <AboutContent /> : <ContactContent />}
      </div>
    </div>
  )
}
