import MenuButton from './MenuButton'
import styles from './SubPageLayout.module.css'

export default function SubPageLayout({ title, children, wide = false }) {
  return (
    <div className={styles.page}>
      {/* Top-left: home button */}
      <div className={styles.homeArea}>
        <MenuButton mode="home" />
      </div>

      {/* Centered scrollable content panel */}
      <div className={styles.panelWrap}>
        <div className={`${styles.panel} ${wide ? styles.panelWide : ''}`}>
          <h1 className={styles.pageTitle}>{title}</h1>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
