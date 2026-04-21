export const projects = [
  {
    id: 1,
    title: 'Multi-vendor E-commerce Platform',
    description:
      'A full marketplace where vendors list products, manage inventory, and process payments. Role-based system for buyers, sellers, and admins — with real-time order tracking and Stripe checkout.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    color: '#eeedfb',
    iconColor: '#5346dc',
    demo: '#',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Project Management Tool',
    description:
      'Real-time kanban board with drag-and-drop, team invitations, and live activity feed. Demonstrates real-time architecture with Socket.io and complex UI state management.',
    stack: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    color: '#f0fdf4',
    iconColor: '#16a34a',
    demo: '#',
    github: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'Booking & Appointment System',
    description:
      'Appointment scheduling app for small businesses — clinics, salons, consultants. Features a calendar UI, email notifications, and Google auth via Firebase.',
    stack: ['Angular', 'Firebase', 'Node.js', 'Firestore'],
    color: '#fffbeb',
    iconColor: '#d97706',
    demo: '#',
    github: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Full-Stack Auth API Starter',
    description:
      'Open-source Node.js + MongoDB auth boilerplate with JWT refresh tokens, role-based access control, rate limiting, and full Swagger documentation.',
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
    color: '#fff1f2',
    iconColor: '#e11d48',
    demo: '#',
    github: '#',
    featured: false,
  },
]

export const skills = [
  {
    category: 'Frontend',
    items: ['React.js', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML & CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Socket.io'],
  },
  {
    category: 'Database & Cloud',
    items: ['MongoDB', 'Mongoose', 'Firebase', 'Firestore'],
  },
  {
    category: 'Tools',
    items: ['Git & GitHub', 'Postman', 'Figma', 'VS Code'],
  },
  {
    category: 'Deployment',
    items: ['Vercel', 'Render', 'Railway', 'Netlify'],
  },
  {
    category: 'Learning',
    items: ['Docker', 'GraphQL', 'AWS'],
  },
]
