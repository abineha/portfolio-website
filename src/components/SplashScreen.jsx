import { useAudio } from './AudioManager'
import BackgroundVideo from './BackgroundVideo'
import styles from './SplashScreen.module.css'

export default function SplashScreen() {
  const { start } = useAudio()
  return (
    <div className={styles.splash} onClick={start}>
      <BackgroundVideo src="/assets/videos/splash.mp4" />
      <div className={styles.content}>
        <h1 className={styles.title}>Abineha Prabu</h1>
        <p className={styles.prompt}>Click anywhere to view the portfolio</p>
      </div>
    </div>
  )
}
