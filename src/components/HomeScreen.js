// ContactSection.js
import React, { useEffect, useState } from 'react';
import './HomeScreen.css'; 
import devImage from "../assets/Sasi photo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GoogleMap from "../assets/googleMap.jpeg";
import Employee from "../assets/employe.jpeg";
import Parent from "../assets/parent.jpeg";
import Chess from "../assets/chess.png";
import AI from "../assets/AI.png";
import StudentForm from "../assets/image.png";
import { initializeApp } from "firebase/app";
import { getDatabase, push, ref } from "firebase/database";
import { firebaseConfig } from "./firebaseConfig";
import ContactSection from "./ContactSection";
import {
  faCode,
  faMobileAlt,
  faRocket,
  faPalette,
  faLightbulb,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';
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

  const mobileProjectData = [
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
      title: 'Google Map Directions',
      description:
        'A smart location-based tool that uses the Google Maps API to provide real-time directions and calculate the distance between two points. It supports route visualization, travel time estimation, and multiple travel modes like driving, walking, or transit.',
        image: GoogleMap,
      liveLink: '#',
      githubLink: 'https://github.com/Sasikumar319/GoogleMapLive',
    },
  ];
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

const HomeScreen = () => {

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
          once: true, 
        });
      }, []);

      const borderClasses = ['border-blue', 'border-green', 'border-purple'];

  return (
    <div className="home-section">

        <div className="home-container">

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

<div className="resume-buttons">
  <a
    href={process.env.PUBLIC_URL + '/Sasi Kumar kuppam.pdf'}
    target="_blank"
    rel="noopener noreferrer"
    className="resume-button1"
  >
    👁️ View Resume
  </a>
  <button
    className="resume-button2"
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


<div className="expertise-section">
  <div className="expertise-grid">
    {expertiseData.map((card, index) => (
      <div key={index} className="expertise-card">
<div className="icon-wrapper" style={{ color: card.iconColor }}>
  <FontAwesomeIcon icon={card.icon} className="text-xl md:text-2xl" />
  <h3 className="text-base md:text-lg font-semibold mt-2">{card.title}</h3>
</div>

        <p className="text-gray-700 mt-3 text-sm">{card.description}</p>
      </div>
    ))}
  </div>
</div>


<div className="home-projects">
<h4 className="home-ProjectsText">Projects</h4>
<p className="text-gray-700 mt-3 text-base md:text-lg">
    Explore a showcase of my creative and innovative projects — from UI design to full-stack development — demonstrating how I bring ideas to life and contribute real value to every endeavor.
  </p>
        </div>

        <div className="home-projects">
<h4 className="mobile-ProjectsText">Mobile Projects</h4>
</div>

<div className="home-projects-section">
<div className="projects-wrapper">
  {mobileProjectData.map((project, index) => {
    const randomBorder = borderClasses[Math.floor(Math.random() * borderClasses.length)];

    return (
      <div className={`project-card-div ${randomBorder}`} key={index}>
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-content">
          <h2 className="project-title">{project.title}</h2>
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

    <div className="home-projects">
<h4 className="mobile-ProjectsText">Technologies</h4>
<p className="home-webprojectSummary">
          Discover my skills and experience in various technologies through my
          personal website, where I share insights and innovative solutions.
        </p>
</div>

<div className="home-technologyView">
       
       <div className="home-techContainer">
         <div className="home-techCard">
         <div style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center' , justifyContent:'center', marginTop:20, marginBottom:10}}>

<SiReact className="text-[#61DAFB] mr-2 w-5 h-5 md:w-[30px] md:h-[30px]" />

           <p className="home-techTitle">React JS</p>
           </div>
           <p className="home-techDesc">
             Experienced in building dynamic web applications using React JS
             and component-based architecture.
           </p>
         </div>

         <div className="home-techCard">
         <div style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center' , justifyContent:'center', marginTop:20, marginBottom:10}}>

         <SiReact className="text-[#61DAFB] mr-2 w-5 h-5 md:w-[30px] md:h-[30px]" />

           <p className="home-techTitle">React Native</p>
           </div>
           <p className="home-techDesc">
             Developed cross-platform mobile apps using React Native, ensuring
             native performance and seamless user experiences.
           </p>
         </div>

         <div className="home-techCard">
         <div style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center' , justifyContent:'center', marginTop:20, marginBottom:10}}>
         <SiHtml5 className="text-[#e34c26] mr-2 w-6 h-6 md:w-[30px] md:h-[30px]" />
<SiCss3 className="text-[#1572b6] mr-2 w-6 h-6 md:w-[30px] md:h-[30px]" />
 <p className="home-techTitle" style={{ margin: 0 }}>
   HTML & CSS
 </p>
</div>

           <p className="home-techDesc">
   Solid foundation in HTML & CSS for structuring and styling web pages with responsive and accessible designs.
 </p>
</div>
       </div>
       <div className="techContainer">
 <div className="home-techCard">
 <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
 <SiTypescript className="text-[#3178c6] mr-2 w-6 h-6 md:w-[30px] md:h-[30px]" />

   <p className="home-techTitle">
     TypeScript & JavaScript
   </p>
   </div>
   <p className="home-techDesc">
     Proficient in JavaScript and TypeScript for writing clean,
     maintainable code with enhanced developer productivity.
   </p>
 </div>

 <div className="home-techCard">
 <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
 <SiJavascript className="text-[#f7df1e] mr-2 w-6 h-6 md:w-[30px] md:h-[30px]" />

   <p className="home-techTitle">
     UI / UX Design
   </p>
   </div>
   <p className="home-techDesc">
     Skilled in crafting intuitive and visually appealing user
     experiences and interfaces that align with modern design
     principles.
   </p>
 </div>

 <div className="home-techCard">
 
 <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
 <SiKotlin className="text-[#7F52FF] mr-2 w-6 h-6 md:w-[30px] md:h-[30px]" />

   <p className="home-techTitle">
     
   Kotlin
   </p>
   </div>
   <p className="home-techDesc">
   Experience in developing modern, efficient, and type-safe applications using Kotlin, with a focus on clean architecture, maintainability, and performance.

   </p>
 </div>
</div>

       <div className="techContainer">
         <div className="home-techCard">
         <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
         {/* <SiSpringboot style={{ color: '#61DAFB', marginRight: 8, width: 30, height: 30 }} /> */}


           <p className="home-techTitle">Java
           </p>
           </div>
           <p className="home-techDesc">
             Strong in object-oriented programming with Java, building scalable
             backend systems and Android applications with clean architecture.
           </p>
         </div>

         <div className="home-techCard">
         <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
         <SiXcode className="text-[#147EFB] mr-2 w-6 h-6 md:w-[30px] md:h-[30px]" />
 <p className="home-techTitle">Xcode</p>
</div>
           <p className="home-techDesc">
           Proficient in using Xcode for iOS development, debugging,
           and testing native applications with seamless deployment workflows.

           </p>
         </div>

         <div className="home-techCard">
         <div style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center' , justifyContent:'center', marginTop:20, marginBottom:10}}>

         <SiMysql className="text-[#00758F] mr-2 w-8 h-8 md:w-[50px] md:h-[50px]" />
           <p className="home-techTitle">SQL</p>
           </div>
           <p className="home-techDesc">
             Strong understanding of relational databases and SQL for managing
             and querying structured data effectively.
           </p>
         </div>
       </div>

       
     </div>

     <div className="home-projects">
<h4 className="mobile-ProjectsText">Additional technologies and skills</h4>
<p className="home-webprojectSummary">
Discover my additional skills and expertise, elevating projects to new
          heights of quality and efficiency.
        </p>
</div>

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


        <div className="home-projects">
<h4 className="mobile-ProjectsText">About me</h4>
<p className="home-webprojectSummary">
Crafting visually stunning and functional experiences - I'm a Frontend
          Developer passionate about turning ideas into digital reality
        </p>
</div>

<ContactSection />
<div className="contact-wrapper">
  
  



    <div className="contact-form">
      <h3 className="form-title">Send a Message</h3>

      <input
        type="text"
        placeholder="Your Name"
        className="input-field"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Mobile Number"
        className="input-field"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <textarea
        placeholder="Your Message"
        className="input-field textarea"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button className="send-btn" onClick={handleSend}>
        🚀 Send Message
      </button>

      {showSuccessText && (
        <p className="success-text">
          ✅ Message sent successfully. Sasi Kumar will reach you soon... 😄
        </p>
      )}
    </div>

</div>

<footer className="footer">
  <p>© 2025 Sasi Kumar Kuppam. All rights reserved.</p>
</footer>

    </div>
  );
};

export default HomeScreen;
