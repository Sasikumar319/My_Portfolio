import React, { useEffect, useState } from 'react';
import './HomeScreen.css';
import devImage from '../assets/Sasi photo.jpg';
import GoogleMap from '../assets/googleMap.jpeg';
import Employee from '../assets/employe.jpeg';
import Parent from '../assets/parent.jpeg';
import Chess from '../assets/chess.png';
import AI from '../assets/AI.png';
import StudentForm from '../assets/image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  SiMysql,
  SiReact,
  SiHtml5,
  SiCss3,
  SiKotlin,
  SiXcode,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref } from 'firebase/database';
import { firebaseConfig } from './firebaseConfig';
import ContactSection from './ContactSection';
import { LINKEDIN_URL, GITHUB_URL } from '../constants/social';

const expertiseData = [
  {
    title: 'React Native',
    description:
      'Cross-platform mobile apps with clean architecture, API integration, and native-feel performance.',
    icon: faCode,
  },
  {
    title: 'Mobile-First',
    description:
      'Android and iOS experiences designed for real devices — fast, consistent, and reliable.',
    icon: faMobileAlt,
  },
  {
    title: 'Fast & Scalable',
    description:
      'Optimized data flow and modern frameworks so apps stay smooth as they grow.',
    icon: faRocket,
  },
  {
    title: 'Clear Interfaces',
    description:
      'Intuitive UI patterns that make complex school and business workflows easy to use.',
    icon: faPalette,
  },
  {
    title: 'Problem Solver',
    description:
      'Requirements to shipping — debugging, delivery, and practical solutions under real constraints.',
    icon: faLightbulb,
  },
  {
    title: 'Solid Architecture',
    description:
      'Maintainable structure for long-lived products — modules, state, and release-ready builds.',
    icon: faCogs,
  },
];

const mobileProjectData = [
  {
    title: 'SC Employee App',
    description:
      'College operations in one app — attendance, admissions, staff presence, and campus tasks. Built with React Native for Android.',
    image: Parent,
    liveLink:
      'https://play.google.com/store/apps/details?id=apps.srichaitanya.employee&pcampaignid=web_share',
    githubLink: '#',
  },
  {
    title: 'SC Parent App',
    description:
      'Parents stay connected to attendance, marks, fees, and performance — real-time student updates on Android.',
    image: Employee,
    liveLink:
      'https://play.google.com/store/apps/details?id=com.srichaitanya.parent&pcampaignid=web_share',
    githubLink: '#',
  },
  {
    title: 'Google Map Directions',
    description:
      'Live routes and distance with Google Maps API — driving, walking, and transit modes.',
    image: GoogleMap,
    liveLink: '#',
    githubLink: 'https://github.com/Sasikumar319/GoogleMapLive',
  },
];

const webProjectData = [
  {
    title: 'Chess AI',
    description:
      'Classic chess in React with legal moves, check detection, and a clean playable UI.',
    skills: 'React JS',
    image: Chess,
    liveLink: '#',
    githubLink: 'https://github.com/Sasikumar319/chess-ai',
  },
  {
    title: 'Chat & Voice AI',
    description:
      'Assistant for Q&A, weather, and reminders — React, Python, FastAPI, and speech recognition.',
    skills: 'React JS, Python, FastAPI',
    image: AI,
    liveLink: '#',
    githubLink: 'https://github.com/Sasikumar319/ChatBotGoogleAssistanceAI',
  },
  {
    title: 'Student Details Form',
    description:
      'Admissions-ready form with validation and responsive UI — React and Spring Boot.',
    skills: 'React JS, Spring Boot',
    image: StudentForm,
    liveLink: 'https://srichaitanyaschool.net/users/login',
    githubLink: '',
  },
];

const techStack = [
  { name: 'React JS', desc: 'Component-driven web apps', Icon: SiReact, color: '#61DAFB' },
  { name: 'React Native', desc: 'Cross-platform mobile', Icon: SiReact, color: '#61DAFB' },
  { name: 'HTML & CSS', desc: 'Structure and responsive layout', Icons: [SiHtml5, SiCss3], colors: ['#e34c26', '#1572b6'] },
  { name: 'TypeScript', desc: 'Typed, maintainable JS', Icon: SiTypescript, color: '#3178c6' },
  { name: 'JavaScript', desc: 'Core language for web & mobile', Icon: SiJavascript, color: '#c5a100' },
  { name: 'Kotlin', desc: 'Modern Android development', Icon: SiKotlin, color: '#7F52FF' },
  { name: 'Java', desc: 'OOP backends & Android', Icon: FaJava, color: '#007396' },
  { name: 'Xcode', desc: 'iOS build & debug workflows', Icon: SiXcode, color: '#147EFB' },
  { name: 'SQL', desc: 'Relational data & queries', Icon: SiMysql, color: '#00758F' },
];

const extraSkills = [
  'Git & GitHub',
  'Android Studio',
  'Postman',
  'VS Code',
  'Xcode',
  'Swagger',
  'Play & App Store',
  'Firebase Console',
];

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const RESUME_PATH = process.env.PUBLIC_URL + '/Sasi_3years_resume.pdf';
const RESUME_FILENAME = 'Sasi_Kumar_3years_Resume.pdf';

