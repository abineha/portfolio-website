import SubPageLayout from '../components/SubPageLayout'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <SubPageLayout title="Projects">
      <p className="coming-soon">Coming Soon</p>
      {/* TODO: Add your content here */}
      <div className={styles.grid}>
        {[1, 2, 3, 4].map(n => (
          <div key={n} className={styles.tile}>
            <div className={styles.tileImg} />
            <h3 className={styles.tileTitle}>Project {n}</h3>
            <p className={styles.tileDesc}>Short description of this project and the tech stack used.</p>
            <div className={styles.tileTags}>
              <span className={styles.tag}>React</span>
              <span className={styles.tag}>Python</span>
            </div>
          </div>
        ))}
      </div>
    </SubPageLayout>
  )
}
