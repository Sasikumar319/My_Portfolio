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
      githubLink: '', 
      borderClass: 'border-purple',
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





        <p className="MobileText">Mobile Projects</p>
        <div className="mobileProjectsView">
          <div className="mobileproject-card border-purple">
            <div className="cardContent">
              <img
                src={Employee}
                alt="Animated Developer"
                className="p1Image"
              />

              <div className="cardText">
                <h3 className="projectName">SC Employee App</h3>
                <p className="projectSummary">
                  An all-in-one mobile solution designed for college management.
                  This app enables employees to check daily student attendance,
                  track employee presence, manage new admissions, and monitor
                  campus cleaning tasks. Built with React Native for Android, it
                  streamlines daily operations and enhances staff productivity
                  within the institution.
                </p>
                <p>Skills: Android, React Native(ios)</p>

                <div className="buttons">
                  <a
                    href="https://play.google.com/store/apps/details?id=apps.srichaitanya.employee&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn1">Live</button>
                  </a>

                  <button className="btn2">GitHub</button>
                </div>
              </div>
            </div>
          </div>
          <div className="mobileproject-card border-purple">
            <div className="cardContent">
              <img src={Parent} alt="Animated Developer" className="p1Image" />

              <div className="cardText">
                <h3 className="projectName">SC Parent App</h3>
                <p className="projectSummary">
                  A dedicated mobile app for parents to stay connected with
                  their child’s academic journey. It provides real-time access
                  to student data including attendance, marks, performance
                  reports, fee details, and more. Designed with React Native for
                  Android, the app ensures transparent communication between
                  parents and the institution.
                </p>
                <p>Skills: Android, React Native(ios)</p>

                <div className="buttons">
                <a
                    href="https://play.google.com/store/apps/details?id=com.srichaitanya.parent&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn1">Live</button>
                  </a>
                  <button className="btn2">GitHub</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mobileproject-card border-green">
            <div className="cardContent">
              <img
                src={Qr}
                alt="Animated Developer"
                className="p1Image"
              />

              <div className="cardText">
                <h3 className="projectName">QR Scanner</h3>
                <p className="projectSummary">
                  A fast and reliable QR code scanning app built with React Native.…  
                </p>
                <p>Skills: Android, React Native</p>
                <div className="buttons">
                  <button className="btn1">Live</button>
                  <a
                    href="https://github.com/Sasikumar319/QrBarcodeScanner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <button className="btn2">GitHub</button>

                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobileProjectsView">
          <div className="mobileproject-card border-purple">
            <div className="cardContent">
              <img
                src={StreetView}
                alt="Animated Developer"
                className="p1Image"
              />

              <div className="cardText">
                <h3 className="projectName">Street View App</h3>
                <p className="projectSummary">
                  A powerful street-level navigation tool leveraging the Google Maps Street View API.…  
                </p>
                <p>Skills: Android, React Native(ios)</p>

                <div className="buttons">
                  <a
                    href="https://play.google.com/store/apps/details?id=apps.srichaitanya.employee&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn1">Live</button>
                  </a>

                  <button className="btn2">GitHub</button>
                </div>
              </div>
            </div>
          </div>
          <div className="mobileproject-card border-purple">
            <div className="cardContent">
              <img src={GoogleMap} alt="Animated Developer" className="p1Image" />

              <div className="cardText">
                <h3 className="projectName">Google Map Directions</h3>
                <p className="projectSummary">
                  A smart location-based tool using the Google Maps API.…  
                </p>
                <p>Skills: Android, React Native(ios)</p>

                <div className="buttons">
                <a
                    href="https://play.google.com/store/apps/details?id=com.srichaitanya.parent&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn1">Live</button>
                  </a>
                  <button className="btn2">GitHub</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mobileproject-card border-purple">
            <div className="cardContent">
              <img
                src={CropImage}
                alt="Animated Developer"
                className="p1Image"
              />

              <div className="cardText">
                <h3 className="projectName">Customize Camera & Crop</h3>
                <p className="projectSummary">
                  A customizable React Native camera with built-in cropping features.…  
                </p>
                <p>Skills: Android, React Native (ios)</p>

                <div className="buttons">
                  <a
                    href="https://play.google.com/store/apps/details?id=apps.srichaitanya.employee&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn1">Live</button>
                  </a>

                  <button className="btn2">GitHub</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobileProjectsView">
       
          <div className="mobileproject-card border-purple">
            <div className="cardContent">
              <img src={TicTacToeImage} alt="Animated Developer" className="p1Image" />

              <div className="cardText">
                <h3 className="projectName">Tic Tac Toe App</h3>
                <p className="projectSummary">
                  A fun and interactive Tic Tac Toe game built with React Native.…  
                </p>
                <p>Skills: Android, React Native (ios)</p>

                <div className="buttons">
                <a
                    href="https://github.com/Sasikumar319/TikTacToe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn1">Live</button>
                  </a>
                  <button className="btn2">GitHub</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mobileproject-card border-green">
            <div className="cardContent">
              <img
                src={MedicineImage}
                alt="Animated Developer"
                className="p1Image"
              />

              <div className="cardText">
                <h3 className="projectName">Medicine Reminder App</h3>
                <p className="projectSummary">
A simple and intuitive app to schedule medicine reminders and track dosages.
Ideal for elderly users or anyone managing multiple prescriptions.
                </p>
                <p>Skills:  React Native(Android \ ios) , JS </p>
                <div className="buttons">
                  <button className="btn1">Live</button>
                  <a
                    href="https://github.com/Sasikumar319/MedicineNotificationReminder"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <button className="btn2">GitHub</button>

                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>






        <div className="home-projects">
<h4 className="mobile-ProjectsText">Web Projects</h4>
</div>

<div className="home-webprojectsView">
      {webProjectData.map((project, index) => (
        <div className={`home-webproject-card ${project.borderClass}`} key={index}>
          <img src={project.image} alt={project.title} className='' />

          <h3 className="home-webprojectName mt-5">{project.title}</h3>
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
