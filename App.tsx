import React from 'react';
import { PROJECTS } from './constants';

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="app1xy home">app1xy<span>.</span></a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">We make clear, useful digital things for curious businesses.</h1>
        <p className="hero-intro">app1xy is a small digital studio for ideas that need a sharper shape, a better home, or a more interesting way to work.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">See the work <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="hero-note" aria-label="What we make">
        <span>Websites</span>
        <span>Interfaces</span>
        <span>Experiments</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="section-heading">
        <h2 id="about-title">A studio for the interesting bits of the internet.</h2>
      </div>
      <div className="about-copy">
        <p className="large-copy">We like projects with a point of view.</p>
        <p>app1xy works across identity, interface and code to make digital work that feels considered and useful. Sometimes that means a polished website. Sometimes it means a tool that did not exist until someone asked the right question.</p>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: typeof PROJECTS[number]; index: number }) {
  return (
    <article className="project-row">
      <div className="project-number">0{index + 1}</div>
      <div className="project-main">
        <div className="project-title-line">
          <h3>{project.name}</h3>
          <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name}`}>
            Visit site <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="project-tagline">{project.tagline}</p>
        <ul className="project-features">
          {project.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
      </div>
      <div className="project-meta">
        <span>Focus</span>
        <p>{project.technologies.join(' · ')}</p>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section id="work" className="section work-section" aria-labelledby="work-title">
      <div className="section-intro-row">
        <div className="section-heading">
          <h2 id="work-title">Selected work, made with care.</h2>
        </div>
        <p className="section-summary">A selection of websites, tools and digital places built for people with something worth sharing.</p>
      </div>
      <div className="project-list">
        {PROJECTS.map((project, index) => <ProjectRow key={project.name} project={project} index={index} />)}
      </div>
    </section>
  );
}

const services = [
  { number: '01', title: 'Websites with a point of view', text: 'Thoughtful digital homes for brands, people and ideas that deserve more than a template.' },
  { number: '02', title: 'Tools with a job to do', text: 'Search, comparison and planning experiences that make the useful parts easier to find.' },
  { number: '03', title: 'Digital experiments', text: 'Room to test a new idea, tell a better story or make a familiar thing feel different.' },
];

function Services() {
  return (
    <section id="services" className="section services-section" aria-labelledby="services-title">
      <div className="section-heading narrow-heading">
        <h2 id="services-title">Enough structure to make the good ideas work.</h2>
      </div>
      <div className="service-list">
        {services.map((service) => (
          <article className="service-row" key={service.number}>
            <span className="service-number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const process = [
  ['Understand', 'We start with the people, information and decisions the work needs to support.'],
  ['Plan', 'We make the structure clear before we make it look finished.'],
  ['Build', 'We create the useful thing, test it properly and keep the moving parts understandable.'],
  ['Improve', 'We leave room for better content, better questions and better results over time.'],
];

function Process() {
  return (
    <section className="section process-section" aria-labelledby="process-title">
      <div className="section-heading">
        <h2 id="process-title">From a loose idea to something people can use.</h2>
      </div>
      <ol className="process-list">
        {process.map(([title, text], index) => (
          <li key={title}>
            <span className="process-number">0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="wordmark" href="#top" aria-label="Back to app1xy home">app1xy<span>.</span></a>
      <p>Independent digital studio, working wherever the good ideas are.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div id="top" className="site-shell">
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Services />
        <Process />
      </main>
      <Footer />
    </div>
  );
}
