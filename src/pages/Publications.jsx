import SubPageLayout from '../components/SubPageLayout'

export default function Publications() {
  return (
    <SubPageLayout title="Publications">
      <p className="coming-soon">Coming Soon</p>
      {/* TODO: Add your content here */}
      <div className="placeholder-cards">
        <div className="placeholder-card">
          <h3>Paper Title Goes Here</h3>
          <p>Authors · Conference / Journal · 20XX<br />Short abstract or description of the work.</p>
        </div>
        <div className="placeholder-card">
          <h3>Another Paper Title</h3>
          <p>Authors · Workshop · 20XX<br />Short abstract or description of the work.</p>
        </div>
      </div>
    </SubPageLayout>
  )
}
