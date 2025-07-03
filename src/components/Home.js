import React, { useState } from "react";
import "./Home.css";

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
import ContactSection from "./ContactSection";




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

  return (
    
    <div className="overallDiv">




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
