import v1 from '../assets/music/v1.mp4'
import v2 from '../assets/music/v2.mp4'
import v3 from '../assets/music/v3.mp3'
import v4 from '../assets/music/v4.ogg'

// type: 'video' | 'audio'
// shellColor: the main cassette body colour
// glowColor:  rgba glow for hover/modal
// labelBg:    the centre label area background
// labelColor: text colour on the label
// src: imported asset — add more entries as you drop files into assets/music/

export const musicPieces = [
  {
    id: 1,
    src: v1,
    type: 'video',
    title: 'V1',
    genre: 'Recording',
    feeling: '',
    shellColor: '#7ec8e3',
    glowColor: 'rgba(126, 200, 227, 0.55)',
    labelBg: 'rgba(232, 246, 255, 0.96)',
    labelColor: '#0a1830',
  },
  {
    id: 2,
    src: v2,
    type: 'video',
    title: 'V2',
    genre: 'Recording',
    feeling: '',
    shellColor: '#f0c060',
    glowColor: 'rgba(240, 192, 96, 0.55)',
    labelBg: 'rgba(255, 250, 230, 0.96)',
    labelColor: '#1e1200',
  },
  {
    id: 3,
    src: v3,
    type: 'audio',
    title: 'V3',
    genre: 'Recording',
    feeling: '',
    shellColor: '#88dbb8',
    glowColor: 'rgba(136, 219, 184, 0.55)',
    labelBg: 'rgba(228, 252, 242, 0.96)',
    labelColor: '#041a0e',
  },
  {
    id: 4,
    src: v4,
    type: 'audio',
    title: 'V4',
    genre: 'Recording',
    feeling: '',
    shellColor: '#c4a8f0',
    glowColor: 'rgba(196, 168, 240, 0.55)',
    labelBg: 'rgba(244, 238, 255, 0.96)',
    labelColor: '#140828',
  },
]
