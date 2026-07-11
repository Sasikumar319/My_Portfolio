import React from 'react';
import './Technologies.css';
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

const techStack = [
  {
    name: 'React JS',
    desc: 'Dynamic web apps with component-based architecture.',
    Icon: SiReact,
    color: '#61DAFB',
  },
  {
    name: 'React Native',
    desc: 'Cross-platform mobile with native performance.',
    Icon: SiReact,
    color: '#61DAFB',
  },
  {
    name: 'HTML & CSS',
    desc: 'Responsive structure and accessible styling.',
    Icons: [SiHtml5, SiCss3],
    colors: ['#e34c26', '#1572b6'],
  },
  {
    name: 'TypeScript',
    desc: 'Typed JavaScript for cleaner, safer code.',
    Icon: SiTypescript,
    color: '#3178c6',
  },
  {
    name: 'JavaScript',
    desc: 'Core language across web and mobile.',
    Icon: SiJavascript,
    color: '#c5a100',
  },
  {
    name: 'UI / UX',
    desc: 'Clear interfaces aligned with modern patterns.',
    Icon: SiJavascript,
    color: '#0b6b63',
  },
  {
    name: 'Kotlin',
    desc: 'Type-safe Android apps with clean architecture.',
    Icon: SiKotlin,
    color: '#7F52FF',
  },
  {
    name: 'Java',
    desc: 'OOP backends and Android with solid structure.',
    Icon: FaJava,
    color: '#007396',
  },
  {
    name: 'Xcode',
    desc: 'iOS build, debug, and deployment workflows.',
    Icon: SiXcode,
    color: '#147EFB',
  },
  {
    name: 'SQL',
    desc: 'Relational data modeling and querying.',
    Icon: SiMysql,
    color: '#00758F',
  },
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

function Technologies() {
  return (
    <div className="tech-page section-shell">
      <p className="section-kicker">Skills</p>
      <h1 className="section-title section-title--gradient">Technologies</h1>
      <p className="section-lead">
        Tools I use to ship mobile and web products with confidence.
      </p>

      <div className="tech-page-grid">
        {techStack.map((tech) => (
          <article key={tech.name} className="tech-page-card">
            <div className="tech-page-card__icons">
              {tech.Icons
                ? tech.Icons.map((Icon, i) => (
                    <Icon key={i} style={{ color: tech.colors[i] }} />
                  ))
                : tech.Icon && <tech.Icon style={{ color: tech.color }} />}
            </div>
            <h3>{tech.name}</h3>
            <p>{tech.desc}</p>
          </article>
        ))}
      </div>

      <h2 className="tech-extra-title">Also comfortable with</h2>
      <ul className="tech-extra-list">
        {extraSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Technologies;
