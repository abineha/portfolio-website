import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react'
import { Howl } from 'howler'

const AudioCtx = createContext(null)

export function useAudio() {
  return useContext(AudioCtx)
}

export function AudioProvider({ children }) {
  const howlRef = useRef(null)
  const clickSoundRef = useRef(null)
  const closeSoundRef = useRef(null)
  const [volume, setVolumeState] = useState(0.3)
  const [muted, setMuted] = useState(false)
  const [started, setStarted] = useState(false)

  const start = useCallback(() => {
    if (howlRef.current) return
    const h = new Howl({
      src: ['/assets/audio/musik.mp3'],
      loop: true,
      volume: 0.3,
      autoplay: true,
    })
    howlRef.current = h

    clickSoundRef.current = new Howl({
      src: ['/assets/audio/clik.mp3'],
      volume: 0.55,
      preload: true,
    })

    closeSoundRef.current = new Howl({
      src: ['/assets/audio/x.mp3'],
      volume: 0.55,
      preload: true,
    })

    setStarted(true)
  }, [])

  // Global click SFX — close sound for [data-sound="close"], regular click for everything else
  useEffect(() => {
    const handler = (e) => {
      const btn = e.target.closest('button, a, [role="button"]')
      if (!btn) return

      if (btn.dataset.sound === 'close' && closeSoundRef.current) {
        closeSoundRef.current.stop()
        closeSoundRef.current.play()
      } else if (clickSoundRef.current) {
        clickSoundRef.current.stop()
        clickSoundRef.current.play()
      }
    }
    // capture: true — fires before any stopPropagation() in child components
    document.addEventListener('mousedown', handler, true)
    return () => document.removeEventListener('mousedown', handler, true)
  }, [])

  const setVolume = useCallback((v) => {
    const clamped = Math.max(0, Math.min(1, v))
    setVolumeState(clamped)
    if (howlRef.current) howlRef.current.volume(clamped)
  }, [])

  const toggleMute = useCallback(() => {
    setMuted(prev => {
      const next = !prev
      if (howlRef.current) howlRef.current.mute(next)
      return next
    })
  }, [])

  useEffect(() => {
    return () => {
      if (howlRef.current) {
        howlRef.current.unload()
        howlRef.current = null
      }
    }
  }, [])

  return (
    <AudioCtx.Provider value={{ started, start, volume, setVolume, muted, toggleMute }}>
      {children}
    </AudioCtx.Provider>
  )
}
