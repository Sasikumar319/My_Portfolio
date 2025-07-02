import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Home from './components/Home';
import './index.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import './App.css'
import HomeScreen from './components/HomeScreen';

const TABS = [
  {id:'new', label:'Home'},
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About me' },
  { id: 'projects', label: 'Projects' },
  { id: 'tech', label: 'Technologies' },


];

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="overallContainer">
      <Header 
        tabs={TABS} 
        activeTab={activeTab} 
        onTabClick={setActiveTab} 
      />

<main className="tabView">
{activeTab === 'new' && <HomeScreen />}
  {activeTab === 'home' && <Home />}
  {activeTab === 'about' && <AboutMe />}
  {activeTab === 'projects' && <Projects />}
  {activeTab === 'tech' && <Technologies />}
  {activeTab !== 'home' && activeTab !== 'about' && activeTab !=='projects'  && activeTab !=='tech'  &&(
    <p>This is the {activeTab} section content.</p>
  )}
</main>

      {/* <Footer 
         tabs={TABS} 
         activeTab={activeTab} 
         onTabClick={setActiveTab}  />  */}
    </div>
  );
}

export default App;
