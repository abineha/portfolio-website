import SubPageLayout from '../components/SubPageLayout'
import styles from './MusicStuff.module.css'

export default function MusicStuff() {
  return (
    <SubPageLayout title="Music Stuff">
      <p className="coming-soon">Coming Soon</p>
      {/* TODO: Add your music content here — embed players, links, recordings */}
      <div className="placeholder-cards">
        <div className="placeholder-card">
          <h3>Track / Composition Title</h3>
          <p>Genre · Instrument(s) · Year<br />Embed your audio player or link here.</p>
        </div>
        <div className="placeholder-card">
          <h3>Another Piece</h3>
          <p>Genre · Instrument(s) · Year<br />Embed your audio player or link here.</p>
        </div>
      </div>
    </SubPageLayout>
  )
}
