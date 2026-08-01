export const projectCategories = [
  'All',
  'Full Stack',
  'Machine Learning'
]

export const projects = [
  {
    id: 'proj-1',
    title: 'Cyber Troll Detection & Severity Classification',
    category: 'Machine Learning',
    description:
      'Developed an AI-powered cyber troll detection system using DistilBERT, Graph Convolutional Networks (GCN), and Transformer Attention to detect toxic content and classify its severity into Low, Medium, and High levels with around 80% accuracy.',
    tech: [
      'Python',
      'PyTorch',
      'DistilBERT',
      'PyTorch Geometric',
      'Scikit-learn',
      'Pandas'
    ],
    image: '/projects/cyber-troll.png',
    github: '',
    featured: true
  },

  {
    id: 'proj-2',
    title: 'Intrusion Detection System',
    category: 'Machine Learning',
    description:
      'Built a deep learning-based intrusion detection system using the UNSW-NB15 dataset to classify malicious network traffic. The project was published as an IEEE conference paper at ICVADV 2026.',
    tech: [
      'Python',
      'TensorFlow',
      'Scikit-learn',
      'Pandas',
      'NumPy'
    ],
    image: '/projects/intrusion-detection.png',
    github: '',
    featured: true
  },

  {
    id: 'proj-3',
    title: 'Doctor Management System',
    category: 'Full Stack',
    description:
      'Developed a full-stack web application that enables doctors and patients to manage appointments efficiently. Features include secure authentication, doctor profiles, appointment booking, and an intuitive dashboard for healthcare management.',
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'MySQL',
      'JWT'
    ],
    image: '/projects/doctor-management.png',
    github: '',
    featured: true
  },

  {
    id: 'proj-4',
    title: 'E-Commerce Web Application',
    category: 'Full Stack',
    description:
      'Built a responsive MERN stack e-commerce platform with user authentication, product browsing, shopping cart, order management, and an admin dashboard for managing products and customer orders.',
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT'
    ],
    image: '/projects/ecommerce.png',
    github: '',
    featured: true
  },

  {
    id: 'proj-5',
    title: 'Flight Ticket Price Prediction',
    category: 'Machine Learning',
    description:
      'Developed a machine learning model during my internship to predict flight ticket prices using historical airline data. Applied data preprocessing, feature engineering, and regression algorithms to improve prediction accuracy.',
    tech: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'Matplotlib',
      'NumPy'
    ],
    image: '/projects/flight-price.png',
    github: '',
    featured: false
  }
]