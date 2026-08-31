import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref } from 'firebase/database';
import { firebaseConfig } from './firebaseConfig';
import ContactSection from './ContactSection';
import { LINKEDIN_URL, GITHUB_URL } from '../constants/social';
import {
  ABOUT,
  APPROACH,
  CONTACT,
  HERO,
  MOBILE_APPS,
  SERVICES,
  STORE_BADGES,
  TECH_STACK,
  TOOLKIT,
  WEB_APPS,
} from '../data/portfolioData';
import './PortfolioPage.css';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const RESUME_PATH = process.env.PUBLIC_URL + '/Sasi_3years_resume.pdf';
const RESUME_FILENAME = 'Sasi_Kumar_3years_Resume.pdf';
const WHATSAPP_URL = 'https://wa.me/917093165020';

function StoreLinks({ playStore, appStore, github }) {
  return (
    <div className="store-links">
      {playStore && (
        <a href={playStore} target="_blank" rel="noopener noreferrer" className="store-links__badge">
          <img src={STORE_BADGES.playStore} alt="Get it on Google Play" />
        </a>
      )}
      {appStore && (
        <a href={appStore} target="_blank" rel="noopener noreferrer" className="store-links__text">
          App Store
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="store-links__github">
          <FaGithub /> GitHub
        </a>
      )}
    </div>
  );
}

