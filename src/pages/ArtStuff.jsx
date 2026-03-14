import SubPageLayout from '../components/SubPageLayout'
import styles from './ArtStuff.module.css'

export default function ArtStuff() {
  return (
    <SubPageLayout title="Art Stuff">
      <p className="coming-soon">Coming Soon</p>
      {/* TODO: Add your artwork images here */}
      <div className={styles.gallery}>
        {[1, 2, 3, 4, 5, 6].map(n => (
          <div key={n} className={styles.cell}>
            <div className={styles.placeholder} />
          </div>
        ))}
      </div>
    </SubPageLayout>
  )
}
