import React from 'react';
import './AboutMe.css';
import devImage from '../assets/Sasi_Ai.jpeg';
import { LINKEDIN_URL } from '../constants/social';

function AboutMe() {
  return (
    <section className="about-page section-shell">
      <p className="section-kicker">About</p>
      <h1 className="section-title section-title--gradient">Sasi Kumar Kuppam</h1>
      <p className="section-lead">
        Mobile App Developer focused on React Native and Kotlin — shipping real products for schools and teams.
      </p>

      <div className="about-intro">
        <div className="about-intro__text">
          <p>
            Hi, I&apos;m <strong>Sasi Kumar Kuppam</strong>, a Mobile App Developer with 3 years of
            professional experience building robust Android and cross-platform apps with React Native and Kotlin.
          </p>
          <p>
            Based in Hyderabad, I specialize in scalable mobile applications integrated with REST APIs,
            Firebase, and modern tooling. I care about performance, clear UX, and shipping to the stores.
          </p>
        </div>
        <div className="about-intro__media">
          <img src={devImage} alt="Sasi Kumar" />
        </div>
      </div>

      <div className="about-grid">
        <article className="about-block">
          <h2>Education &amp; skills</h2>
          <p>
            B.Tech in Mechanical Engineering from JNTUK (2021). Skilled in React Native, Kotlin,
            JavaScript, Redux, Firebase, REST APIs, and Play Store / App Store deployment.
          </p>
        </article>
        <article className="about-block">
          <h2>Experience</h2>
          <p>
            Currently at Varsity Education Management Pvt Ltd as a Mobile App Developer. Grew from
            intern to junior developer, contributing to Android and cross-platform products.
          </p>
        </article>
        <article className="about-block">
          <h2>Current role</h2>
          <p>
            Building cross-platform apps with React Native and Kotlin. Collaborating with design and
            backend teams, integrating APIs, and shipping to the Play Store.
          </p>
        </article>
        <article className="about-block">
          <h2>Tools</h2>
          <p>
            Android Studio, Xcode, VS Code, Firebase, SQLite, Realm, Redux, GitHub, Bitbucket,
            Google Maps, Agile/Scrum, Axios.
          </p>
        </article>
        <article className="about-block about-block--wide">
          <h2>Get in touch</h2>
          <p>
            Open to new opportunities.{' '}
            <a href="mailto:sasikumarkuppam02754@gmail.com">sasikumarkuppam02754@gmail.com</a>
            {' · '}
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </article>
      </div>
    </section>
  );
}

export default AboutMe;
