import React from 'react';
import './AboutMe.css';
import devImage from '../assets/Sasi_Ai.jpeg';

function AboutMe() {
  return (
    <section className="about-container font-poppins">
      <h1 className="section-title">About Me</h1>

      <div className="intro-wrapper">
        <div className="intro-text">
        <p style={{ color: 'gray', fontFamily: "'Poppins', sans-serif" }}>
            Hi, I'm <strong>Sasi Kumar Kuppam</strong>, a Mobile App Developer with 2.6 years of professional experience in building robust and user-friendly Android and cross-platform applications using React Native and Kotlin.
          </p>
          <p style={{ color: 'gray', fontFamily: "'Poppins', sans-serif" }}>
            Based in Hyderabad, I specialize in crafting scalable apps integrated with REST APIs, Firebase, and modern mobile development tools. I'm passionate about delivering high-performance solutions that solve real-world problems.
          </p>
        </div>

        <div className="intro-image-wrapper">
          <div className="image-border">
            <img src={devImage} alt="Sasi Kumar" className="profile-image" />
          </div>
        </div>
      </div>

      <div className="info-sections">
        <div className="info-block">
          <h2 className="info-title">
            <span className="dot" /> Education & Skills
          </h2>
          <p style={{ color: 'gray', fontFamily: "'Poppins', sans-serif" }}>
            Bachelor of Technology in Mechanical Engineering from JNTUK (2021). Skilled in React Native, Kotlin, JavaScript, Redux, Firebase, REST APIs, and mobile deployment to Play Store and App Store.
          </p>
        </div>

        <div className="info-block">
          <h2 className="info-title">
            <span className="dot" /> Professional Experience
          </h2>
          <p style={{ color: 'gray', fontFamily: "'Poppins', sans-serif" }}>
            Currently working at Varsity Education Management Pvt Ltd as a Mobile App Developer. Previously transitioned from intern to junior developer, contributing to Android and cross-platform app development with a focus on performance and scalability.
          </p>
        </div>

        <div className="info-block">
          <h2 className="info-title">
            <span className="dot" /> Current Role
          </h2>
          <p style={{ color: 'gray', fontFamily: "'Poppins', sans-serif" }}>
            Building cross-platform mobile applications using React Native and Kotlin. Collaborating with designers and backend teams, integrating APIs, and deploying apps to the Play Store.
          </p>
        </div>

        <div className="info-block">
          <h2 className="info-title">
            <span className="dot" /> Tools & Technologies
          </h2>
          <p style={{ color: 'gray', fontFamily: "'Poppins', sans-serif" }}>
            Android Studio, Xcode, VS Code, Firebase, SQLite, Realm, Redux, GitHub, Bitbucket, Google Maps, Agile/Scrum, Axios.
          </p>
        </div>

        <div className="info-block">
          <h2 className="info-title">
            <span className="dot" /> Get in Touch
          </h2>
          <p style={{ color: 'gray', fontFamily: "'Poppins', sans-serif" }}>
            I’m open to new opportunities and collaborations. You can reach me at <strong>sasikumarkuppam02754@gmail.com</strong> or on <a href="https://www.linkedin.com/in/sasikumar-ku" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
