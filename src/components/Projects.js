import React, { useEffect } from 'react';
import './Projects.css';
import webImage from '../assets/Iscripts.png';
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
import MedicineImage from '../assets/MedicineImage.png'

function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card1, .project-card');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);
  const borderClasses = ['border-blue', 'border-green', 'border-purple'];
  const webProjectData = [
    {
      title: 'Chess AI',
      description:
        'An interactive chess game built using React JS that allows users to play classic chess with a clean UI and responsive design. The game supports all standard chess rules, legal move validation, check/checkmate detection, and smooth gameplay transitions.',
      skills: 'React JS',
      image: Chess,
      liveLink: '#',
      githubLink: 'https://github.com/Sasikumar319/chess-ai',
      borderClass: 'border-blue',
    },
    {
      title: 'Chat & Voice Assistance AI',
      description:
        'A smart AI-powered assistant built with React JS, Python, and FastAPI. It can respond to user queries and perform tasks like weather updates, reminders, and general Q&A using AI and NLP.',
      skills: 'React JS, Python, FastAPI, SpeechRecognition',
      image: AI,
      liveLink: '#',
      githubLink: 'https://github.com/Sasikumar319/ChatBotGoogleAssistanceAI',
      borderClass: 'border-green',
    },
    {
      title: 'Student Details Form',
      description:
        'A modern and dynamic student information form built with React JS and Spring Boot. It features real-time validation, state management, and a responsive UI, ideal for digital admissions.',
      skills: 'React JS, Spring Boot',
      image: StudentForm,
      liveLink: 'https://srichaitanyaschool.net/users/login',
      githubLink: '', // GitHub link not provided
      borderClass: 'border-purple',
    },
  ];

  const mobileProjectData1 = [
    {
      title: 'SC Employee App',
      description:
        'An all-in-one mobile solution designed for college management. This app enables employees to check daily student attendance, track employee presence, manage new admissions, and monitor campus cleaning tasks. Built with React Native for Android, it streamlines daily operations and enhances staff productivity within the institution.',
        image: Parent,
      liveLink: 'https://play.google.com/store/apps/details?id=apps.srichaitanya.employee&pcampaignid=web_share',
      githubLink: '#',
    },
    {
      title: 'SC Parent App',
      description:
        'A dedicated mobile app for parents to stay connected with their child’s academic journey. It provides real-time access to student data including attendance, marks, performance reports, fee details, and more. Designed with React Native for Android.',
        image: Employee,
      liveLink: 'https://play.google.com/store/apps/details?id=com.srichaitanya.parent&pcampaignid=web_share',
      githubLink: '#',
    },
    {
      title: 'QR Scanner',
      description:
        ' A fast and reliable QR code scanning app built with React Native.',
        image: Qr,
      liveLink: '#',
      githubLink: 'https://github.com/Sasikumar319/QrBarcodeScanner',
    },
  ];
  const mobileProjectData2 = [
    {
      title: 'Street View App',
      description:
        ' A powerful street-level navigation tool leveraging the Google Maps Street View API.… ',
        image: StreetView,
      liveLink: 'https://play.google.com/store/apps/details?id=apps.srichaitanya.employee&pcampaignid=web_share',
      githubLink: '#',
    },
    {
      title: 'Google Map Directions',
      description:
        'A smart location-based tool using the Google Maps API',
        image: GoogleMap,
      liveLink: 'https://play.google.com/store/apps/details?id=com.srichaitanya.parent&pcampaignid=web_share',
      githubLink: '#',
    },
    {
      title: 'Customize Camera & Crop',
      description:
        'A customizable React Native camera with built-in cropping features.… ',
        image: CropImage,
      liveLink: '#',
      githubLink: 'https://play.google.com/store/apps/details?id=apps.srichaitanya.employee&pcampaignid=web_share',
    },
  ];
  const mobileProjectData3 = [
    {
      title: 'Tic Tac Toe App',
      description:
        'A fun and interactive Tic Tac Toe game built with React Native.',
        image: TicTacToeImage,
      liveLink: 'https://github.com/Sasikumar319/TikTacToe',
      githubLink: '#',
    },
    {
      title: 'Medicine Reminder App',
      description:
        'A simple and intuitive app to schedule medicine reminders and track dosages Ideal for elderly users or anyone managing multiple prescriptions.',
        image: MedicineImage,
      liveLink: 'https://github.com/Sasikumar319/MedicineNotificationReminder',
      githubLink: '#',
    },
    {
      title: 'Keep Notes',
      description:
        'A smart location-based tool using the Google Maps API',
        image: GoogleMap,
      liveLink: 'https://play.google.com/store/apps/details?id=com.srichaitanya.parent&pcampaignid=web_share',
      githubLink: '#',
    },

  ];
  return (
    <div className="projectOverallDiv">
  
    <div className="ProjectdetailsView">
          <p className="ProjectsTextContent">Projects</p>
        <p className="summary">
          Explore a showcase of my creative and innovative projects — from UI
          design to full-stack development — demonstrating how I bring ideas to
          life and contribute real value to every endeavor.
        </p>
        </div>





        <p className="MobileTexts">Mobile Projects</p>

        <div className="home-projects-sections">
<div className="projects-wrapper">
  {mobileProjectData1.map((project, index) => {
    const randomBorder = borderClasses[Math.floor(Math.random() * borderClasses.length)];

    return (
      <div className={`project-card-div ${randomBorder}`} key={index}>
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-content">
          <h2 className="project-titles">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <div className="project-buttons">
  <a
    href={project.liveLink}
    target="_blank"
    rel="noopener noreferrer"
    className="liveBtn"
  >
    Live
  </a>
  <a
    href={project.githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="gitBtn"
  >
    GitHub
  </a>
</div>

        </div>
      </div>
    );
  })}
</div>


</div>

<div className="home-projects-sections">
<div className="projects-wrapper">
  {mobileProjectData2.map((project, index) => {
    const randomBorder = borderClasses[Math.floor(Math.random() * borderClasses.length)];

    return (
      <div className={`project-card-div ${randomBorder}`} key={index}>
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-content">
          <h2 className="project-titles">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <div className="project-buttons">
  <a
    href={project.liveLink}
    target="_blank"
    rel="noopener noreferrer"
    className="liveBtn"
  >
    Live
  </a>
  <a
    href={project.githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="gitBtn"
  >
    GitHub
  </a>
</div>

        </div>
      </div>
    );
  })}
</div>


</div>
<div className="home-projects-sections">
<div className="projects-wrapper">
  {mobileProjectData3.map((project, index) => {
    const randomBorder = borderClasses[Math.floor(Math.random() * borderClasses.length)];

    return (
      <div className={`project-card-div ${randomBorder}`} key={index}>
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-content">
          <h2 className="project-titles">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <div className="project-buttons">
  <a
    href={project.liveLink}
    target="_blank"
    rel="noopener noreferrer"
    className="liveBtn"
  >
    Live
  </a>
  <a
    href={project.githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="gitBtn"
  >
    GitHub
  </a>
</div>

        </div>
      </div>
    );
  })}
</div>


</div>



<h4 className="MobileTexts">Web Projects</h4>


<div className="home-webprojectsViews">
      {webProjectData.map((project, index) => (
        <div className={`home-webproject-card ${project.borderClass}`} key={index}>
          <img src={project.image} alt={project.title} className='' />

          <h3 className="home-webprojectNames">{project.title}r</h3>
          <p className="home-webprojectSummary">{project.description}</p>
          <p style={{ marginBottom: 10 }}><strong>Skills:</strong> {project.skills}</p>

          <div className="web-project-buttons">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="webbtn1"
              >
                Live
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="webbtn2"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      ))}
    </div>

    </div>
  );
}

export default Projects;
