import React, { useState } from "react";
import "./Home.css";
import devImage from "../assets/Sasi photo.jpg";
import GoogleMap from "../assets/googleMap.jpeg";
import Employee from "../assets/employe.jpeg";
import Parent from "../assets/parent.jpeg";
import Chess from "../assets/chess.png";
import AI from "../assets/AI.png";
import StudentForm from "../assets/image.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { initializeApp } from "firebase/app";
import { getDatabase, push, ref } from "firebase/database";
import { firebaseConfig } from "./firebaseConfig";

import {
  faCode,
  faMobileAlt,
  faRocket,
  faPalette,
  faLightbulb,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiJava,
  SiPython,
  SiMysql,
  SiReact,
  SiHtml5,
  SiCss3,
  SiKotlin,
  SiXcode
} from "react-icons/si";
import { FaPaintBrush } from "react-icons/fa";



const Home = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessText, setShowSuccessText] = useState(false); // state to control <p> visibility
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
  const [showScroll, setShowScroll] = useState(false);


  const handleSend = () => {
    // Trim inputs to avoid blank spaces
    const trimmedName = name.trim();
    const trimmedMobile = mobile.trim();
    const trimmedMessage = message.trim();
  
    // Validation
    if (!trimmedName) {
      alert("Please enter your name.");
      return;
    }
  
    if (!trimmedMobile) {
      alert("Please enter your mobile number.");
      return;
    }
  
    if (!/^\d{10}$/.test(trimmedMobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
  
    if (!trimmedMessage) {
      alert("Please enter your message.");
      return;
    }
  
    // If validation passes, proceed
    console.log("handleSend");
  
    push(ref(db, 'submissions/'), {
      name: trimmedName,
      mobile: trimmedMobile,
      message: trimmedMessage,
      timestamp: new Date().toISOString(),
    })
      .then(() => {
        setShowSuccessText(true);
        console.log("Data saved successfully");
  
        // Clear form
        setName('');
        setMobile('');
        setMessage('');
  
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccessText(false), 5000);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation triggers once
    });
  }, []);
