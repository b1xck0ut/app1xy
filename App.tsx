
import React, { useState, useEffect, useCallback } from 'react';
import { NAV_LINKS, PROJECTS } from './constants';
import { Project } from './types';

// --- SVG ICONS (New professional & consistent set) --- //

const SunIcon = ({ className }: { className?: string }): React.ReactNode => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M12 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
  </svg>
);

const MoonIcon = ({ className }: { className?: string }): React.ReactNode => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25c0 5.385 4.365 9.75 9.75 9.75 2.572 0 4.92-.99 6.752-2.648z" />
  </svg>
);

const ArrowDownIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
    </svg>
);

const WindowIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.906-6.75h.008v.008h-.008v-.008zm.301 0a.301.301 0 11-.602 0 .301.301 0 01.602 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.5V6A2.25 2.25 0 014.5 3.75h15A2.25 2.25 0 0121.75 6v1.5m0 3V12A2.25 2.25 0 0119.5 9.75h-15A2.25 2.25 0 012.25 12v.75m19.5 0v3.75a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V12.75" />
    </svg>
);

const ChartPieIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
    </svg>
);

const CubeTransparentIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
);

const SparklesIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.5 21.75l-.398-1.178a3.375 3.375 0 00-2.455-2.456L12.75 18l1.178-.398a3.375 3.375 0 002.455-2.456L16.5 14.25l.398 1.178a3.375 3.375 0 002.456 2.456l1.178.398-1.178.398a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
);

const CircleStackIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
    </svg>
);

const BeakerIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c.251-.115.53-.174.825-.174h3.3c.295 0 .574.059.825.174m0 0c.251 1.17.251 2.459 0 3.629m-4.95 0c-.251 1.17-.251 2.459 0 3.629M12 21a2.25 2.25 0 002.25-2.25M12 21a2.25 2.25 0 01-2.25-2.25M12 21V14.25m0 0L5 14.5M12 14.25L19 14.5" />
    </svg>
);

const PresentationChartLineIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h-1.5m1.5 0h1.5m14.25 0h1.5m-1.5 0h-1.5M4.5 19.5v-2.25l2.25-3 3.375-3 4.5 2.25 3.375-3.75M4.5 19.5v-2.25" />
    </svg>
);

const LightBulbIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.375 6.375 0 00-6.375-6.375M12 12.75a6.375 6.375 0 016.375-6.375M12 12.75v-5.25M12 12.75a2.25 2.25 0 01-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
);

const CodeBracketIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
);

const CpuChipIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M12 5.25v-1.5m0 15v1.5m3.75-18h-1.5m-6 18h-1.5M15.75 5.25h-1.5m6 0h-1.5m-1.5 15h-1.5M12 9.75a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-4.5 0v-1.5a2.25 2.25 0 012.25-2.25z" />
    </svg>
);

const CheckIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

const ArrowUpRightIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
);

// --- HELPER COMPONENTS --- //

const Section: React.FC<{ id: string; className?: string; children: React.ReactNode }> = ({ id, className = '', children }) => (
    <section id={id} className={`w-full max-w-5xl mx-auto px-6 py-20 md:py-28 ${className}`}>
        {children}
    </section>
);

