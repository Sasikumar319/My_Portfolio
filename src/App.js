import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import PortfolioPage from './components/PortfolioPage';
import { NAV_ITEMS } from './data/portfolioData';
import './index.css';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      <Header navItems={NAV_ITEMS} activeSection={activeSection} />
      <main className="portfolio-main">
        <PortfolioPage />
      </main>
    </div>
  );
}

export default App;