const expertiseData = [
  {
    title: 'React Native Expertise',
    description:
    'Proficient in React Native for building cross-platform mobile applications. Skilled in integrating APIs and developing efficient, scalable mobile solutions.',
      iconColor: '#8e44ad',
      borderClass: 'border-purple',
    icon: faCode,
  },
  {
    title: 'Mobile-First Approach',
    description:
      'Expert in designing and developing mobile-first applications tailored for both Android and iOS platforms with consistent performance.',
      iconColor: '#27ae60',
      borderClass: 'border-green',
    icon: faMobileAlt,
  },
  {
    title: 'Fast & Scalable',
    description:
      'I create fast-loading, scalable applications using modern frameworks and optimized data flow handling for better user experiences.',
      iconColor: '#2980b9',
  borderClass: 'border-blue',
    icon: faRocket,
  },
  {
    title: 'User-Friendly Interface',
    description:
      'Strong UI/UX design focus. Build clean, intuitive, and responsive user interfaces that enhance usability and engagement.',
      iconColor: '#e67e22',
      borderClass: 'border-purple',
    icon: faPalette,
  },
  {
    title: 'Problem Solver',
    description:
      'Adept at analyzing requirements, troubleshooting issues, and implementing effective solutions for complex problems.',
      iconColor: '#c0392b',
      borderClass: 'border-green',
    icon: faLightbulb,
  },
  {
    title: 'Scalable Solutions',
    description:
      'Capable of designing scalable system architectures to accommodate growth and ensure long-term performance and maintainability.',
      iconColor: '#16a085',
      borderClass: 'border-blue',
    icon: faCogs,
  },
];
  return (
    
    <div className="overallDiv">
  <div className="container flex flex-col md:flex-row justify-between items-center ">

{/* Left Section */}
<div className="left-section flex-1 text-left space-y-4">
  <p className="gradient-text text-3xl md:text-5xl font-bold ">
    Hello, I'm Sasi Kumar
  </p>
  <p className=" text-black web-mobile-dev text-2xl md:text-4xl font-bold ">
    Mobile App Developer (React Native / Android)
  </p>
  <p className="line3 text-gray-600 max-w-xl text-sm md:text-base">
    With 2.6 years of experience, I specialize in building high-performance mobile apps using React Native and Kotlin. I focus on creating user-friendly, scalable applications for Android and iOS platforms.
  </p>
</div>


{/* Right Section */}
<div className="right-section flex justify-center items-center">
<div className="outer-border w-72 h-96 md:w-[370px] md:h-[450px]">
<div className="image-container w-full h-full">
<img src={devImage} alt="Developer" className="fixed-photo object-cover w-full h-full rounded-3xl" />
</div>
</div>
</div>
</div>




<div className="flex flex-col md:flex-row gap-4 items-center justify-start ">
  <a
    href={process.env.PUBLIC_URL + '/Sasi Kumar kuppam.pdf'}
    target="_blank"
    rel="noopener noreferrer"
    className="border border-black text-black px-6 py-2 rounded-full text-lg no-underline"
  >
    👁️ View Resume
  </a>
  <button
    className="border border-black text-black px-6 py-2 rounded-full text-lg"
    onClick={() => {
      const link = document.createElement('a');
      link.href = '/Sasi Kumar Kuppam.pdf';
      link.download = 'Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}
  >
    ⬇️ Download Resume
  </button>
</div>




<div className="expertise-section grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
    {expertiseData.map((card, index) => (
    <div
    key={index}
    className={`expertise-card`}
    style={{
      borderColor: card.iconColor,
      borderWidth: '0.5px',
      borderStyle: 'solid'
    }}
    data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
  >
        <div className="icon-wrapper text-2xl" style={{ color: card.iconColor }}>
          <FontAwesomeIcon icon={card.icon} size="2x" />
          <h3 className="expertise-title text-xl font-bold">{card.title}</h3>
        </div>
      
        {card.image && (
          <div className="card-image">
            <img src={card.image} alt={card.title} />
          </div>
        )}
        <p className="expertise-description text-sm text-black-300">{card.description}</p>
      </div>
    ))}
  </div>



      <div className="projectsView">
        <p className="ProjectsText">Projects</p>
        <p className="summary">
    Explore a showcase of my creative and innovative projects — from UI design to full-stack development — demonstrating how I bring ideas to life and contribute real value to every endeavor.
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
                src={GoogleMap}
                alt="Animated Developer"
                className="p1Image"
              />

              <div className="cardText">
                <h3 className="projectName">Google Map Directions</h3>
                <p className="projectSummary">
                  A smart location-based tool that uses the Google Maps API to
                  provide real-time directions and calculate the distance
                  between two points. It supports route visualization, travel
                  time estimation, and multiple travel modes like driving,
                  walking, or transit.
                </p>
                <p>Skills: Android, React Native(ios)</p>
                <div className="buttons">
                  <button className="btn1">Live</button>
                  <a
                    href="https://github.com/Sasikumar319/GoogleMapLive"
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










        <p className="MobileText">Web Projects</p>
        <div className="webprojectsView">
        <div className="webproject-card border-blue">
  <img src={Chess} alt="Animated Developer"  />

  <h3 className="webprojectName mt-5">Chess AI</h3>
    <p className="webprojectSummary">An interactive chess game built using React JS that allows users to play classic chess with a clean UI and responsive design. The game supports all standard chess rules, legal move validation, check/checkmate detection, and smooth gameplay transitions. Ideal for practicing and enjoying chess in a web environment.</p>

    <p>Skills: React JS</p>
    <div className="liveBt">
  <button className="webbtn1">Live</button>

  <a
    href="https://github.com/Sasikumar319/chess-ai"
    target="_blank"
    rel="noopener noreferrer"
    className="webbtn2"
  >
    GitHub
  </a>
</div>

  </div>

          <div className="webproject-card border-green">
  <img src={AI} alt="Animated Developer"   />
  <h3 className='webprojectName'>Chat & Voice Assistnace AI </h3>
    <p className="webprojectSummary">A smart AI-powered assistant built with React JS, Python, and FastAPI that mimics Google Assistant functionalities. It can respond to user queries, perform tasks like weather updates, reminders, and general Q&A using integrated AI and NLP capabilities. The assistant provides real-time voice/text interaction, making it a handy tool for productivity and learning.</p>

    <p>Skills: React JS ,Python ,Fast Api and SpeechRecognization</p>
    <div className="liveBt">
      <button className="webbtn1">Live </button>
   
      <a
          href="https://github.com/Sasikumar319/ChatBotGoogleAssistanceAI"
                    target="_blank"
                    rel="noopener noreferrer"
                     className="webbtn2"
                  >
      GitHub
      </a>
    </div>
  </div>

          <div className="webproject-card border-purple">
  <img src={StudentForm} alt="Animated Developer" />

    <h3 className='webprojectName'>Student Details Form</h3>
    <p className="webprojectSummary">A modern and dynamic student information form built with React JS, styled using CSS and JavaScript for interactivity. The form captures detailed student data such as name, contact, address, and academic background. It features real-time validation, state management, and a responsive UI, making it ideal for digital admissions and academic record-keeping systems.</p>

    <p>Skills: React Js, Spring Boot</p>
    <div className="liveBt">

      <a
          href="https://srichaitanyaschool.net/users/login"
                    target="_blank"
                    rel="noopener noreferrer"
                          className="webbtn1"
                  >
                          Live

                  </a>
      {/* <button className="webbtn2">GitHub</button> */}

      
    </div>
  </div>
        </div>
   






        <p className="MobileText">Technologies</p>
        <p className="summary">
          Discover my skills and experience in various technologies through my
          personal website, where I share insights and innovative solutions.
        </p>

      <div className="technologyView">
       
        <div className="techContainer">
          <div className="techCard">
          <div style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center' , justifyContent:'center', marginTop:20, marginBottom:10}}>
 
<SiReact style={{ color: '#61DAFB', marginRight: 8, width: 30, height: 30  }} />
            <p className="techTitle">React JS</p>
            </div>
            <p className="techDesc">
              Experienced in building dynamic web applications using React JS
              and component-based architecture.
            </p>
          </div>
 
          <div className="techCard">
          <div style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center' , justifyContent:'center', marginTop:20, marginBottom:10}}>
 
          <SiReact style={{ color: '#61DAFB', marginRight: 8, width: 30, height: 30  }} />
 
            <p className="techTitle">React Native</p>
            </div>
            <p className="techDesc">
              Developed cross-platform mobile apps using React Native, ensuring
              native performance and seamless user experiences.
            </p>
          </div>
 
          <div className="techCard">
          <div style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center' , justifyContent:'center', marginTop:20, marginBottom:10}}>
          <SiHtml5 style={{ color: '#e34c26', marginRight: 6, width: 30, height: 30 }} />
  <SiCss3 style={{ color: '#1572b6', marginRight: 8, width: 30, height: 30 }} />
  <p className="techTitle" style={{ margin: 0 }}>
    HTML & CSS
  </p>
</div>
 
            <p className="techDesc">
    Solid foundation in HTML & CSS for structuring and styling web pages with responsive and accessible designs.
  </p>
</div>
        </div>
        <div className="techContainer">
  <div className="techCard">
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
  <SiTypescript style={{ color: '#3178c6', marginRight: 8, width: 30, height: 30  }} />
 
    <p className="techTitle">
      TypeScript & JavaScript
    </p>
    </div>
    <p className="techDesc">
      Proficient in JavaScript and TypeScript for writing clean,
      maintainable code with enhanced developer productivity.
    </p>
  </div>
 
  <div className="techCard">
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
  <SiJavascript style={{ color: '#f7df1e',marginRight: 8, width: 30, height: 30 }} />
 
    <p className="techTitle">
      UI / UX Design
    </p>
    </div>
    <p className="techDesc">
      Skilled in crafting intuitive and visually appealing user
      experiences and interfaces that align with modern design
      principles.
    </p>
  </div>
 
  <div className="techCard">
  
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
  <SiKotlin style={{ color: '#7F52FF', marginRight: 8, width: 30, height: 30 }} />
 
    <p className="techTitle">
      
    Kotlin
    </p>
    </div>
    <p className="techDesc">
    Experience in developing modern, efficient, and type-safe applications using Kotlin, with a focus on clean architecture, maintainability, and performance.
 
    </p>
  </div>
</div>
 
        <div className="techContainer">
          <div className="techCard">
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
          {/* <SiSpringboot style={{ color: '#61DAFB', marginRight: 8, width: 30, height: 30 }} /> */}
 
 
            <p className="techTitle">Java
            </p>
            </div>
            <p className="techDesc">
              Strong in object-oriented programming with Java, building scalable
              backend systems and Android applications with clean architecture.
            </p>
          </div>
 
          <div className="techCard">
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
          <SiXcode style={{ color: '#147EFB', marginRight: 8, width: 30, height: 30 }} />
  <p className="techTitle">Xcode</p>
</div>
            <p className="techDesc">
            Proficient in using Xcode for iOS development, debugging,
            and testing native applications with seamless deployment workflows.
 
            </p>
          </div>
 
          <div className="techCard">
          <div style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center' , justifyContent:'center', marginTop:20, marginBottom:10}}>
 
          <SiMysql style={{ color: '#00758F', marginRight: 8, width: 50, height: 50 }} />
            <p className="techTitle">SQL</p>
            </div>
            <p className="techDesc">
              Strong understanding of relational databases and SQL for managing
              and querying structured data effectively.
            </p>
          </div>
        </div>
 
        
      </div>

      <div className="AditionalSkilsView">
      <p
  style={{
    color: '#000',
    fontSize: 34,
    fontWeight: 1000,
    fontFamily: 'Poppins',marginLeft:18
  }}
>
  Additional technologies and skills
</p>

        <p className="AditionalSkilsSummary">
          Discover my additional skills and expertise, elevating projects to new
          heights of quality and efficiency.
        </p>
        <div className="AditionalSkilsContainer">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>

          
          <div className="AditionalSkilsItem">
            <div className="AditionalSkilsCircleDot"></div>
            <p className="AditionalSkillText">Git & GitHub</p>
          </div>

          <div className="AditionalSkilsItem">
            <div className="AditionalSkilsCircleDot"></div>
            <p className="AditionalSkillText">Android Studio</p>
          </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>

       
          <div className="AditionalSkilsItem">
            <div className="AditionalSkilsCircleDot"></div>
            <p className="AditionalSkillText">Postman</p>
          </div>

          <div className="AditionalSkilsItem">
            <div className="AditionalSkilsCircleDot"></div>
            <p className="AditionalSkillText">VS Code</p>
          </div>
          </div>
  

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>

       
          <div className="AditionalSkilsItem">
            <div className="AditionalSkilsCircleDot"></div>
            <p className="AditionalSkillText">X Code</p>
          </div>

          <div className="AditionalSkilsItem">
            <div className="AditionalSkilsCircleDot"></div>
            <p className="AditionalSkillText">Swagger</p>
          </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>

       
          <div className="AditionalSkilsItem">
            <div className="AditionalSkilsCircleDot"></div>
            <p className="AditionalSkillText">Play&AppStore</p>
          </div>

          <div className="AditionalSkilsItem">
            <div className="AditionalSkilsCircleDot"></div>
            <p className="AditionalSkillText">FireBase Console</p>
          </div>
          </div>
        </div>
        
      </div>

      <div className="aboutmeView">
        <p className="ProjectsText">About me</p>
        <p className="summary">
          Crafting visually stunning and functional experiences - I'm a Frontend
          Developer passionate about turning ideas into digital reality
        </p>
      </div>

      <div style={{
  background: '#fff',
  padding: '40px 20px',

  fontFamily: "'Poppins', sans-serif"
}}>
  <div style={{
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>

    {/* Header */}
    <div style={{ textAlign: 'center' }}>
      <h2 style={{
        fontSize: '32px',
        fontWeight: '700',
        color: '#111827'
      }}>Let’s Connect</h2>
      <p style={{
        fontSize: '17px',
        color: '#6b7280',
        marginTop: '10px'
      }}>
        I’d love to hear from you — send a message or reach me through the info below.
      </p>
    </div>

    {/* Contact Info */}
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '20px'
    }}>
      {/* Address */}
      <div style={contactCardStyle}>
        <div style={{ ...iconCircleStyle, backgroundColor: '#22d3ee' }}>📍</div>
        <span style={cardTextStyle}>Andhra Pradesh, India</span>
      </div>

      {/* Phone */}
      <div style={contactCardStyle}>
        <div style={{ ...iconCircleStyle, backgroundColor: '#10b981' }}>📞</div>
        <a href="tel:+917093165020" style={cardLinkStyle}>+91 70931 65020</a>
      </div>

      {/* Email */}
      <div style={contactCardStyle}>
        <div style={{ ...iconCircleStyle, backgroundColor: '#7c3aed' }}>📧</div>
        <a href="mailto:sasikumarkuppam02754@gmail.com" style={cardLinkStyle}>
          sasikumarkuppam02754@gmail.com
        </a>
      </div>
    </div>

    {/* Contact Form */}
    <div style={{
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '16px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h3 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px', color: '#111827' }}>Send a Message</h3>

      <input
        type="text"
        placeholder="Your Name"
        style={inputStyle}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Mobile Number"
        style={inputStyle}
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <textarea
        placeholder="Your Message"
        style={{ ...inputStyle, height: '100px', resize: 'vertical' }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        style={sendBtnStyle}
        onClick={() => {
          console.log("Sending message...");
          handleSend();
        }}
      >
        🚀 Send Message
      </button>

      {showSuccessText && (
        <p style={{
          marginTop: '16px',
          color: 'green',
          textAlign: 'center',
          fontWeight: 500
        }}>
          ✅ Message sent successfully. Sasi Kumar will reach you soon... 😄
        </p>
      )}
    </div>
  </div>
</div>



<div style={{ maxWidth: '100%', marginTop: '40px' }}>
  <hr style={{ borderColor: '#444', marginBottom: '15px' }} />
  <div style={{

    color: '#a78bfa',
    textAlign: 'center',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: '500',
    fontSize: '14px',
    userSelect: 'none',
  }}>
    © {new Date().getFullYear()} Sasikumar. All rights reserved.
  </div>
</div>

 {showScroll && (
      <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        backgroundColor: '#2563eb', // blue
        border: 'none',
        borderRadius: '50%',
        width: '56px',
        height: '56px',
        cursor: 'pointer',
        boxShadow: '0 8px 20px rgba(37, 99, 235, 0.4)',
        color: 'white',
        fontSize: '28px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1e40af')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
      aria-label="Scroll to top"
    >
      ↑
    </button>
      )}

    </div>
  );
};

export default Home;

const contactCardStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  backgroundColor: '#fff',
  padding: '14px 22px',
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  flex: '1 1 250px'
};

const iconCircleStyle = {
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '22px',
  flexShrink: 0
};

const cardTextStyle = {
  fontSize: '16px',
  color: '#374151',
  wordBreak: 'break-word'
};

const cardLinkStyle = {
  fontSize: '16px',
  color: '#2563eb',
  textDecoration: 'none',
  wordBreak: 'break-word'
};

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  marginBottom: '16px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  fontSize: '1rem',
  outline: 'none',
  color:'#000'
};

const sendBtnStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  fontWeight: 'bold',
  fontSize: '1rem',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease-in-out'
};
