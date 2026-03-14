// Accent colours pulled from the site's existing node palette
export const DOMAIN_COLORS = {
  'ai-ml':           '#7ec8e3',   // site cyan (main accent)
  'cybersecurity':   '#c4a8f0',   // soft purple (education node)
  'data-algorithms': '#88dbb8',   // mint green (education node)
}

export const DOMAIN_GLOWS = {
  'ai-ml':           'rgba(126, 200, 227, 0.55)',
  'cybersecurity':   'rgba(196, 168, 240, 0.55)',
  'data-algorithms': 'rgba(136, 219, 184, 0.55)',
}

export const DOMAIN_LABELS = {
  'ai-ml':           'AI / ML',
  'cybersecurity':   'Cybersecurity',
  'data-algorithms': 'Data & Algo',
}

// Ordered newest first. Add future entries at the top.
export const publications = [
  {
    id: 1,
    title: 'CardioGuard: Athlete-Focused Real-Time ECG Monitoring and Arrhythmia Detection System',
    venue: '6th International Conference on Control, Communication and Computing (ICCC)',
    date: 'May 25, 2025',
    domain: 'ai-ml',
    coAuthors: [
      'M Jaswanth Reddy',
      'Mathamgi Nair',
      'Rishabh Parasher',
      'S Vishnu',
      'Vishnuvarthan Rajagopal',
    ],
    contributions: [
      'Enabled seamless heart-rate monitoring and accurate arrhythmia detection during training and competitions through single-lead ECG data acquisition.',
      'Integrated edge computing for real-time arrhythmia detection enabling rapid identification of irregular heartbeats without cloud dependency, with edge-based preprocessing using advanced signal processing for noise reduction and waveform analysis.',
      'Conducted performance evaluation of eight curated ML models for signal data detection and classification, identifying the most effective model for high accuracy, low computation time, and minimal false positives.',
    ],
    link: '',
  },
  {
    id: 2,
    title: 'Efficient Fuzzy Trajectory Clustering Algorithm (EFTCA) for Electing Optimum Clusters',
    venue: '7th International Conference on Recent Trends in Image Processing and Pattern Recognition (RTIP2R)',
    date: 'Dec 19, 2024',
    domain: 'data-algorithms',
    coAuthors: [
      'Suruthi Lavanya',
      'Sabarish B A',
      'Arunkumar C',
      'Deepak Menan',
    ],
    contributions: [
      'Enhanced clustering of spatial trajectory data addressing challenges of varying sampling rates, uncertainty, and spatial autocorrelation.',
      'Normalized trajectories of different lengths using the Douglas-Peucker algorithm and determined optimal cluster count with fuzzy partition coefficients, managing uncertainty and redundancy.',
      'Demonstrated EFTCA significantly outperforms conventional techniques with ARI and FMS values approximately 1.31 times higher, validated using researcher-generated proof-of-concept data.',
    ],
    link: '',
  },
  {
    id: 3,
    title: 'User Story-Based Automatic Test Case Classification and Prioritization Using Natural Language Processing-Based Deep Learning',
    venue: 'IEEE Potentials (Volume 43, Issue 5)',
    date: 'Jan 3, 2024',
    domain: 'ai-ml',
    coAuthors: [
      'Suruthi Lavanya A',
      'Sabarish B A',
      'Arun Kumar C',
    ],
    contributions: [
      'Drafted a dataset of 700+ user stories for extraction and classification using NLP and text processing techniques.',
      'Developed ML model using Naive Bayes classifier for efficient classification and prioritization into Arrange, Act, and Assert categories.',
      'Enhanced accuracy by implementing a neural network model for ternary classification ensuring each phase — keyword extraction, repository generation, and classification — was independent and robust.',
    ],
    link: '',
  },
  {
    id: 4,
    title: 'An Investigational Approach for Exploitation Using Client-Side Attack',
    venue: 'Kongzhi yu Juece / Control and Decision',
    date: 'May 2, 2023',
    domain: 'cybersecurity',
    coAuthors: [
      'Suruthi Lavanya A',
      'Raahul Varman',
      'Senthilkumar Mathi',
    ],
    contributions: [
      'Analyzed client-side web attack methods and vulnerabilities focusing on exploitation techniques and attack rates.',
      'Conducted comparative study of ethical hacking Linux distributions evaluating Kali Linux, Parrot OS, DEFT Linux, and NodeZero Linux.',
      'Developed an executable with the FatRat tool embedding a malware payload to demonstrate remote system control via user-triggered attacks.',
    ],
    link: '',
  },
]