const Header: React.FC<{ theme: string; toggleTheme: () => void; isVisible: boolean }> = ({ theme, toggleTheme, isVisible }) => (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark`}>
        <nav className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
            <a href="#hero" className="text-lg font-bold text-text-heading-light dark:text-text-heading-dark hover:text-accent-1-light dark:hover:text-accent-1-dark transition-colors">[app1xy]</a>
            <div className="hidden md:flex items-center space-x-6">
                {NAV_LINKS.map(link => (
                    <a key={link.name} href={link.href} className="text-sm font-medium text-text-body-light dark:text-text-body-dark hover:text-accent-1-light dark:hover:text-accent-1-dark transition-colors">
                        {link.name}
                    </a>
                ))}
            </div>
            <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-full text-text-body-light dark:text-text-body-dark hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
        </nav>
    </header>
);

const HeroSection = () => (
    <section id="hero" className="h-screen w-full flex flex-col justify-center items-center text-center px-4 animate-fade-in">
        <h1 className="text-4xl md:text-7xl font-black text-text-heading-light dark:text-text-heading-dark uppercase tracking-tighter">
            The Nerds of <span className="text-accent-1-light dark:text-accent-1-dark">app1xy.com</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-text-body-light dark:text-text-body-dark font-medium">
            Decoding Data, Crafting Clarity.
        </p>
        <a href="#directive" className="absolute bottom-10 animate-bounce">
            <ArrowDownIcon className="w-8 h-8 text-text-body-light dark:text-text-body-dark" />
        </a>
    </section>
);

const DirectiveSection = () => (
    <Section id="directive">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading-light dark:text-text-heading-dark">The Nerds' Directive</h2>
            <p className="mt-2 text-sm font-mono text-accent-1-light dark:text-accent-1-dark">[Our Collective Manifesto]</p>
        </div>
        <div className="mt-12 text-lg max-w-3xl mx-auto space-y-6 text-text-body-light dark:text-text-body-dark text-left md:text-center">
            <p>We are a collective. A duo bound by a shared, almost obsessive, passion for the intricacies of data and the elegance of modern, clean design. The data tells the story; we are merely the translators.</p>
            <p>Our philosophy is simple: data is the new creative director. We believe that within raw information lies the potential for compelling narratives, profound insights, and elegant solutions. Our mission is to synthesise complexity into clarity, transforming datasets into decisions.</p>
        </div>
    </Section>
);

const CapabilitiesSection = () => {
    const capabilities = [
        {
            icon: WindowIcon,
            title: "Dynamic Web Experiences",
            description: "We build websites that aren't static pages, but living systems. By harnessing user interaction and real-time data, we create personalised digital environments that adapt, respond, and engage."
        },
        {
            icon: ChartPieIcon,
            title: "Interactive Data Narratives",
            description: "We transform complex datasets from mere statistics into compelling stories. We architect bespoke portals and visualisations that empower users to explore information and uncover insights for themselves."
        },
        {
            icon: CubeTransparentIcon,
            title: "Intelligent Digital Platforms",
            description: "Beyond websites, we engineer intelligent platforms. From adaptive learning systems to custom analytics dashboards, we build tools that use data to drive functionality and deliver smarter outcomes."
        },
        {
            icon: SparklesIcon,
            title: "AI Workflow Integration",
            description: "We help businesses integrate bespoke AI solutions into their existing workflows, automating processes, enhancing creativity, and unlocking new efficiencies."
        }
    ];

    return (
        <Section id="capabilities" className="bg-surface-light dark:bg-surface-dark">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-text-heading-light dark:text-text-heading-dark">Our Capabilities</h2>
                <p className="mt-2 text-sm font-mono text-accent-1-light dark:text-accent-1-dark">[Where Data Meets Application]</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {capabilities.map((capability, index) => (
                    <div key={capability.title} className="p-6 bg-background-light dark:bg-background-dark rounded-lg border border-border-light dark:border-border-dark space-y-4 animate-slide-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                        <capability.icon className="w-10 h-10 text-accent-1-light dark:text-accent-1-dark" />
                        <h3 className="text-xl font-bold text-text-heading-light dark:text-text-heading-dark">{capability.title}</h3>
                        <p className="text-text-body-light dark:text-text-body-dark">{capability.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

const ProjectCard: React.FC<{ project: Project; animationDelay: number }> = ({ project, animationDelay }) => (
    <div className="flex flex-col bg-background-light dark:bg-background-dark rounded-lg border border-border-light dark:border-border-dark p-6 space-y-4 animate-slide-in-up" style={{ animationDelay: `${animationDelay}ms` }}>
        <div className="flex-grow">
            <h3 className="text-xl font-bold text-text-heading-light dark:text-text-heading-dark">{project.name}</h3>
            <p className="text-sm font-medium text-accent-1-light dark:text-accent-1-dark mb-4">{project.tagline}</p>
            <ul className="space-y-2">
                {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-accent-2-light dark:text-accent-2-dark flex-shrink-0 mr-2 mt-0.5" />
                        <span className="text-text-body-light dark:text-text-body-dark text-sm">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="mt-6 pt-4 border-t border-border-light dark:border-border-dark">
             <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-accent-1-light dark:text-accent-1-dark hover:underline">
                Visit Site
                <ArrowUpRightIcon className="w-4 h-4 ml-1" />
            </a>
        </div>
    </div>
);


const ProjectsSection = () => (
    <Section id="projects">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading-light dark:text-text-heading-dark">Our Projects</h2>
            <p className="mt-2 text-sm font-mono text-accent-1-light dark:text-accent-1-dark">[Data-Driven Design in Action]</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
                <ProjectCard key={project.name} project={project} animationDelay={index * 150} />
            ))}
        </div>
        <div className="mt-20 text-center max-w-3xl mx-auto p-6 bg-surface-light dark:bg-surface-dark rounded-lg border border-border-light dark:border-border-dark">
            <h3 className="text-2xl font-bold text-text-heading-light dark:text-text-heading-dark">Our Approach</h3>
            <p className="mt-4 text-text-body-light dark:text-text-body-dark">
                All our projects are built on a foundation of comprehensive, verified data and a deep understanding of market needs. We leverage cutting-edge technology to solve real-world problems with clean, modern design, creating solutions for construction professionals, local businesses, and AI-powered content creators alike.
            </p>
        </div>
    </Section>
);

const ProcessSection = () => {
    const processSteps = [
        {
            icon: CircleStackIcon,
            title: 'Data Acquisition',
            description: 'We source, scrape, and sanitise diverse datasets, establishing a pristine foundation for discovery.'
        },
        {
            icon: BeakerIcon,
            title: 'Algorithmic Analysis',
            description: 'Our bespoke models probe and interrogate the data, uncovering hidden patterns and meaningful correlations.'
        },
        {
            icon: PresentationChartLineIcon,
            title: 'Visual Synthesis',
            description: 'We craft clear, intuitive visualisations that transform complex information into engaging, understandable narratives.'
        },
        {
            icon: LightBulbIcon,
            title: 'Strategic Insight',
            description: 'Finally, we translate our findings into actionable intelligence, providing clarity and empowering decisions.'
        }
    ];

    return (
        <Section id="process" className="bg-surface-light dark:bg-surface-dark">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-text-heading-light dark:text-text-heading-dark">The Nerds' Process</h2>
                <p className="mt-2 text-sm font-mono text-accent-1-light dark:text-accent-1-dark">[Our Algorithmic Approach]</p>
            </div>
            <div className="mt-20">
                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-y-16 md:gap-x-8">
                    {processSteps.map((step, index) => (
                        <div key={step.title} className="relative flex flex-col items-center text-center animate-slide-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                            {index < processSteps.length - 1 && (
                                <>
                                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-px" aria-hidden="true">
                                        <div className="w-full h-full border-t-2 border-dashed border-border-light dark:border-border-dark" />
                                    </div>
                                    <div className="md:hidden absolute top-full left-1/2 h-16 w-px" aria-hidden="true">
                                         <div className="h-full w-full border-l-2 border-dashed border-border-light dark:border-border-dark" />
                                    </div>
                                </>
                            )}
                            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-background-light dark:bg-background-dark border-2 border-border-light dark:border-border-dark mb-4">
                                <step.icon className="w-10 h-10 text-accent-1-light dark:text-accent-1-dark" />
                            </div>
                            <h3 className="text-xl font-bold text-text-heading-light dark:text-text-heading-dark">{step.title}</h3>
                            <p className="mt-2 text-text-body-light dark:text-text-body-dark max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

const PrinciplesSection = () => (
    <Section id="principles">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading-light dark:text-text-heading-dark">Data & Design Principles</h2>
            <p className="mt-2 text-sm font-mono text-accent-1-light dark:text-accent-1-dark">[Our Fundamental Axioms]</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="flex items-start space-x-4">
                <CodeBracketIcon className="w-8 h-8 text-accent-1-light dark:text-accent-1-dark flex-shrink-0 mt-1" />
                <div>
                    <h3 className="text-lg font-bold text-text-heading-light dark:text-text-heading-dark">Integrity Above All</h3>
                    <p className="mt-1 text-text-body-light dark:text-text-body-dark">Data is sacrosanct. We are committed to ethical sourcing, transparent methodologies, and unbiased analysis.</p>
                </div>
            </div>
            <div className="flex items-start space-x-4">
                <CpuChipIcon className="w-8 h-8 text-accent-1-light dark:text-accent-1-dark flex-shrink-0 mt-1" />
                <div>
                    <h3 className="text-lg font-bold text-text-heading-light dark:text-text-heading-dark">Clarity Through Design</h3>
                    <p className="mt-1 text-text-body-light dark:text-text-body-dark">We believe minimalist design serves a functional purpose: to reduce cognitive load and let the data speak for itself.</p>
                </div>
            </div>
        </div>
    </Section>
);

const ContactSection = () => {
    return (
        <Section id="connect" className="bg-surface-light dark:bg-surface-dark">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-text-heading-light dark:text-text-heading-dark">Initiate a Connection</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-text-body-light dark:text-text-body-dark">
                    Have a data challenge or a project that requires our peculiar brand of analysis? The collective is reachable.
                </p>
                <div className="mt-8">
                    <a
                        href="mailto:hello@app1xy.com"
                        className="inline-block py-3 px-8 text-base font-medium rounded-md text-white bg-accent-1-light hover:bg-opacity-90 dark:bg-accent-1-dark dark:hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-1-light dark:ring-offset-background-dark transition-all transform hover:scale-105"
                    >
                        hello@app1xy.com
                    </a>
                </div>
                 <p className="mt-6 text-sm font-mono text-text-body-light/70 dark:text-text-body-dark/70">
                    Your query will be processed. A response is not guaranteed, but is logically probable for intriguing problems.
                 </p>
            </div>
        </Section>
    );
};

const Footer = () => (
    <footer className="bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark">
        <div className="max-w-5xl mx-auto py-8 px-6 text-center text-sm text-text-body-light dark:text-text-body-dark">
            <p className="font-mono text-accent-1-light dark:text-accent-1-dark">Built by Nerds, for Data.</p>
            <p className="mt-4">&copy; {new Date().getFullYear()} app1xy.com. All rights reserved.</p>
            <p>All spellings meticulously configured for UK English.</p>
        </div>
    </footer>
);

// --- MAIN APP COMPONENT --- //
const App = () => {
    const [theme, setTheme] = useState('dark');
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Theme logic
    useEffect(() => {
        const root = window.document.documentElement;
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
        setTheme(initialTheme);
        
        if (initialTheme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const root = window.document.documentElement;
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        root.classList.toggle('dark', newTheme === 'dark');
    };

    // Header visibility on scroll
    const controlHeader = useCallback(() => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY && window.scrollY > 80) { // if scroll down and past header
                setShowHeader(false);
            } else { // if scroll up
                setShowHeader(true);
            }
            setLastScrollY(window.scrollY);
        }
    }, [lastScrollY]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlHeader);
            return () => {
                window.removeEventListener('scroll', controlHeader);
            };
        }
    }, [controlHeader]);

    return (
        <div className="font-sans text-text-body-light dark:text-text-body-dark">
            <Header theme={theme} toggleTheme={toggleTheme} isVisible={showHeader} />
            <main>
                <HeroSection />
                <DirectiveSection />
                <CapabilitiesSection />
                <ProjectsSection />
                <ProcessSection />
                <PrinciplesSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;