const HomeScreen = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessText, setShowSuccessText] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const handleSend = () => {
    const trimmedName = name.trim();
    const trimmedMobile = mobile.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      alert('Please enter your name.');
      return;
    }
    if (!trimmedMobile) {
      alert('Please enter your mobile number.');
      return;
    }
    if (!/^\d{10}$/.test(trimmedMobile)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!trimmedMessage) {
      alert('Please enter your message.');
      return;
    }

    push(ref(db, 'submissions/'), {
      name: trimmedName,
      mobile: trimmedMobile,
      message: trimmedMessage,
      timestamp: new Date().toISOString(),
    })
      .then(() => {
        setShowSuccessText(true);
        setName('');
        setMobile('');
        setMessage('');
        setTimeout(() => setShowSuccessText(false), 5000);
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  };

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="home-screen">
      <section className="hero">
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
        <div className="hero__orb hero__orb--2" aria-hidden="true" />

        <div className="hero__inner section-shell">
          <div className="hero__copy">
            <div className="hero__badge">
              <span className="hero__badge-dot" aria-hidden="true" />
              Available for work · Mobile Developer
            </div>

            <h1 className="hero__name">
              Hi, I&apos;m <span className="hero__name-accent">Sasi Kumar</span>
            </h1>

            <p className="hero__tagline">
              I build <strong>React Native</strong> &amp; <strong>Kotlin</strong> apps that ship to the Play Store and feel truly native.
            </p>

            <p className="hero__lead">
              3 years turning ideas into mobile products — from school apps used daily by thousands to polished cross-platform experiences.
            </p>

            <div className="hero__actions">
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                View Resume
              </a>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = RESUME_PATH;
                  link.download = RESUME_FILENAME;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </button>
              {onNavigate && (
                <button type="button" className="btn btn--text" onClick={() => onNavigate('projects')}>
                  View Projects →
                </button>
              )}
            </div>

            <div className="hero__socials">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hero__social-link">
                LinkedIn
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hero__social-link">
                GitHub
              </a>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__ring" aria-hidden="true" />
            <div className="hero__photo-wrap">
              <img src={devImage} alt="Sasi Kumar Kuppam" className="hero__photo" />
            </div>
            <div className="hero__float-card">
              <span className="hero__float-label">Stack</span>
              <span>React Native · Kotlin · Android</span>
            </div>
          </div>
        </div>
      </section>

      <div className="tech-marquee" aria-hidden="true">
        <div className="tech-marquee__track">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={`${tech.name}-${i}`}>{tech.name}</span>
          ))}
        </div>
      </div>

      <section className="section-block section-shell">
        <p className="section-kicker">What I bring</p>
        <h2 className="section-title section-title--gradient">Focused craft for mobile products</h2>
        <p className="section-lead">
          From API wiring to Play Store releases — I build apps people actually use every day.
        </p>
        <div className="expertise-grid">
          {expertiseData.map((item, index) => (
            <article key={item.title} className="expertise-item">
              <span className="expertise-item__num">0{index + 1}</span>
              <div className="expertise-item__icon">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block section-shell">
        <p className="section-kicker">Selected work</p>
        <h2 className="section-title section-title--gradient">Projects</h2>
        <p className="section-lead">
          Mobile products in production and web experiments that show how I think about UI and systems.
        </p>

        <h3 className="subsection-title">Mobile</h3>
        <div className="project-rail">
          {mobileProjectData.map((project) => (
            <article key={project.title} className="project-tile">
              <div className="project-tile__media">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-tile__body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-tile__links">
                  {project.liveLink && project.liveLink !== '#' && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      Live
                    </a>
                  )}
                  {project.githubLink && project.githubLink !== '#' && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <h3 className="subsection-title">Web</h3>
        <div className="project-rail">
          {webProjectData.map((project) => (
            <article key={project.title} className="project-tile">
              <div className="project-tile__media">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-tile__body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <p className="project-tile__skills">{project.skills}</p>
                <div className="project-tile__links">
                  {project.liveLink && project.liveLink !== '#' && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      Live
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block section-shell">
        <p className="section-kicker">Stack</p>
        <h2 className="section-title section-title--gradient">Technologies</h2>
        <p className="section-lead">
          Tools I use to ship mobile and web products with confidence.
        </p>
        <div className="tech-grid">
          {techStack.map((tech) => (
            <article key={tech.name} className="tech-chip">
              <div className="tech-chip__icons">
                {tech.Icons
                  ? tech.Icons.map((Icon, i) => (
                      <Icon key={i} style={{ color: tech.colors[i] }} />
                    ))
                  : tech.Icon && <tech.Icon style={{ color: tech.color }} />}
              </div>
              <h4>{tech.name}</h4>
              <p>{tech.desc}</p>
            </article>
          ))}
        </div>

        <h3 className="subsection-title">Also comfortable with</h3>
        <ul className="skill-list">
          {extraSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="section-block section-shell contact-block">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title section-title--gradient">Let&apos;s build something</h2>
        <p className="section-lead">
          Open to roles and collaborations — drop a message and I&apos;ll get back to you.
        </p>

        <ContactSection />

        <div className="contact-form-wrap">
          <h3 className="form-heading">Send a message</h3>
          <input
            type="text"
            placeholder="Your name"
            className="field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Mobile number"
            className="field"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <textarea
            placeholder="Your message"
            className="field field--area"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="button" className="btn btn--primary form-submit" onClick={handleSend}>
            Send message
          </button>
          {showSuccessText && (
            <p className="form-success">Message sent — Sasi Kumar will reach you soon.</p>
          )}
        </div>
      </section>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Sasi Kumar Kuppam. All rights reserved.</p>
      </footer>

      {showScroll && (
        <button type="button" className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
          ↑
        </button>
      )}
    </div>
  );
};

export default HomeScreen;
