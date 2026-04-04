import bocImg      from '../assets/art/BOC.jpg'
import sakuraImg   from '../assets/art/Sakura.jpg'
import gengImg     from '../assets/art/geng.jpeg'
import pengImg     from '../assets/art/peng.jpeg'
import lookbackVid from '../assets/art/Lookback.mp4'
import cringVid    from '../assets/art/cring.mp4'
import nooTimeVid  from '../assets/art/noo timee.mp4'
import sedVid      from '../assets/art/sed.mp4'
import vgVid       from '../assets/art/vg.mp4'
import weePriVid   from '../assets/art/wee_pri.mp4'

// type: 'image' | 'video'
// size: 'portrait' (3:4) | 'landscape' (4:3) | 'square' (1:1)
// tilt: degrees of rotation (-8 to +8 recommended)
// pinColor: the pushpin colour

export const artPieces = [
  {
    id: 1,
    src: bocImg,
    type: 'image',
    title: 'BOC',
    feeling: '',
    tilt: -4,
    size: 'portrait',
    pinColor: '#f0c060',
  },
  {
    id: 2,
    src: sakuraImg,
    type: 'image',
    title: 'Sakura',
    feeling: '',
    tilt: 2,
    size: 'portrait',
    pinColor: '#f0a8c0',
  },
  {
    id: 3,
    src: gengImg,
    type: 'image',
    title: 'Geng',
    feeling: '',
    tilt: 3,
    size: 'portrait',
    pinColor: '#7ec8e3',
  },
  {
    id: 4,
    src: pengImg,
    type: 'image',
    title: 'Peng',
    feeling: '',
    tilt: -2,
    size: 'portrait',
    pinColor: '#88dbb8',
  },
  {
    id: 5,
    src: lookbackVid,
    type: 'video',
    title: 'Lookback',
    feeling: '',
    tilt: 5,
    size: 'landscape',
    pinColor: '#c4a8f0',
    previewTime: 1,
  },
  {
    id: 6,
    src: cringVid,
    type: 'video',
    title: 'Cring',
    feeling: '',
    tilt: -3,
    size: 'landscape',
    pinColor: '#88dbb8',
    previewTime: 1,
  },
  {
    id: 7,
    src: nooTimeVid,
    type: 'video',
    title: 'Noo Timee',
    feeling: '',
    tilt: -2,
    size: 'landscape',
    pinColor: '#f0c060',
    previewTime: 3,
  },
  {
    id: 8,
    src: sedVid,
    type: 'video',
    title: 'Sed',
    feeling: '',
    tilt: 4,
    size: 'landscape',
    pinColor: '#7ec8e3',
    previewTime: 1,
  },
  {
    id: 9,
    src: vgVid,
    type: 'video',
    title: 'VG',
    feeling: '',
    tilt: -5,
    size: 'landscape',
    pinColor: '#f0a8c0',
    previewTime: 1,
  },
  {
    id: 10,
    src: weePriVid,
    type: 'video',
    title: 'Wee Pri',
    feeling: '',
    tilt: 3,
    size: 'landscape',
    pinColor: '#c4a8f0',
    previewTime: 1,
  },
]
