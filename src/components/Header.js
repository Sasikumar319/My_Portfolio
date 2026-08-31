import React, { useEffect, useState } from 'react';
import { FaLinkedinIn, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { LINKEDIN_URL, GITHUB_URL } from '../constants/social';
import './Header.css';

const SOCIALS = [
  { Icon: FaLinkedinIn, href: LINKEDIN_URL, label: 'LinkedIn' },
  { Icon: FaGithub, href: GITHUB_URL, label: 'GitHub' },
];

function Header({ navItems, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <button
          type="button"
          className="site-brand"
          onClick={() => scrollTo('home')}
          aria-label="Go to home"
        >
          <span className="site-brand__mark">&lt;/&gt;</span>
          Sasi Kumar
        </button>

        <nav className="site-nav desktop-nav" aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={activeSection === item.id ? 'is-active' : ''}
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-socials desktop-socials">
          {SOCIALS.map(({ Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon size={14} />
            </a>
          ))}
        </div>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-panel">
          <nav aria-label="Mobile">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={activeSection === item.id ? 'is-active' : ''}
                    onClick={() => scrollTo(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="site-socials">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
