import React, { useState } from 'react';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import './index.css';
import './App.css';

const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'tech', label: 'Skills' },
];

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="portfolio-app">
      <Header tabs={TABS} activeTab={activeTab} onTabClick={setActiveTab} />
      <main className="portfolio-main">
        {activeTab === 'home' && <HomeScreen onNavigate={setActiveTab} />}
        {activeTab === 'about' && <AboutMe />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'tech' && <Technologies />}
      </main>
    </div>
  );
}

export default App;
