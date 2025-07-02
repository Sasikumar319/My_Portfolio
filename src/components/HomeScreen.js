// ContactSection.js
import React from 'react';
import './HomeScreen.css'; 
import devImage from "../assets/Sasi photo.jpg";
const HomeScreen = () => {
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


    </div>
  );
};

export default HomeScreen;
