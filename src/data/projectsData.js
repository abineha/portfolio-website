// ── 5-colour cycling palette for frame mouldings ─────────────────────────────
export const FRAME_PALETTE = [
  { color: '#7ec8e3', glow: 'rgba(126, 200, 227, 0.52)' },  // sky blue
  { color: '#f0c060', glow: 'rgba(240, 192, 96,  0.52)' },  // golden
  { color: '#88dbb8', glow: 'rgba(136, 219, 184, 0.52)' },  // mint
  { color: '#c4a8f0', glow: 'rgba(196, 168, 240, 0.52)' },  // lavender
  { color: '#f0a8c0', glow: 'rgba(240, 168, 192, 0.52)' },  // rose
]

export const DOMAIN_COLORS = {
  engineering:   '#f0c060',
  'ai-ml':       '#7ec8e3',
  tools:         '#88dbb8',
  cybersecurity: '#c4a8f0',
}

export const DOMAIN_LABELS = {
  engineering:   'Engineering',
  'ai-ml':       'AI / ML',
  tools:         'Tools',
  cybersecurity: 'Cybersecurity',
}

export const TOTAL_SLOTS = 22

// size: 'large' (2col×2row) | 'wide' (2col×1row) | 'tall' (1col×2row) | 'small' (1col×1row)
// Ordered newest first. Add future projects at the top.
// media (optional): array of { type: 'image'|'video', src: '/assets/projects/...' , caption: '' }
//   e.g.  media: [{ type: 'image', src: '/assets/projects/cardioguard-1.png', caption: 'ECG signal pipeline' }]
export const projects = [
  {
    id: 1,
    title: 'Music Theory Visualizer',
    status: 'in-progress',
    domain: 'tools',
    size: 'tall',
    icon: '🎵',
    summary: 'Masters project at University of Manchester — visualizing scales and modes in music theory in collaboration with the music school. An interdisciplinary exploration of how interactive visuals can make music theory intuitive.',
    contributions: ['Currently in development.'],
    tags: ['React', 'Visualization', 'Music Theory', 'Interdisciplinary'],
    links: {},
  },
  {
    id: 2,
    title: 'TLDR Chrome Extension',
    status: 'completed',
    domain: 'tools',
    size: 'small',
    icon: '📝',
    summary: 'Chrome extension delivering instant text summarization in two modes — offline NLP for privacy and AI-powered BART summaries via Hugging Face for contextual quality.',
    contributions: [
      'Built dual-mode summarization: offline NLP for privacy-conscious users and AI-powered BART summaries via Hugging Face for high-quality contextual results.',
      'Designed a responsive pixel-art UI with bullet-point summaries, keyword highlighting, copy-to-clipboard, and auto-saving for enhanced usability.',
      'Implemented user-controlled AI integration allowing personal API keys with guaranteed offline fallback for privacy and reliability.',
    ],
    tags: ['JavaScript', 'HTML/CSS', 'Hugging Face', 'NLP'],
    links: { github: 'https://github.com/abineha/TLDR-Extension' },
    media: [
  { type: 'image', src: '/assets/projects/2_1.png', caption: 'TLDR Chrome Extension - AI-Powered Text Summarizer' },
  { type: 'image', src: '/assets/projects/2_2.png', caption: 'Settings page where API connection is established' },
  { type: 'image', src: '/assets/projects/2_3.png', caption: 'Main popup of chrome extension to summarize highlighted paragraph' },
  { type: 'image', src: '/assets/projects/2_4.png', caption: 'Mode Comparison' },
]
  },
  {
    id: 3,
    title: 'CardioGuard: Real-Time Arrhythmia Detection for Athletes',
    status: 'completed',
    domain: 'ai-ml',
    size: 'large',
    icon: '❤️',
    summary: 'End-to-end cardiac arrhythmia detection system, taking a CNN model from research to real-time embedded deployment on resource-constrained hardware.',
    contributions: [
      'Trained deep learning models on ECG signal data (MIT-BIH dataset) for binary detection and multi-class classification of cardiac conditions.',
      'Applied post-training model quantisation using TensorFlow Lite, reducing model size and inference latency for efficient on-device execution.',
      'Developed a C++ embedded inference engine to run the quantised model on microcontrollers, enabling real-time predictions without cloud dependency.',
      'Integrated hardware including MAX30003 ECG sensor, Arduino, and STM32 microcontroller for live signal acquisition and processing.',
      'Designed a lightweight, wearable system for continuous ECG monitoring with low-latency performance suitable for athlete use cases.',
      'Collaborated with medical professionals to validate feasibility and align the system with healthcare requirements.',
      'Built a simplified Clinical Assessment Tool (CAT) interface to make outputs interpretable for non-technical users.',
    ],
    tags: ['Python', 'TensorFlow', 'C++', 'Embedded Systems', 'CNN'],
    links: { github: 'https://github.com/abineha/CardioGuard' },
    media: [
  { type: 'image', src: '/assets/projects/3_1.png', caption: 'CardioGuard Architecture for Arrhythmia Detection and Notification.' },
  { type: 'image', src: '/assets/projects/3_2.png', caption: 'Training Performance of Different Models' },
  { type: 'image', src: '/assets/projects/3_3.png', caption: 'Poster for CardioGuard' },
  { type: 'image', src: '/assets/projects/3_4.png', caption: 'Block diagram of the proposed CardioGuard device' },
  { type: 'image', src: '/assets/projects/3_5.png', caption: 'Open top view of CardioGuard device prototype' },
  { type: 'image', src: '/assets/projects/3_6.png', caption: 'Closed top view of CardioGuard device prototype' },
]
  },
  {
    id: 4,
    title: 'Aircraft Equipment Performance Evaluation & Calibration System',
    status: 'completed',
    domain: 'engineering',
    size: 'wide',
    icon: '✈️',
    summary: 'Data analysis and calibration system built for the Indian Air Force, processing 30,000+ equipment test records with automated scoring, trend visualisation, and fault detection.',
    contributions: [
      'Processed and cleaned 30,000+ equipment test records, resolving duplicates, formatting errors, and invalid entries for reliable downstream analysis.',
      'Built a dynamic analysis system with filtering, trend visualisation, and colour-coded performance indicators based on tolerance thresholds.',
      'Designed custom scoring algorithms to quantify equipment performance, automatically flagging anomalies and calibration deviations.',
      'Generated automated performance scorecards with visual alerts (red/orange/green), improving fault detection and decision-making efficiency.',
      'Collaborated directly with Indian Air Force officers, incorporating feedback to refine usability and real-world applicability.',
      'Presented the solution to senior stakeholders, demonstrating technical delivery and communication to non-technical audiences.',
    ],
    tags: ['Python', 'Data Analysis', 'Node.js', 'Visualisation'],
    links: {},
    restricted: true,
    media: [  
      { type: 'image', src: '/assets/projects/4_1.png', caption: 'Initial Screen to display clean and unclean data' },
      { type: 'image', src: '/assets/projects/4_2.png', caption: 'Data Filtering Options' },
]
  },
  {
    id: 5,
    title: 'Hospital Support Ticketing System',
    status: 'completed',
    domain: 'engineering',
    size: 'wide',
    icon: '🏥',
    summary: 'Full-stack support ticketing system for 10+ hospital departments at Sri Ramakrishna Hospital, streamlining issue resolution workflows and reducing response times.',
    contributions: [
      'Designed and implemented an end-to-end ticketing system transforming operational data into actionable insights across 10+ hospital departments.',
      'Implemented JWT-based authentication and integrated Sentry for real-time error tracking, lowering debugging time by over 30%.',
      'Built an interactive dashboard with responsive UI components and real-time status updates, enabling stakeholders to visualise trends and track priorities.',
    ],
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Sentry', 'JWT'],
    links: { github: 'https://github.com/abineha/hospitalticketsystem' },
    media: [  
      { type: 'image', src: '/assets/projects/5_1.png', caption: 'Dashboard of submitted tickets' },
    ]
  },
  {
    id: 6,
    title: 'Geo-Localisation System',
    status: 'completed',
    domain: 'ai-ml',
    size: 'small',
    icon: '🌍',
    summary: 'A deep learning system for matching drone images to satellite imagery, enabling accurate geo-localisation and navigation across different viewpoints.',
    contributions: [
      'Built a cross-view image matching system to localise drone images against satellite maps.',
      'Implemented a Hard Exemplar Reweighting Triplet Loss to improve performance on visually similar but geographically different locations.',
      'Fine-tuned multiple pretrained models (ResNet, VGG16, DenseNet) on the University-1652 dataset with 160k+ distractor images.',
      'Handled cross-domain visual differences using separate model backbones for drone and satellite views.',
    ],
    tags: ['Python', 'PyTorch', 'Computer Vision', 'Deep Learning'],
    links: { github: 'https://github.com/abineha/Geo-Localization' },
    media: [
  { type: 'image', src: '/assets/projects/6_1.png', caption: 'ResNet50 Model Architecture' },
  { type: 'image', src: '/assets/projects/6_2.png', caption: 'Training Layers' },
  { type: 'image', src: '/assets/projects/6_3.png', caption: 'Classification of Negatives' },
  { type: 'image', src: '/assets/projects/6_4.png', caption: 'Learning Process' },
  { type: 'image', src: '/assets/projects/6_5.png', caption: 'Loss of a triplet' },
  { type: 'image', src: '/assets/projects/6_6.png', caption: 'Triplet Conditions' },
  { type: 'image', src: '/assets/projects/6_7.png', caption: 'Channel Attention' },
  { type: 'image', src: '/assets/projects/6_8.png', caption: 'Mappings' },
  { type: 'image', src: '/assets/projects/6_9.png', caption: 'Feature Mappings' },
]
  },
  {
    id: 7,
    title: 'Chess Engine Visualisation & Move Optimisation',
    status: 'completed',
    domain: 'tools',
    size: 'tall',
    icon: '♟️',
    summary: 'Interactive chess engine with AI opponent using NegaMax and alpha-beta pruning, paired with a Matplotlib visualisation system for board evaluations and optimal strategies.',
    contributions: [
      'Built an interactive chess engine supporting player vs AI gameplay using the NegaMax algorithm with alpha-beta pruning for efficient move evaluation.',
      'Modelled chess positions as a graph structure — board states as vertices and legal moves as edges — enabling structured exploration of game states.',
      'Applied backtracking and minimax-based decision-making to simulate optimal move sequences and improve AI performance.',
      'Developed a visualisation system using Matplotlib to illustrate piece movements, board evaluations, and optimal strategies.',
      'Simulated turn-based opening strategies, enabling players to learn efficient move sequences and improve gameplay outcomes.',
    ],
    tags: ['Python', 'Algorithms', 'Matplotlib'],
    links: { github: 'https://github.com/abineha/Chess-optimal-moves-simulation' },
    media: [  
      { type: 'image', src: '/assets/projects/7_1.png', caption: 'Simulation of chess openings' },
      { type: 'image', src: '/assets/projects/7_2.png', caption: 'User vs AI Gameplay' },
      { type: 'image', src: '/assets/projects/7_3.png', caption: 'Graph algorithm of each chess piece' },
    ]
  },
  {
    id: 8,
    title: 'Pac-Man Game',
    status: 'completed',
    domain: 'engineering',
    size: 'small',
    icon: '👻',
    summary: 'Team-built Pac-Man clone in Java using libGDX, with personal responsibility for collision detection and tile map integration — the two systems every other game mechanic depends on.',
    contributions: [
      'Implemented tile-based collision detection by parsing .tmx map files using libGDX\'s TiledMapTileLayer, querying tile properties at runtime to determine walkable vs. blocked cells.',
      'Applied core Java OOP principles — encapsulating collision logic within dedicated sprite classes, leveraging inheritance from libGDX\'s Sprite base class, and separating concerns across GameScreen, Sprites, and asset-loading layers.',
      'Structured the project using Gradle\'s multi-module layout (core / desktop) for clean separation between game logic and platform-specific code.',
    ],
    tags: ['Java', 'libGDX', 'Game Dev', 'OOP'],
    links: { github: 'https://github.com/abineha/pacman-libgdx-og' },
    media: [
      { type: 'image', src: '/assets/projects/8_1.png', caption: 'Pac-Man Game Screen' },
      { type: 'image', src: '/assets/projects/8_2.png', caption: 'Board Layout to implement collision detection' },
      { type: 'image', src: '/assets/projects/8_3.png', caption: 'code for collision detection' },
      { type: 'image', src: '/assets/projects/8_4.png', caption: '(x,y) coordinates collision points' },
    ]
  },
  {
    id: 9,
    title: 'Battleship Game',
    status: 'completed',
    domain: 'engineering',
    size: 'large',
    icon: '🚢',
    summary: 'Fully-featured Battleship board game in C supporting single-player and multiplayer modes, with a 10×10 grid, 10 ships of varying sizes, randomised AI placement, and turn-based shot tracking.',
    contributions: [
      'Engineered both single-player and multiplayer modes — single-player uses automated ship placement with boundary and overlap validation; multiplayer supports two independent boards with sequential turns and hidden fleets.',
      'Implemented core game logic including hit/miss detection, ship-sinking confirmation, and win condition checking across all active vessels.',
      'Demonstrated strong fundamentals in memory management, arrays, and procedural programming in C throughout the project.',
    ],
    tags: ['C', 'Game Dev', 'Data Structures'],
    links: { github: 'https://github.com/abineha/Battleship-Game' },
    media: [
      { type: 'image', src: '/assets/projects/9_1.png', caption: '2 game modes' },
      { type: 'image', src: '/assets/projects/9_2.png', caption: 'Game board layout' },
      { type: 'image', src: '/assets/projects/9_3.png', caption: 'Ship placement validation' },
      { type: 'image', src: '/assets/projects/9_4.png', caption: 'Display of ship lol ' },
    ]
  },
  {
    id: 10,
    title: 'Requirements Classification & Prioritisation System',
    status: 'completed',
    domain: 'ai-ml',
    size: 'wide',
    icon: '📋',
    summary: 'Two-stage NLP pipeline to automatically classify and prioritise 700+ Agile user stories across multiple domains including banking, education, and retail.',
    contributions: [
      'Applied KeyBERT-based keyword extraction to identify high-signal terms from each user story, improving downstream classification quality.',
      'Developed a Naive Bayes classifier with CountVectorizer features for domain classification and prioritisation into AAA categories aligned with TDD principles.',
      'Enhanced performance with a CNN-based text classification model, comparing deep learning results against classical ML baselines.',
      'Designed an end-to-end workflow covering preprocessing, feature extraction, model training, evaluation, and result logging for comparative analysis.',
    ],
    tags: ['Python', 'NLP', 'KeyBERT', 'CNN'],
    links: {
      'github (NLP)': 'https://github.com/abineha/Text-based-classification',
      'github (DL)': 'https://github.com/abineha/deeplearning-Text-based-classification',
    },
    media: [
      { type: 'image', src: '/assets/projects/10_1.png', caption: 'The framework of keyword extraction and classification. DL: deep learning; ML: machine learning' },
      { type: 'image', src: '/assets/projects/10_2.png', caption: 'Repository generation' },
      { type: 'image', src: '/assets/projects/10_3.png', caption: 'The output for a given instance of a user story' },
      { type: 'image', src: '/assets/projects/10_4.png', caption: 'Model evaluation results' },
    ]

  },
  {
    id: 11,
    title: 'Mediterranean Cuisine RAG System',
    status: 'completed',
    domain: 'ai-ml',
    size: 'wide',
    icon: '🫙',
    summary: 'End-to-end RAG pipeline built from scratch — scraping a 230-document, 434,000-word corpus, benchmarking 9 embedding strategies, and deploying an interactive Streamlit app for live Q&A.',
    contributions: [
      'Built a full RAG pipeline from scratch: scraped a 230-document corpus, implemented 5 chunking strategies, and benchmarked 9 embedding model/strategy combinations using FAISS vector indices.',
      'Achieved MRR 1.0 and R@5 0.983 using all-mpnet-base-v2 with section-based chunking; implemented hybrid BM25+vector retrieval evaluated with P@5, ROUGE-L, BERTScore, and a custom faithfulness metric.',
      'Deployed an interactive 5-tab Streamlit app for live Q&A, benchmark evaluation, and side-by-side retrieval strategy comparison; structured prompts yielded a faithfulness score of 0.655.',
    ],
    tags: ['Python', 'FAISS', 'RAG', 'Streamlit', 'BERTScore'],
    links: { github: 'https://github.com/abineha/Mediterranean-Cuisine-RAG-System' },
    media: [
      { type: 'image', src: '/assets/projects/11_1.png', caption: 'The architecture of the RAG system' },
      { type: 'image', src: '/assets/projects/11_2.png', caption: 'Evaluation results for embedding strategies' },
      { type: 'image', src: '/assets/projects/11_3.png', caption: 'Evaluation results for retrieval strategies' },
      { type: 'image', src: '/assets/projects/11_4.png', caption: 'Streamlit app interface for live Q&A' },
      { type: 'image', src: '/assets/projects/11_5.png', caption: 'Side-by-side retrieval comparison in the Streamlit app' },
    ]
  },
  {
    id: 12,
    title: 'NHS Job Alert System',
    status: 'completed',
    domain: 'tools',
    size: 'small',
    icon: '🔔',
    summary: 'Monitors 1,500+ NHS job listing pages and sends real-time Telegram alerts when matching roles appear.',
    contributions: [
      'Designed a scalable scraping system across 1,500+ pages with intelligent sampling.',
      'Implemented deduplication and filtering to avoid redundant alerts.',
      'Delivered real-time Telegram notifications with multi-user support and telegram bots.',
      'Built robust scraping with fallback selectors and logging.',
    ],
    tags: ['Python', 'Automation', 'Web Scraping'],
    links: { github: 'https://github.com/abineha/NHS-job-alert-system' },
    media: [
      { type: 'image', src: '/assets/projects/12_1.png', caption: 'code to ethically scrap NHS job listings' },
      { type: 'image', src: '/assets/projects/12_2.png', caption: 'notification alert mechanism' },
      { type: 'image', src: '/assets/projects/12_3.jpeg', caption: 'Telegram notification on immediate job posting' },
    ]
  },
  {
    id: 13,
    title: 'Swim Apps Market Research & NLP Analysis',
    status: 'completed',
    domain: 'ai-ml',
    size: 'tall',
    icon: '🏊',
    summary: 'Competitive intelligence report for  analysing 2,576 user reviews across 7 swimming apps, using a full NLP pipeline built from scratch with sentiment scoring, theme classification, and 16 publication-ready charts.',
    contributions: [
      'Scraped 2,767 raw reviews from Apple App Store, Google Play, and Reddit (r/swimming, r/triathlon, r/openwater) across 7 competing apps, deduplicated to 2,576 clean records.',
      'Built a full NLP pipeline: VADER-based compound sentiment scoring, positive/negative/neutral labelling, and multi-label binary theme classification across 7 need categories.',
      'Produced a 546-line professional client report with per-app rating breakdowns, a 7×7 unmet needs matrix, ranked pain-point quotes, and 16 charts (word clouds, sentiment histograms, theme heatmaps).',
      'Key finding: Value for Money was the #1 driver of negative reviews (220 mentions, 37.8% negative rate on Google Play); MySwimPro identified as the most vulnerable incumbent with 262 negative reviews and a 2.47 average.',
    ],
    tags: ['Python', 'NLP', 'VADER', 'Web Scraping'],
    links: { github: 'https://github.com/abineha/swim_apps_research' },
    media: [
      { type: 'image', src: '/assets/projects/13_1.png', caption: 'Top-Level Findings' },
      { type: 'image', src: '/assets/projects/13_2.png', caption: 'Sources Scraped for user reviews' },
      { type: 'image', src: '/assets/projects/13_3.png', caption: 'Classification of Swimmer Needs' },
      { type: 'image', src: '/assets/projects/13_4.png', caption: 'Analysis of Unmet Needs' },
      { type: 'image', src: '/assets/projects/13_5.png', caption: 'Ranked Pain-Point Quotes' },
    ]
  },
  {
    id: 14,
    title: 'Blood–Brain Barrier Permeability Prediction',
    status: 'completed',
    domain: 'ai-ml',
    size: 'small',
    icon: '🧬',
    summary: 'ML and deep learning models predicting logBB (blood–brain barrier permeability) of pharmaceutical compounds from SMILES representations, achieving MSE: 0.30 and R²: 0.52 on test data.',
    contributions: [
      'Preprocessed a dataset of 1,058 molecules (B3DB), performing outlier removal, normalisation, and feature preparation.',
      'Implemented a Message Passing Neural Network (MPNN) to convert molecular graphs into learnable representations, capturing atom-level and bond-level features.',
      'Benchmarked MPNN, Graph Convolutional Networks (GCN), and classical regression models across feature sets and hyperparameters.',
      'Performed systematic hyperparameter tuning, achieving MSE: 0.30 and R²: 0.52 on unseen molecular data.',
    ],
    tags: ['Python', 'PyTorch', 'Graph Neural Networks', 'Healthcare AI'],
    links: { github: 'https://github.com/abineha/LogBB-Permeability-of-B3P3-Compounds' },
    media: [
      { type: 'image', src: '/assets/projects/14_1.png', caption: 'Sample input data' },
      { type: 'image', src: '/assets/projects/14_2.png', caption: 'Regression Results' },
      { type: 'image', src: '/assets/projects/14_3.png', caption: 'Graph convolution network architecture' },
      { type: 'image', src: '/assets/projects/14_4.png', caption: 'SMILES representations' },
      { type: 'image', src: '/assets/projects/14_5.png', caption: 'MPNN architecture' },
      { type: 'image', src: '/assets/projects/14_6.png', caption: 'Prediction vs true value results' },
    ]
  },
  {
    id: 15,
    title: 'Face-Tracking Laser Rover',
    status: 'completed',
    domain: 'engineering',
    size: 'large',
    icon: '🤖',
    summary: 'Real-time autonomous face-tracking rover combining computer vision and robotics to follow a moving human target using a 2-axis servo turret and 4-wheel differential drive.',
    contributions: [
      'Implemented face detection using cvzone.FaceDetectionModule and Haar cascades, extracting bounding box centroids to control motor direction and a 2-axis servo turret.',
      'Designed servo control logic with np.interp to map 1280×720 pixel coordinates to 0–180° servo angles, clamped to safe ranges for hardware stability.',
      'Built a 4-wheel differential drive system via Arduino (pyFirmata), with a 50-pixel deadzone for smooth stopping and precise tracking.',
      'Added real-time HUD overlays showing target coordinates, servo angles, and lock status for live visual feedback.',
      'Ensured hardware safety using try/finally blocks to shut down motors cleanly on exceptions or target loss.',
    ],
    tags: ['Python', 'OpenCV', 'Raspberry Pi', 'Arduino'],
    links: { github: 'https://github.com/abineha/Face-Tracking-Rover' },
    media: [
      { type: 'image', src: '/assets/projects/15_1.png', caption: 'Components of the Face-Tracking Rover' },
      { type: 'image', src: '/assets/projects/15_2.png', caption: 'Face Detection live feed' },
      { type: 'image', src: '/assets/projects/15_3.png', caption: 'Hardware model of the Face-Tracking Rover' },
    ]
  },
  {
    id: 16,
    title: 'Transcription Glasses — AR Assistive Device',
    status: 'completed',
    domain: 'engineering',
    size: 'wide',
    icon: '👓',
    summary: 'Wearable AR assistive device for deaf and hard-of-hearing users, overlaying real-time speech transcriptions on an OLED display via a mirror and transparent lens system on a 3D-printed glasses frame.',
    contributions: [
      'Developed an end-to-end Python pipeline on Raspberry Pi Zero: live audio capture with ambient noise adjustment, Google Speech Recognition transcription, and rendering to a 128×64 OLED via SPI with TrueType fonts.',
      'Implemented smooth horizontal scrolling of live text with frame-by-frame pixel offsets, ensuring readable subtitles without blocking vision.',
      'Handled RequestError and UnknownValueError exceptions gracefully to maintain continuous transcription during unclear audio or connectivity issues.',
      'Validated the device through live demos for Deaf, Hard-of-Hearing, and elderly users.',
    ],
    tags: ['Python', 'Raspberry Pi', 'Embedded Systems', 'IoT'],
    links: { github: 'https://github.com/abineha/Transcription-Glasses' },
    media: [
      { type: 'image', src: '/assets/projects/16_1.jpg', caption: 'Framework Overview' },
      { type: 'video', src: '/assets/projects/16_2.mp4', caption: 'Live Demo' },
    ]
  },
  {
    id: 17,
    title: 'Diabetic Retinopathy Detection',
    status: 'completed',
    domain: 'ai-ml',
    size: 'wide',
    icon: '👁️',
    summary: 'Dual-modality diabetic retinopathy detection system combining EfficientNet CNN on retinal fundus images with classical ML classifiers on clinical patient data.',
    contributions: [
      'Image pipeline: applied EfficientNet with transfer learning on retinal fundus photographs to classify severity levels, incorporating preprocessing to handle imaging variability.',
      'Numerical pipeline: predicted diabetes outcome from clinical features (BMI, insulin, age) using Naïve Bayes, LightGBM, KNN, SVM, Decision Tree, and Random Forest.',
      'Applied unsupervised clustering (K-Means, Hierarchical Ward) to identify patient subgroups and gain insights from clinical features.',
      'Evaluated all models with standard classification metrics and produced comprehensive reports summarising findings.',
    ],
    tags: ['Python', 'TensorFlow', 'EfficientNet', 'Healthcare AI'],
    links: { github: 'https://github.com/abineha/Diabetic-Retinopathy' },
    media: [
      { type: 'image', src: '/assets/projects/17_1.png', caption: 'ML Algorithm Overview' },
      { type: 'image', src: '/assets/projects/17_2.png', caption: 'Result comparison of supervised, unsupervised, and neural networks' },
      { type: 'image', src: '/assets/projects/17_3.png', caption: 'Training and Inference Process' },
      { type: 'image', src: '/assets/projects/17_4.png', caption: 'LightGBM Workflow' },
      { type: 'image', src: '/assets/projects/17_5.png', caption: 'EfficientNet Architecture' },
      { type: 'image', src: '/assets/projects/17_6.png', caption: 'Feature Extraction Process' },
    ]
  },
  {
    id: 18,
    title: 'Neurodevelopmental Behaviour Analysis',
    status: 'completed',
    domain: 'ai-ml',
    size: 'small',
    icon: '🧠',
    summary: 'Video-based behaviour analysis pipeline for neurodevelopmental assessment in children, combining CNN spatial feature extraction with LSTM temporal modelling to classify ASD-related behavioural patterns.',
    contributions: [
      'Curated and annotated a dataset of short video clips depicting ASD-related repetitive behaviours (spinning, head-banging, arm-flapping, rocking); annotated frames using VGG Image Annotator (VIA).',
      'Built and fine-tuned a CNN+LSTM model (ConvLSTM + VGG16 transfer learning) to capture spatial and temporal features for multiclass behaviour classification.',
      'Collaborated with a neonatology specialist from Amrita Hospital to identify crucial behaviours and state interest points (STIP) for pattern detection.',
      'Conducted 3 formal review presentations to iteratively refine the model architecture.',
    ],
    tags: ['Python', 'TensorFlow', 'CNN-LSTM', 'Healthcare AI'],
    links: { github: 'https://github.com/abineha/Video-Based-Analysis-of-Neurodevelopmental-Children-Behavior-using-CNN-LSTM' },
    media: [
      { type: 'image', src: '/assets/projects/18_1.png', caption: 'Dataset Analysis' },
      { type: 'image', src: '/assets/projects/18_2.png', caption: 'Block Diagram' },
      { type: 'image', src: '/assets/projects/18_3.png', caption: 'Workflow + UI' },
      { type: 'image', src: '/assets/projects/18_4.png', caption: 'Architecture Diagram' },
      { type: 'image', src: '/assets/projects/18_5.png', caption: 'Pipeline Overview' },
      { type: 'image', src: '/assets/projects/18_6.png', caption: 'Comparison of Models' },
    ]

  },
  {
    id: 19,
    title: 'Immersive VR & AR Apartment Design',
    status: 'completed',
    domain: 'engineering',
    size: 'tall',
    icon: '🥽',
    summary: 'Multi-module immersive apartment design app in Unity combining four experiences: interior design viewer, AR virtual tour, interactive tile customisation, and real-time object manipulation.',
    contributions: [
      'Implemented VR virtual tours with teleportation-based locomotion, gesture-driven interactions, and performance optimisations (async asset loading, occlusion culling) to maintain high frame rates.',
      'Built drag-and-drop furniture customisation with touch-based interactions, object snapping, real-time collision detection, and UI feedback mechanisms (snapping guides, visual indicators).',
      'Enhanced user experience through optimised scene traversal and smooth, low-latency interactions in fully furnished apartment environments.',
    ],
    tags: ['C#', 'Unity', 'AR/VR', 'XR Toolkit'],
    links: { github: 'https://github.com/abineha/Revolutionizing-Apartment-Design-Immersive-VR-and-AR-Exploration' },
    media: [
      { type: 'image', src: '/assets/projects/19_1.png', caption: 'VR Virtual Tour' },
      { type: 'image', src: '/assets/projects/19_2.png', caption: 'AR placement and manipulation of furnitures in space' },
    ]
    },
  {
    id: 20,
    title: 'BBC News Classifier',
    status: 'completed',
    domain: 'ai-ml',
    size: 'small',
    icon: '📰',
    summary: 'Multi-class text classification pipeline categorising BBC news articles into 5 categories using Multinomial Naive Bayes, trained on a parsed corpus of raw .txt files.',
    contributions: [
      'Built the full NLP pipeline from scratch: dataset construction from labelled directories, stopword removal with custom words, CountVectorizer with 1–3 word n-grams and minimum frequency filtering, and an 80/20 train-test split.',
      'Trained a Multinomial Naive Bayes classifier and evaluated using precision, recall, and F1 score (micro-averaged) on both training and test sets.',
      'Serialised the trained classifier and vectorizer as .pkl files for inference on arbitrary new text without retraining — tested live on an AI news headline.',
    ],
    tags: ['Python', 'scikit-learn', 'NLTK', 'NLP'],
    links: { github: 'https://github.com/abineha/newsclassification' },
    media: [
      { type: 'image', src: '/assets/projects/20_1.png', caption: 'Results of training and testing data' },
      { type: 'image', src: '/assets/projects/20_2.png', caption: 'Output Sampless' },
    ]
  },
  {
    id: 21,
    title: 'Personal Portfolio Website',
    status: 'completed',
    domain: 'tools',
    size: 'large',
    icon: '✨',
    summary: 'Fully custom portfolio built with React 18 and Vite 5, featuring client-side routing, a distinctive visual identity with 47.6% custom CSS and no component library, and deployed live on Vercel.',
    contributions: [
      'Built with React 18, Vite 5, and React Router v7 for seamless SPA navigation; deployed on Vercel with a custom vercel.json configuration.',
      'Implemented a distinctive visual identity using a Cinzel + Quicksand Google Fonts pairing and 47.6% custom CSS — no component library — demonstrating intentional UI design choices.',
      'Integrated Howler.js for audio functionality and configured ESLint with React-specific plugins (react, react-hooks, react-refresh) to maintain code quality throughout development.',
    ],
    tags: ['React', 'Vite', 'Howler.js', 'CSS'],
    links: { github: 'https://github.com/abineha/portfolio-website' },
    media: [
      { type: 'image', src: '/assets/projects/21_1.png', caption: 'Homepage of the Portfolio' },
      { type: 'image', src: '/assets/projects/21_2.png', caption: 'Project Showcase in portfolio' },
    ]
  },
]
