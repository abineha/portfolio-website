import { useState, useCallback } from 'react'
import MenuButton from '../components/MenuButton'
import FanMenu from '../components/FanMenu'
import BottomBar from '../components/BottomBar'
import NameBanner from '../components/NameBanner'
import Namecard from '../components/Namecard'
import styles from './Home.module.css'

export default function Home() {
  const [fanOpen, setFanOpen] = useState(false)
  const [namecard, setNamecard] = useState(null) // 'about' | 'contact' | null

  const toggleFan  = useCallback(() => setFanOpen(p => !p), [])
  const closeFan   = useCallback(() => setFanOpen(false), [])
  const closeCard  = useCallback(() => setNamecard(null), [])

  return (
    <div className={styles.page}>
      {/* Top-left: menu button + fan */}
      <div className={styles.menuArea}>
        <MenuButton mode="menu" fanOpen={fanOpen} onToggle={toggleFan} />
        <FanMenu isOpen={fanOpen} onClose={closeFan} />
      </div>

      {/* Top-right: name banner */}
      <NameBanner />

      {/* Bottom-right: about / contact / volume */}
      <BottomBar
        onAbout={() => { closeFan(); setNamecard('about') }}
        onContact={() => { closeFan(); setNamecard('contact') }}
      />

      {/* Namecard popup */}
      {namecard && (
        <Namecard type={namecard} onClose={closeCard} />
      )}
    </div>
  )
}
