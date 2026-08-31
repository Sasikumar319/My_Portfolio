import parentScreenshot from '../assets/parent.jpeg';
import employeeScreenshot from '../assets/employe.jpeg';
import hostelScreenshot from '../assets/hostel-app.png';
import googleMapScreenshot from '../assets/googleMap.jpeg';
import qrScreenshot from '../assets/qr.jpeg';
import chessScreenshot from '../assets/chess.png';
import aiScreenshot from '../assets/AI.png';
import studentFormScreenshot from '../assets/image.png';
import devPhoto from '../assets/Sasi photo.jpg';
import aboutPhoto from '../assets/Sasi_Ai.jpeg';

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'mobile', label: 'Apps' },
  { id: 'web', label: 'Web' },
  { id: 'toolkit', label: 'Toolkit' },
  { id: 'contact', label: 'Contact' },
];

export const HERO = {
  name: 'Sasi Kumar Kuppam',
  role: 'React Native Developer',
  tagline:
    'I build feature-rich mobile applications for Android and iOS — clean UI, reliable APIs, and real production apps used every day.',
  photo: devPhoto,
};

export const ABOUT = {
  photo: aboutPhoto,
  intro:
    "Hi, I'm Sasi Kumar Kuppam — a React Native & Mobile Developer from Andhra Pradesh, India. I build cross-platform apps with React Native, Kotlin, Firebase, and REST APIs for education and business products.",
  meta: [
    { label: 'Role', value: 'React Native & Mobile Developer' },
    { label: 'Based in', value: 'Andhra Pradesh, India' },
    { label: 'Currently at', value: 'Varsity Education Management Pvt Ltd' },
    { label: 'Experience', value: '3+ Years' },
    { label: 'Stack', value: 'Mobile · APIs · Firebase · Offline' },
  ],
};

export const SERVICES = [
  {
    title: 'Mobile App Development',
    description:
      'Cross-platform apps with React Native and Kotlin — native feel, smooth navigation, and store-ready builds for Android and iOS.',
  },
  {
    title: 'API & Backend Integration',
    description:
      'Secure REST APIs with JWT auth, Axios, error handling, and Firebase Auth / Firestore for real-time sync across devices.',
  },
  {
    title: 'Offline & Performance',
    description:
      'Realm and local storage for weak-network campuses, plus FlatList optimization, Hermes, and crash monitoring in production.',
  },
  {
    title: 'Release & DevOps',
    description:
      'Play Store / App Store releases, signing, Git workflow, and CI-friendly builds with clear versioning and rollout strategy.',
  },
];

export const TECH_STACK = [
  'React Native',
  'React',
  'JavaScript',
  'TypeScript',
  'Kotlin',
  'Redux',
  'Firebase',
  'REST APIs',
  'Realm',
  'Axios',
  'Git & GitHub',
  'Android Studio',
  'Xcode',
  'SQLite',
  'FCM',
];

export const APPROACH = [
  'I turn requirements into production mobile apps with clear UI and reliable data flow.',
  'Experienced in education apps — fees, attendance, notifications, dashboards, and offline cache.',
  'Comfortable with native Android (Kotlin), camera, GPS, permissions, and Play Store deployment.',
  'I care about performance, clean architecture, and fixing real production bugs with Crashlytics.',
  'Always learning — TypeScript, React Query, CI/CD, and modern React Native architecture.',
];

