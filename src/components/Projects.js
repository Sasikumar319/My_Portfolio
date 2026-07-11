import React from 'react';
import './Projects.css';
import GoogleMap from '../assets/googleMap.jpeg';
import Qr from '../assets/qr.jpeg';
import Employee from '../assets/employe.jpeg';
import Chess from '../assets/chess.png';
import AI from '../assets/AI.png';
import StudentForm from '../assets/image.png';
import Parent from '../assets/parent.jpeg';
import StreetView from '../assets/StreetViewImage.jpeg';
import CropImage from '../assets/cropImage.jpeg';
import TicTacToeImage from '../assets/tictak.jpeg';
import MedicineImage from '../assets/MedicineImage.png';

const webProjectData = [
  {
    title: 'Chess AI',
    description:
      'Interactive chess in React with legal moves, check detection, and a clean playable UI.',
    skills: 'React JS',
    image: Chess,
    liveLink: '#',
    githubLink: 'https://github.com/Sasikumar319/chess-ai',
  },
  {
    title: 'Chat & Voice Assistance AI',
    description:
      'AI assistant for Q&A, weather, and reminders — React, Python, FastAPI, and speech recognition.',
    skills: 'React JS, Python, FastAPI, SpeechRecognition',
    image: AI,
    liveLink: '#',
    githubLink: 'https://github.com/Sasikumar319/ChatBotGoogleAssistanceAI',
  },
  {
    title: 'Student Details Form',
    description:
      'Admissions-ready student form with validation and responsive UI — React and Spring Boot.',
    skills: 'React JS, Spring Boot',
    image: StudentForm,
    liveLink: 'https://srichaitanyaschool.net/users/login',
    githubLink: '',
  },
];

const mobileProjects = [
  {
    title: 'SC Employee App',
    description:
      'College operations — attendance, admissions, staff presence, and campus tasks. React Native for Android.',
    image: Parent,
    liveLink:
      'https://play.google.com/store/apps/details?id=apps.srichaitanya.employee&pcampaignid=web_share',
    githubLink: '#',
  },
  {
    title: 'SC Parent App',
    description:
      'Parents stay connected to attendance, marks, fees, and performance in real time.',
    image: Employee,
    liveLink:
      'https://play.google.com/store/apps/details?id=com.srichaitanya.parent&pcampaignid=web_share',
    githubLink: '#',
  },
  {
    title: 'QR Scanner',
    description: 'Fast, reliable QR code scanning built with React Native.',
    image: Qr,
    liveLink: '#',
    githubLink: 'https://github.com/Sasikumar319/QrBarcodeScanner',
  },
  {
    title: 'Street View App',
    description: 'Street-level navigation with the Google Maps Street View API.',
    image: StreetView,
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Google Map Directions',
    description: 'Live routes and distance with Google Maps API.',
    image: GoogleMap,
    liveLink: '#',
    githubLink: 'https://github.com/Sasikumar319/GoogleMapLive',
  },
  {
    title: 'Customize Camera & Crop',
    description: 'Custom React Native camera with built-in cropping.',
    image: CropImage,
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Tic Tac Toe App',
    description: 'Interactive Tic Tac Toe game built with React Native.',
    image: TicTacToeImage,
    liveLink: 'https://github.com/Sasikumar319/TikTacToe',
    githubLink: '#',
  },
  {
    title: 'Medicine Reminder App',
    description: 'Schedule medicine reminders and track dosages with a simple UI.',
    image: MedicineImage,
    liveLink: 'https://github.com/Sasikumar319/MedicineNotificationReminder',
    githubLink: '#',
  },
];

function ProjectTile({ project }) {
  const hasLive = project.liveLink && project.liveLink !== '#';
  const hasGithub = project.githubLink && project.githubLink !== '#';

  return (
    <article className="proj-tile">
      <div className="proj-tile__media">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="proj-tile__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.skills && <p className="proj-tile__skills">{project.skills}</p>}
        <div className="proj-tile__links">
          {hasLive && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          )}
          {hasGithub && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <div className="projects-page section-shell">
      <p className="section-kicker">Work</p>
      <h1 className="section-title section-title--gradient">Projects</h1>
      <p className="section-lead">
        Mobile products in production and web experiments — from school apps to AI tools.
      </p>

      <h2 className="proj-section-label">Mobile</h2>
      <div className="proj-grid">
        {mobileProjects.map((project) => (
          <ProjectTile key={project.title} project={project} />
        ))}
      </div>

      <h2 className="proj-section-label">Web</h2>
      <div className="proj-grid">
        {webProjectData.map((project) => (
          <ProjectTile key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
