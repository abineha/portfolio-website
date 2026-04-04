import { useState } from 'react'
import styles from './EducationTree.module.css'

const TREE_W = 660
const TREE_H = 760

const NODES = {
  school: {
    id: 'school', cx: 330, cy: 700, r: 18,
    color: '#f0c060', glow: 'rgba(240,192,96,0.4)',
    labelAbove: false,
    label: ['Yuvabharathi', 'Public School'],
    inProgress: false,
    title: 'Yuvabharathi Public School',
    period: 'Graduated: 2021',
    badge: 'Grade: 94.2%',
    bullets: [
      'Developed strong foundation in science and mathematics',
      'Core subjects: Maths, Information Systems, Physics, Chemistry',
    ],
  },
  amrita: {
    id: 'amrita', cx: 330, cy: 535, r: 20,
    color: '#7ec8e3', glow: 'rgba(126,200,227,0.45)',
    labelAbove: false,
    label: ['Amrita Vishwa', 'Vidyapeetham'],
    subtitle: 'B.Tech in Computer Science and Engineering',
    subtitleW: 282,
    inProgress: false,
    title: 'Amrita Vishwa Vidyapeetham, Coimbatore',
    period: 'Oct 2021 – Jun 2025',
    badge: 'CGPA: 8.84 / 10',
    bullets: [
      'B.Tech in Computer Science and Engineering',
      'First Class with Distinction',
    ],
  },
  community: {
    id: 'community', cx: 80, cy: 385, r: 14,
    color: '#88dbb8', glow: 'rgba(136,219,184,0.4)',
    labelAbove: true,
    label: ['Community'],
    inProgress: false,
    title: 'Community & Clubs',
    period: '2022 – 2024',
    badge: null,
    bullets: [
      'Executive Team — Google Developer Students Club, Coimbatore (2023–2024)',
      'Event Management — Google Developer Students Club, Coimbatore (2022–2023)',
      'ACM Chapter Member (2024)',
      'ICPC Volunteer (2024)',
    ],
  },
  research: {
    id: 'research', cx: 200, cy: 360, r: 14,
    color: '#c4a8f0', glow: 'rgba(196,168,240,0.4)',
    labelAbove: true,
    label: ['Research'],
    inProgress: false,
    title: 'Research',
    period: 'AVISHKAR 2023',
    badge: null,
    bullets: [
      'Poster: Ground-to-Aerial Image Geo-Localization using Hard Exemplar Reweighting Triplet Loss',
      'Deep learning approach for UAV-based target localization and navigation',
      'Cross-view image matching for drone navigation',
    ],
  },
  academic: {
    id: 'academic', cx: 460, cy: 360, r: 14,
    color: '#f0c060', glow: 'rgba(240,192,96,0.4)',
    labelAbove: true,
    label: ['Academic'],
    inProgress: false,
    title: 'Course Modules',
    period: '2021 – 2025',
    badge: '8.84 / 10',
    bullets: [
      'Database Management and Systems,  Object Oriented Paradigm, Data Structure and Algorithms, Operating Systems, Theroy of Computation, Computer Networks',
      'Neural Networks and Deep Learning, Compiler Design, Real-Time Systems, Software Engineering, Computer Security',
    ],
  },
  industry: {
    id: 'industry', cx: 578, cy: 385, r: 14,
    color: '#f08c60', glow: 'rgba(240,140,96,0.4)',
    labelAbove: true,
    label: ['Industry'],
    inProgress: false,
    title: 'Industry Project',
    period: 'Indian Air Force, Sulur',
    badge: '30K+ records',
    bullets: [
      'Built data analysis & performance evaluation system for IAF Sulur Air Force Station',
      'Processed 30,000+ equipment test records',
      'Enabled accurate calibration and trend visualization',
      'Automated performance scoring of military equipment',
    ],
  },
  manchester: {
    id: 'manchester', cx: 330, cy: 175, r: 20,
    color: '#a8d8f0', glow: 'rgba(168,216,240,0.5)',
    labelAbove: false,
    label: ['University of', 'Manchester'],
    subtitle: 'MSc in Advanced Computer Science',
    subtitleW: 228,
    inProgress: true,
    title: 'University of Manchester',
    period: 'Sep 2025 – Sep 2026',
    badge: 'IN PROGRESS',
    bullets: [
      'MSc in Advanced Computer Science',
      'Term-1 Cumulative GPA: 75.5 / 100',
    ],
  },
  scholarship: {
    id: 'scholarship', cx: 128, cy: 65, r: 13,
    color: '#f5e070', glow: 'rgba(245,224,112,0.4)',
    labelAbove: false,
    label: ['Scholarship'],
    inProgress: true,
    title: 'Scholarship',
    period: '2025 – 2026',
    badge: '£8,000',
    bullets: [
      'Awarded the Global Futures Scholarship (£8,000)',
      'Student Ambassador for UoM (2025-2026)',
    ],
  },
  modules: {
    id: 'modules', cx: 330, cy: 50, r: 13,
    color: '#a8d8f0', glow: 'rgba(168,216,240,0.4)',
    labelAbove: false,
    label: ['Modules'],
    inProgress: true,
    title: 'Core Modules',
    period: '2025 – 2026',
    badge: null,
    bullets: [
      'Data Engineering Concepts and Data Engineering Technologies',
      'Formal Methods for Software Verification, Security and Computer Science, Software Security',
      'Secure Computer Architecture and Systems, Security and Privacy in AI',
      'Cognitive Robotics and Computer Vision, Transforming Text into Meaning',
    ],
  },
  project: {
    id: 'project', cx: 532, cy: 65, r: 13,
    color: '#88dbb8', glow: 'rgba(136,219,184,0.4)',
    labelAbove: false,
    label: ["Master's Project"],
    inProgress: true,
    title: "Master's Project",
    period: '2025 – 2026 (ongoing)',
    badge: 'ONGOING',
    bullets: [
      'Visualizing scales and modes in music theory',
      'In collaboration with the music school',
    ],
  },
}