export const MOBILE_APPS = [
  {
    id: 'parent-app',
    title: 'SC Parent App',
    description:
      'Parents track fees, attendance, marks, feedback, and announcements in one app. Built with React Native, Firebase push, and offline-friendly flows.',
    image: parentScreenshot,
    icon: `${process.env.PUBLIC_URL}/apps/parent-app-icon.png`,
    tags: ['React Native', 'Firebase', 'FCM', 'Realm', 'REST APIs', 'Redux'],
    playStore:
      'https://play.google.com/store/apps/details?id=com.srichaitanya.parent&pcampaignid=web_share',
    appStore: null,
    stats: '50K+ downloads on Play Store',
  },
  {
    id: 'employee-app',
    title: 'SC Employee App',
    description:
      'Staff app for attendance, student search, faculty allocation, hygiene, CCTV, geo-location, and campus operations. Migrated from Kotlin to React Native.',
    image: employeeScreenshot,
    tags: ['React Native', 'Kotlin', 'GPS', 'Camera', 'Firebase', 'REST APIs'],
    playStore:
      'https://play.google.com/store/apps/details?id=apps.srichaitanya.employee&pcampaignid=web_share',
    appStore: null,
    stats: 'Enterprise campus app',
  },
  {
    id: 'hostel-app',
    title: 'Hostel Management',
    description:
      'Personal product for hostel owners — buildings, floors, rooms, beds, members, rent tracking, Firebase login, and Firestore sync across phones.',
    image: hostelScreenshot,
    tags: ['React Native CLI', 'Firebase Auth', 'Firestore', 'Cloud Sync', 'Notifications'],
    playStore: null,
    appStore: null,
    github: null,
    stats: 'Personal project · Release ready',
  },
  {
    id: 'maps-app',
    title: 'Google Map Directions',
    description:
      'Live routes and distance with Google Maps API — driving, walking, and transit modes in a React Native app.',
    image: googleMapScreenshot,
    tags: ['React Native', 'Google Maps API', 'JavaScript'],
    playStore: null,
    appStore: null,
    github: 'https://github.com/Sasikumar319/GoogleMapLive',
  },
  {
    id: 'qr-app',
    title: 'QR Scanner',
    description: 'Fast, reliable QR and barcode scanning built with React Native for campus asset workflows.',
    image: qrScreenshot,
    tags: ['React Native', 'Camera', 'JavaScript'],
    playStore: null,
    appStore: null,
    github: 'https://github.com/Sasikumar319/QrBarcodeScanner',
  },
];

export const WEB_APPS = [
  {
    title: 'Chess AI',
    description: 'Classic chess in React with legal moves, check detection, and a clean playable UI.',
    image: chessScreenshot,
    tags: ['React', 'JavaScript'],
    github: 'https://github.com/Sasikumar319/chess-ai',
  },
  {
    title: 'Chat & Voice AI',
    description: 'Assistant for Q&A, weather, and reminders — React, Python, FastAPI, and speech recognition.',
    image: aiScreenshot,
    tags: ['React', 'Python', 'FastAPI'],
    github: 'https://github.com/Sasikumar319/ChatBotGoogleAssistanceAI',
  },
  {
    title: 'Student Details Form',
    description: 'Admissions-ready form with validation and responsive UI — React and Spring Boot.',
    image: studentFormScreenshot,
    tags: ['React', 'Spring Boot'],
    live: 'https://srichaitanyaschool.net/users/login',
  },
];

export const TOOLKIT = [
  {
    category: 'Development & IDEs',
    tools: ['VS Code', 'Android Studio', 'Xcode', 'React Native CLI', 'Postman', 'Redux DevTools'],
  },
  {
    category: 'Backend & APIs',
    tools: ['REST APIs', 'Axios', 'JWT', 'Swagger', 'Firebase Auth', 'Firestore'],
  },
  {
    category: 'Database & Storage',
    tools: ['Realm', 'SQLite', 'AsyncStorage', 'Firebase', 'MySQL basics'],
  },
  {
    category: 'Cloud & Release',
    tools: ['Firebase Console', 'FCM', 'Crashlytics', 'Play Console', 'App Store Connect', 'GitHub Pages'],
  },
  {
    category: 'Version Control & CI',
    tools: ['Git', 'GitHub', 'Bitbucket', 'GitHub Actions basics', 'Jenkins basics'],
  },
  {
    category: 'Other',
    tools: ['Google Maps', 'Agile/Scrum', 'Framer Motion', 'EmailJS', 'Hermes'],
  },
];

export const CONTACT = {
  email: 'sasikumarkuppam02754@gmail.com',
  phone: '+91 70931 65020',
  location: 'Andhra Pradesh, India',
};

export const STORE_BADGES = {
  playStore: `${process.env.PUBLIC_URL}/apps/google-play-badge.png`,
};
