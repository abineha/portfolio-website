import { Suspense, lazy, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { AudioProvider } from './components/AudioManager'
import BackgroundVideo from './components/BackgroundVideo'
import SplashScreen from './components/SplashScreen'
import CustomCursor from './components/CustomCursor'
import { useAudio } from './components/AudioManager'
import { TransitionContext } from './components/TransitionContext'
import styles from './App.module.css'

const Home = lazy(() => import('./pages/Home'))
const Education = lazy(() => import('./pages/Education'))
const WorkExperience = lazy(() => import('./pages/WorkExperience'))
const Publications = lazy(() => import('./pages/Publications'))
const Projects = lazy(() => import('./pages/Projects'))
const ArtStuff = lazy(() => import('./pages/ArtStuff'))
const MusicStuff = lazy(() => import('./pages/MusicStuff'))

const VIDEO_MAP = {
  '/':               '/assets/videos/home.mp4',
  '/education':      '/assets/videos/education-bg.mp4',
  '/work-experience':'/assets/videos/work-bg.mp4',
  '/publications':   '/assets/videos/publications-bg.mp4',
  '/projects':       '/assets/videos/projects-bg.mp4',
  '/art-stuff':      '/assets/videos/art-bg.mp4',
  '/music-stuff':    '/assets/videos/music-bg.mp4',
}

function AppInner() {
  const location = useLocation()
  const navigate = useNavigate()
  const { started } = useAudio()
  const [flashState, setFlashState] = useState('idle') // 'idle' | 'in' | 'out'

  const videoSrc = VIDEO_MAP[location.pathname] || '/assets/videos/home.mp4'

  // Fade to black → navigate → fade from black
  const navigateTo = (path) => {
    if (path === location.pathname) return
    setFlashState('in')
    setTimeout(() => {
      navigate(path)
      setFlashState('out')
      setTimeout(() => setFlashState('idle'), 450)
    }, 320)
  }

  if (!started) return <SplashScreen />

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      <BackgroundVideo src={videoSrc} />
      <div className={styles.pageWrapper}>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/"                element={<Home />} />
            <Route path="/education"       element={<Education />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/publications"    element={<Publications />} />
            <Route path="/projects"        element={<Projects />} />
            <Route path="/art-stuff"       element={<ArtStuff />} />
            <Route path="/music-stuff"     element={<MusicStuff />} />
          </Routes>
        </Suspense>
      </div>
      {flashState !== 'idle' && (
        <div className={`${styles.flashOverlay} ${flashState === 'in' ? styles.flashIn : styles.flashOut}`} />
      )}
    </TransitionContext.Provider>
  )
}

export default function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
        <CustomCursor />
        <AppInner />
      </BrowserRouter>
    </AudioProvider>
  )
}