function PortfolioPage() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = () => {
    const trimmedName = name.trim();
    const trimmedMobile = mobile.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) return alert('Please enter your name.');
    if (!trimmedMobile) return alert('Please enter your mobile number.');
    if (!/^\d{10}$/.test(trimmedMobile)) return alert('Please enter a valid 10-digit mobile number.');
    if (!trimmedMessage) return alert('Please enter your message.');

    push(ref(db, 'submissions/'), {
      name: trimmedName,
      mobile: trimmedMobile,
      message: trimmedMessage,
      timestamp: new Date().toISOString(),
    })
      .then(() => {
        setShowSuccess(true);
        setName('');
        setMobile('');
        setMessage('');
        setTimeout(() => setShowSuccess(false), 5000);
      })
      .catch(console.error);
  };

  return (
    <div className="portfolio-page">
      {/* Hero */}
      <section id="home" className="pf-hero">
        <div className="pf-hero__glow pf-hero__glow--1" aria-hidden="true" />
        <div className="pf-hero__glow pf-hero__glow--2" aria-hidden="true" />

        <div className="section-shell pf-hero__inner">
          <div className="pf-hero__content" data-aos="fade-up">
            <p className="pf-hero__eyebrow">React Native Developer · 3+ Years</p>
            <h1 className="pf-hero__title">{HERO.name}</h1>
            <p className="pf-hero__role">{HERO.role}</p>
            <p className="pf-hero__tagline">{HERO.tagline}</p>

            <div className="pf-hero__actions">
              <button type="button" className="btn btn--primary" onClick={() => scrollTo('mobile')}>
                View My Work
              </button>
              <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                Download Resume
              </a>
            </div>

            <div className="pf-hero__socials">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="pf-hero__visual" data-aos="fade-left">
            <div className="pf-hero__ring" aria-hidden="true" />
            <img src={HERO.photo} alt={HERO.name} className="pf-hero__photo" />
            <div className="pf-hero__card">
              <span>React Native</span>
              <span>Firebase · APIs</span>
            </div>
          </div>
        </div>

        <button type="button" className="pf-scroll-hint" onClick={() => scrollTo('about')}>
          Scroll to explore ↓
        </button>
      </section>

      {/* About */}
      <section id="about" className="section-block">
        <div className="section-shell">
          <p className="section-kicker" data-aos="fade-up">About Me</p>
          <h2 className="section-title section-title--gradient" data-aos="fade-up">
            A quick glance at who I am
          </h2>
          <p className="section-lead" data-aos="fade-up">
            What I do, where I work, and why I love building mobile products.
          </p>

          <div className="pf-about">
            <div className="pf-about__main" data-aos="fade-right">
              <div className="pf-about__photo-wrap">
                <img src={ABOUT.photo} alt="Sasi Kumar Kuppam" />
              </div>
              <div>
                <h3>Hi, I&apos;m Sasi Kumar</h3>
                <p>{ABOUT.intro}</p>
              </div>
            </div>

            <div className="pf-about__meta" data-aos="fade-left">
              {ABOUT.meta.map((item) => (
                <div key={item.label} className="pf-meta-card">
                  <span className="pf-meta-card__label">{item.label}</span>
                  <span className="pf-meta-card__value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="section-block pf-services">
        <div className="section-shell">
          <p className="section-kicker" data-aos="fade-up">What I Do</p>
          <h2 className="section-title section-title--gradient" data-aos="fade-up">
            From idea to Play Store
          </h2>
          <p className="section-lead" data-aos="fade-up">
            Mobile apps, APIs, offline data, and release-ready builds for real users.
          </p>

          <div className="pf-services__grid">
            {SERVICES.map((service, i) => (
              <article key={service.title} className="pf-service-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <span className="pf-service-card__num">0{i + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="pf-stack-band">
        <div className="section-shell">
          <p className="section-kicker section-kicker--center" data-aos="fade-up">My Tech Stack</p>
          <h2 className="section-title section-title--gradient section-title--center" data-aos="fade-up">
            Tools I use every day
          </h2>
          <div className="pf-stack-pills" data-aos="fade-up">
            {TECH_STACK.map((tech) => (
              <span key={tech} className="pf-stack-pill">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-block">
        <div className="section-shell pf-approach">
          <div data-aos="fade-right">
            <p className="section-kicker">My Approach</p>
            <h2 className="section-title section-title--gradient">How I work</h2>
            <ul className="pf-approach__list">
              {APPROACH.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="pf-approach__actions">
              <a href={RESUME_PATH} download={RESUME_FILENAME} className="btn btn--primary">
                Download Resume
              </a>
              <button type="button" className="btn btn--ghost" onClick={() => scrollTo('contact')}>
                Let&apos;s Talk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Apps */}
      <section id="mobile" className="section-block pf-apps">
        <div className="section-shell">
          <p className="section-kicker" data-aos="fade-up">Portfolio</p>
          <h2 className="section-title section-title--gradient" data-aos="fade-up">
            My Mobile Applications
          </h2>
          <p className="section-lead" data-aos="fade-up">
            Production apps on Play Store and personal projects with real features.
          </p>

          <div className="pf-apps__grid">
            {MOBILE_APPS.map((appItem, i) => (
              <article key={appItem.id} className="pf-app-card" data-aos="fade-up" data-aos-delay={i * 60}>
                <div className="pf-app-card__phone">
                  <div className="pf-app-card__phone-frame">
                    <img src={appItem.image} alt={appItem.title} />
                  </div>
                  {appItem.icon && (
                    <img src={appItem.icon} alt="" className="pf-app-card__icon" aria-hidden="true" />
                  )}
                </div>

                <div className="pf-app-card__body">
                  <h3>{appItem.title}</h3>
                  {appItem.stats && <p className="pf-app-card__stats">{appItem.stats}</p>}
                  <p>{appItem.description}</p>

                  <div className="pf-app-card__tags">
                    {appItem.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <StoreLinks
                    playStore={appItem.playStore}
                    appStore={appItem.appStore}
                    github={appItem.github}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Web Apps */}
      <section id="web" className="section-block">
        <div className="section-shell">
          <p className="section-kicker" data-aos="fade-up">Web</p>
          <h2 className="section-title section-title--gradient" data-aos="fade-up">
            My Web Applications
          </h2>
          <p className="section-lead" data-aos="fade-up">
            React experiments and tools that show UI and systems thinking.
          </p>

          <div className="pf-web-grid">
            {WEB_APPS.map((project, i) => (
              <article key={project.title} className="pf-web-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="pf-web-card__media">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="pf-web-card__body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="pf-app-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="store-links">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="store-links__text">
                        View Site
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="store-links__github">
                        <FaGithub /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section id="toolkit" className="section-block pf-toolkit">
        <div className="section-shell">
          <p className="section-kicker" data-aos="fade-up">Dev Toolkit</p>
          <h2 className="section-title section-title--gradient" data-aos="fade-up">
            Tools I rely on
          </h2>
          <p className="section-lead" data-aos="fade-up">
            IDEs, APIs, databases, and release tools for shipping mobile products.
          </p>

          <div className="pf-toolkit__grid">
            {TOOLKIT.map((group, i) => (
              <article key={group.category} className="pf-toolkit-card" data-aos="fade-up" data-aos-delay={i * 50}>
                <h3>{group.category}</h3>
                <ul>
                  {group.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-block pf-contact">
        <div className="section-shell">
          <p className="section-kicker" data-aos="fade-up">Let&apos;s Connect</p>
          <h2 className="section-title section-title--gradient" data-aos="fade-up">
            Feel free to reach out
          </h2>
          <p className="section-lead" data-aos="fade-up">
            Open to roles, collaborations, and friendly chats.
          </p>

          <div className="pf-contact__grid">
            <div className="pf-contact__info" data-aos="fade-right">
              <ContactSection />
              <div className="pf-contact__quick">
                <a href={`mailto:${CONTACT.email}`} className="btn btn--ghost">Send Email</a>
                <a href={RESUME_PATH} download={RESUME_FILENAME} className="btn btn--primary">Download Resume</a>
              </div>
              <div className="pf-contact__socials">
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /> LinkedIn</a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a>
              </div>
            </div>

            <div className="pf-contact__form-wrap" data-aos="fade-left">
              <h3>Contact Me</h3>
              <p>Fill out the form and I&apos;ll get back to you soon.</p>
              <input type="text" placeholder="Your name" className="field" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="tel" placeholder="Mobile number" className="field" value={mobile} onChange={(e) => setMobile(e.target.value)} />
              <textarea placeholder="Your message" className="field field--area" value={message} onChange={(e) => setMessage(e.target.value)} />
              <button type="button" className="btn btn--primary form-submit" onClick={handleSend}>
                Send Message
              </button>
              {showSuccess && <p className="form-success">Message sent — I&apos;ll reach you soon.</p>}
            </div>
          </div>
        </div>
      </section>

      <footer className="pf-footer">
        <div className="section-shell pf-footer__inner">
          <p>© {new Date().getFullYear()} Sasi Kumar Kuppam. All rights reserved.</p>
          <button type="button" onClick={() => scrollTo('home')}>Back to top ↑</button>
        </div>
      </footer>

      {showScrollTop && (
        <button type="button" className="scroll-top" onClick={() => scrollTo('home')} aria-label="Scroll to top">
          ↑
        </button>
      )}
    </div>
  );
}

export default PortfolioPage;
