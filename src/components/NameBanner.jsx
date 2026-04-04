import styles from './NameBanner.module.css'

const LETTERS = [...'Abineha  Prabu']

/**
 * Top-right floating name banner — Genshin-style nameplate.
 *
 * TODO: Replace this CSS shape with:
 *   <img src="/assets/banners/name-banner.png" />
 *   Recommended size: ~320×110px transparent PNG
 */
export default function NameBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.ornament}><span>◆</span></div>
      <div className={styles.nameRow}>
        {LETTERS.map((char, i) => (
          <span
            key={i}
            className={styles.letter}
            style={{ '--i': i }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
      <p className={styles.subtitle}>Master's Student in Computer Science </p>
      <p className={styles.quote}>To keep creating, even when all that remains are scraps.</p>
      <div className={styles.ornament}><span>◆</span></div>
    </div>
  )
}