// [fromId, toId, dashed]
const EDGES = [
  ['school',     'amrita',     false],
  ['amrita',     'community',  false],
  ['amrita',     'research',   false],
  ['amrita',     'academic',   false],
  ['amrita',     'industry',   false],
  ['amrita',     'manchester', false],
  ['manchester', 'scholarship',true],
  ['manchester', 'modules',    true],
  ['manchester', 'project',    true],
]

function edgePath(n1, n2) {
  return `M ${n1.cx} ${n1.cy} Q ${n1.cx} ${n2.cy} ${n2.cx} ${n2.cy}`
}

function NodeLabels({ node }) {
  const lineH = 15
  const lines = node.label.map((line, li) => {
    const y = node.labelAbove
      ? node.cy - node.r - 8 - (node.label.length - 1 - li) * lineH
      : node.cy + node.r + 14 + li * lineH
    return (
      <text key={li} x={node.cx} y={y} className={styles.nodeLabel}>
        {line}
      </text>
    )
  })

  if (node.subtitle) {
    const lastIdx = node.label.length - 1
    const lastY = node.labelAbove
      ? node.cy - node.r - 8 - 0 * lineH
      : node.cy + node.r + 14 + lastIdx * lineH
    const subtitleY = node.labelAbove ? lastY - lineH - 4 : lastY + lineH + 6
    const bw = (node.subtitleW ?? 180) + 20   // badge width with horizontal padding
    const bh = 20                              // badge height
    lines.push(
      <g key="subtitle">
        <rect
          x={node.cx - bw / 2}
          y={subtitleY - 14}
          width={bw}
          height={bh}
          rx="5"
          className={styles.subtitleBadge}
          style={{ '--nc': node.color }}
        />
        <text x={node.cx} y={subtitleY} className={styles.nodeSubtitle}>
          {node.subtitle}
        </text>
      </g>
    )
  }

  return lines
}

export default function EducationTree() {
  const [active, setActive] = useState(null)

  const handleNode = (e, id) => {
    e.stopPropagation()
    setActive(active === id ? null : id)
  }

  return (
    <div className={styles.treeWrap}>
      <svg
        viewBox={`0 0 ${TREE_W} ${TREE_H}`}
        className={styles.svg}
        onClick={() => setActive(null)}
      >
        {/* Edges */}
        {EDGES.map(([from, to, dashed]) => (
          <path
            key={`${from}-${to}`}
            d={edgePath(NODES[from], NODES[to])}
            className={`${styles.edge} ${dashed ? styles.edgeDashed : ''}`}
          />
        ))}

        {/* Nodes */}
        {Object.values(NODES).map((node) => (
          <g
            key={node.id}
            className={`${styles.node} ${active === node.id ? styles.nodeActive : ''} ${node.inProgress ? styles.nodeInProgress : ''}`}
            style={{ '--nc': node.color, '--ng': node.glow }}
            onClick={(e) => handleNode(e, node.id)}
          >
            {/* Pulse glow ring */}
            <circle cx={node.cx} cy={node.cy} r={node.r + 9} className={styles.nodeGlow} />
            {/* Main fill circle */}
            <circle cx={node.cx} cy={node.cy} r={node.r} className={styles.nodeCircle} />
            {/* Inner dot */}
            <circle cx={node.cx} cy={node.cy} r={node.r * 0.32} className={styles.nodeDot} />
            {/* Labels */}
            <NodeLabels node={node} />
          </g>
        ))}
      </svg>

      {active && (
        <Tooltip
          node={NODES[active]}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  )
}

function Tooltip({ node, onClose }) {
  return (
    <div className={styles.tooltipOverlay} onClick={onClose}>
    <div
      className={styles.tooltip}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.tipHeader}>
        <div className={styles.tipMeta}>
          <span className={styles.tipPeriod}>{node.period}</span>
          <h3 className={styles.tipTitle}>{node.title}</h3>
        </div>
        {node.badge && (
          <span className={styles.tipBadge} style={{ borderColor: node.color, color: node.color }}>
            {node.badge}
          </span>
        )}
        <button className={styles.tipClose} onClick={onClose}>×</button>
      </div>
      <ul className={styles.tipList}>
        {node.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
    </div>
  )
}
