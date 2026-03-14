export const experienceData = [
  {
    title: 'Consulting Analyst',
    org: 'Practera',
    type: 'consulting',
    dateStart: 'Feb 2026',
    dateEnd: 'Mar 2026',
    location: 'Manchester, UK',
    summary:
      'Strategy consultant on a live industry project for a UK sports-tech startup preparing for angel investment — delivering market research and competitive analysis for international expansion.',
    achievements: [
      'Built end-to-end Python data pipeline scraping thousands of real-time competitor app reviews with NLP sentiment scoring and keyword classification for actionable market insights.',
      'Conducted 9-country unmet needs analysis combining desk research, user review data, and community forum analysis to identify priority expansion markets.',
      'Synthesised findings into investor-ready strategic recommendations translating raw data into clear business priorities.',
      'Delivered final report under tight timelines with positive client feedback on research rigour, analytical depth, and strategic clarity.',
    ],
    tags: ['Python', 'NLP', 'Market Research', 'Strategy'],
  },
  {
    title: 'Engineering Intern',
    org: 'Adapt.io',
    type: 'engineering',
    dateStart: 'Jan 2025',
    dateEnd: 'Mar 2025',
    location: 'Remote',
    summary:
      'Streamlined deployment and enhanced data pipeline reliability for a B2B prospecting platform helping discover key decision-makers.',
    achievements: [
      'Designed CI/CD pipelines using GitHub Actions for containerized deployments, migrating from AWS CodeCommit to GitHub with versioned builds via GCP Artifact Registry and Cloud Storage.',
      'Enhanced data enrichment and normalization reducing processing errors and improving data quality across pipelines.',
      'Led infrastructure setup for Adapt Web including GCP Load Balancer configuration, App Engine deployment, and secure static site hosting.',
    ],
    tags: ['CI/CD', 'GitHub Actions', 'GCP', 'Docker', 'Python'],
  },
  {
    title: 'Project Intern (AI Research)',
    org: 'Lam Research',
    type: 'research',
    dateStart: 'Aug 2023',
    dateEnd: 'Oct 2023',
    location: 'Remote (Fremont, CA)',
    summary:
      'Selected as one of three interns for an AI-driven research project automating software test case repository maintenance, work published in IEEE Potentials.',
    achievements: [
      'Generated user-focused test cases from functional requirements increasing test coverage by 25%.',
      'Developed automated tool using Abstract Syntax Trees to generate exhaustive test cases for C, C++, Python, Java, and Smalltalk with user-defined thresholds and logic paths.',
      'Co-authored "User Story-Based Automatic Test Case Classification and Prioritization Using NLP-Based Deep Learning" published in IEEE Potentials magazine.',
    ],
    tags: ['Python', 'NLP', 'AST', 'Deep Learning', 'IEEE Published'],
  },
  {
    title: 'Core Team Member',
    org: 'Google Developer Students Club Coimbatore',
    type: 'leadership',
    dateStart: 'Sep 2022',
    dateEnd: 'Aug 2024',
    location: 'Coimbatore, India',
    summary:
      'Progressed from event management to executive leadership building community around AI, Web, and Cloud Computing.',
    achievements: [
      'As Executive Team Member 2023–2024: planned and coordinated large-scale technical events, supported project initiatives, and strengthened student engagement across AI, Web, and Cloud domains.',
      'As Event Management Team Member 2022–2023: organised hands-on workshops including Flutter dev workshops, alumni tech talks, coding challenges, and beginner-friendly sessions on emerging technologies.',
    ],
    tags: ['Leadership', 'Event Management', 'Community Building'],
  },
]

export const TYPE_META = {
  engineering: { label: 'Engineering', color: '#d4af37', glow: 'rgba(212,175,55,0.45)' },
  research:    { label: 'Research',    color: '#9457eb', glow: 'rgba(148,87,235,0.45)'  },
  consulting:  { label: 'Consulting',  color: '#3882eb', glow: 'rgba(56,130,235,0.45)'  },
  leadership:  { label: 'Leadership',  color: '#2db982', glow: 'rgba(45,185,130,0.45)'  },
}
