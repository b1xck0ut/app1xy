import React, { useState, useEffect, useCallback, useRef, forwardRef } from 'react';
import { PROJECTS, SOCIAL_LINKS } from './constants';
import { Project } from './types';

// --- HELPER COMPONENTS --- //

const Section = forwardRef<HTMLElement, { id: string; className?: string; children: React.ReactNode }>(({ id, className = '', children }, ref) => (
    <section id={id} ref={ref} className={`w-full max-w-6xl mx-auto px-6 py-32 md:py-40 border-l border-r border-border-light/30 dark:border-border-dark/30 relative`}>
        {/* Decorative Grid Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-border-light/30 dark:border-border-dark/30"></div>
        <div className={className}>
            {children}
        </div>
    </section>
));

const HeroSection = forwardRef<HTMLElement, { onScrollDown: () => void }>(({ onScrollDown }, ref) => (
    <section id="hero" ref={ref} className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden border-b border-border-light/30 dark:border-border-dark/30">
        
        {/* Massive SVG Background - The "Impact" */}
        <div aria-hidden="true" className="absolute inset-0 flex justify-center items-center pointer-events-none select-none overflow-hidden z-0">
            <svg viewBox="0 0 400 200" className="w-[120%] md:w-[90%] h-auto opacity-10 dark:opacity-30">
                <text x="50%" y="50%" dy=".35em" textAnchor="middle" 
                    className="font-mono font-black text-[180px] fill-transparent stroke-black dark:stroke-white" 
                    style={{ strokeWidth: '1.5px', letterSpacing: '-10px' }}>
                    [XY]
                </text>
            </svg>
        </div>
        
        <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 mb-4 border border-black dark:border-white rounded-full">
                <span className="font-mono text-xs uppercase tracking-widest text-text-heading-light dark:text-text-heading-dark">System Online</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-mono font-black text-text-heading-light dark:text-text-heading-dark uppercase tracking-tighter leading-none mix-blend-difference">
                The Nerds<br/>of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-highlight to-accent-success dark:from-white dark:to-gray-400">app1xy.com</span>
            </h1>
            
            <p className="max-w-xl mx-auto text-lg md:text-xl font-mono text-text-body-light dark:text-text-body-dark leading-relaxed">
                // DECODING_DATA<br/>
                // CRAFTING_CLARITY
            </p>
        </div>
        
        <div className="absolute bottom-10 flex flex-col items-center gap-2 z-10">
            <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">Scroll to Initialize</span>
            <button onClick={onScrollDown} className="animate-bounce p-2 border border-black/20 dark:border-white/20 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer" aria-label="Scroll down">
                <i className="ph ph-arrow-down text-xl text-text-heading-light dark:text-text-heading-dark"></i>
            </button>
        </div>
    </section>
));

const DirectiveSection = forwardRef<HTMLElement>((props, ref) => (
    <Section id="directive" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-32">
                <h2 className="text-4xl md:text-6xl font-mono font-bold text-text-heading-light dark:text-text-heading-dark tracking-tighter">DIRECTIVE</h2>
                <div className="w-12 h-1 bg-accent-highlight mt-6"></div>
            </div>
            <div className="md:col-span-8 space-y-8">
                 <p className="text-xl md:text-2xl font-light leading-relaxed text-text-heading-light dark:text-text-heading-dark">
                    We are a collective. A duo bound by a shared, almost obsessive, passion for the intricacies of data and the elegance of modern design. 
                </p>
                <div className="p-8 border border-border-light dark:border-border-dark bg-surface-light/50 dark:bg-surface-dark/50 backdrop-blur-sm rounded-sm">
                    <p className="font-mono text-sm text-accent-highlight mb-4">// MANIFESTO</p>
                    <p className="text-lg text-text-body-light dark:text-text-body-dark">
                        Data is the new creative director. Within raw information lies the potential for compelling narratives. We synthesise complexity into clarity, transforming datasets into decisions.
                    </p>
                </div>
            </div>
        </div>
    </Section>
));

const CapabilitiesSection = forwardRef<HTMLElement>((props, ref) => {
    const capabilities = [
        { title: "Dynamic Web Experiences", description: "Websites as living systems. Harnessing user interaction and real-time data for personalised environments." },
        { title: "Interactive Data Narratives", description: "Transforming statistics into stories. Bespoke portals that empower users to explore insights." },
        { title: "Intelligent Platforms", description: "Beyond static pages. Adaptive learning systems and custom analytics dashboards driving functionality." },
        { title: "AI Workflow Integration", description: "Automating processes and enhancing creativity through bespoke AI solution integration." }
    ];

    return (
        <Section id="capabilities" ref={ref}>
             <div className="mb-20">
                <h2 className="text-4xl md:text-6xl font-mono font-bold text-text-heading-light dark:text-text-heading-dark tracking-tighter uppercase">Capabilities</h2>
                <p className="mt-4 font-mono text-sm text-text-body-light dark:text-text-body-dark">[ CAP_01 - CAP_04 ]</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {capabilities.map((capability, index) => (
                    <div key={capability.title} 
                         className="group relative p-8 border border-border-light dark:border-border-dark hover:border-black dark:hover:border-white transition-colors duration-300 bg-transparent"
                         style={{ animationDelay: `${index * 150}ms` }}>
                        
                        {/* Corner markers for tech feel */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-black dark:border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-black dark:border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <h3 className="text-2xl font-mono font-bold text-text-heading-light dark:text-text-heading-dark mb-4">{capability.title}</h3>
                        <p className="text-text-body-light dark:text-text-body-dark leading-relaxed">{capability.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
});

const ProjectCard: React.FC<{ project: Project; animationDelay: number }> = ({ project, animationDelay }) => (
    <div className="group flex flex-col h-full bg-transparent border border-border-light dark:border-border-dark hover:border-accent-highlight dark:hover:border-accent-highlight transition-all duration-300 relative overflow-hidden">
        
        {/* Dot pattern overlay on hover */}
        <div className="absolute inset-0 bg-dot-pattern opacity-0 group-hover:opacity-5 text-black dark:text-white transition-opacity pointer-events-none bg-[length:12px_12px]"></div>

        <div className="p-8 flex flex-col h-full relative z-10">
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl md:text-3xl font-mono font-bold text-text-heading-light dark:text-text-heading-dark">{project.name}</h3>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="p-2 border border-border-light dark:border-border-dark rounded-full group-hover:bg-accent-highlight group-hover:text-black transition-colors">
                    <i className="ph ph-arrow-up-right text-xl"></i>
                </a>
            </div>
            
            <p className="text-lg text-text-body-light dark:text-text-body-dark mb-8 font-light">{project.tagline}</p>
            
            <div className="flex-grow">
                <ul className="space-y-3 mb-8">
                    {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm font-mono text-text-body-light dark:text-text-body-dark">
                            <span className="mr-3 text-accent-highlight">/</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border-light dark:border-border-dark border-dashed">
                {project.technologies.map(tech => (
                    <span key={tech} className="text-xs font-mono uppercase tracking-wider px-2 py-1 border border-border-light dark:border-border-dark rounded-sm text-text-body-light dark:text-text-body-dark opacity-70">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </div>
);


const ProjectsSection = forwardRef<HTMLElement>((props, ref) => (
    <Section id="projects" ref={ref}>
         <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <h2 className="text-4xl md:text-6xl font-mono font-bold text-text-heading-light dark:text-text-heading-dark tracking-tighter uppercase">Projects</h2>
                <p className="mt-4 font-mono text-sm text-text-body-light dark:text-text-body-dark">[ DEPLOYED_SYSTEMS ]</p>
            </div>
            <div className="h-px bg-border-light dark:border-border-dark flex-grow md:mx-12 opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
                <ProjectCard key={project.name} project={project} animationDelay={index * 150} />
            ))}
        </div>
    </Section>
));

const SocialManagementSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <Section id="socials" ref={ref}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                <div className="md:col-span-5">
                    <h2 className="text-4xl md:text-5xl font-mono font-bold text-text-heading-light dark:text-text-heading-dark tracking-tighter uppercase leading-tight">
                        Social<br/>Management
                    </h2>
                    <p className="mt-8 text-lg text-text-body-light dark:text-text-body-dark leading-relaxed">
                        Extending the dataset to the social sphere. We manage channels by treating content as data points, analysing engagement, and deploying targeted information streams.
                    </p>
                    
                    <div className="mt-12 flex space-x-6">
                         {SOCIAL_LINKS.map((social) => (
                            <a 
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={social.name}
                                className="group flex items-center justify-center w-12 h-12 border border-black dark:border-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                            >
                                <i className={`${social.icon} text-2xl`}></i>
                            </a>
                        ))}
                    </div>
                </div>
                
                <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { icon: "ph-chart-line-up", title: "Strategy", description: "Data-driven content pillars." },
                        { icon: "ph-share-network", title: "Optimisation", description: "Algorithm-tailored scheduling." },
                        { icon: "ph-users", title: "Community", description: "Engagement via analytics." },
                        { icon: "ph-presentation-chart", title: "Analytics", description: "Growth-focused insights." }
                    ].map((service) => (
                        <div key={service.title} className="p-6 border border-border-light dark:border-border-dark hover:border-accent-highlight transition-colors bg-surface-light/30 dark:bg-surface-dark/30 backdrop-blur-sm">
                            <i className={`ph-fill ${service.icon} text-3xl text-text-heading-light dark:text-text-heading-dark mb-4`}></i>
                            <h3 className="text-xl font-mono font-bold text-text-heading-light dark:text-text-heading-dark mb-2">{service.title}</h3>
                            <p className="text-sm text-text-body-light dark:text-text-body-dark opacity-80">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
});

const ProcessSection = forwardRef<HTMLElement>((props, ref) => {
    const processSteps = [
        { num: '01', title: 'Acquisition', description: 'Source. Scrape. Sanitise.' },
        { num: '02', title: 'Analysis', description: 'Probe. Interrogate. Model.' },
        { num: '03', title: 'Synthesis', description: 'Visualise. Clarify. Design.' },
        { num: '04', title: 'Insight', description: 'Translate. Empower. Act.' }
    ];

    return (
        <Section id="process" ref={ref}>
            <div className="mb-20 text-center">
                 <h2 className="text-4xl md:text-6xl font-mono font-bold text-text-heading-light dark:text-text-heading-dark tracking-tighter uppercase">The Process</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 border-t border-b border-border-light dark:border-border-dark divide-y md:divide-y-0 md:divide-x divide-border-light dark:divide-border-dark">
                {processSteps.map((step) => (
                    <div key={step.title} className="p-8 group hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                        <div className="text-5xl font-mono font-black text-border-light dark:text-border-dark/20 group-hover:text-accent-highlight transition-colors mb-6">
                            {step.num}
                        </div>
                        <h3 className="text-xl font-mono font-bold text-text-heading-light dark:text-text-heading-dark mb-2 uppercase">{step.title}</h3>
                        <p className="font-mono text-sm text-text-body-light dark:text-text-body-dark">{step.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
});

const ContactSection = forwardRef<HTMLElement>((props, ref) => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;
        setStatus('submitting');
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
    };

    return (
        <Section id="connect" ref={ref}>
            <div className="max-w-3xl mx-auto border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark relative p-1">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
                    <span className="font-mono text-xs uppercase text-text-body-light dark:text-text-body-dark">usr/bin/contact</span>
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                </div>

                <div className="p-8 md:p-12">
                    {status === 'success' ? (
                        <div className="text-center py-16 animate-fade-in">
                            <i className="ph-fill ph-check-circle text-6xl text-accent-success mb-6"></i>
                            <h2 className="text-3xl font-mono font-bold text-text-heading-light dark:text-text-heading-dark uppercase">Transmission Received</h2>
                            <p className="mt-4 font-mono text-sm text-text-body-light dark:text-text-body-dark">
                                // END OF LINE
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="mb-10">
                                <h2 className="text-3xl font-mono font-bold text-text-heading-light dark:text-text-heading-dark uppercase">Establish Connection</h2>
                                <p className="mt-2 font-mono text-sm text-text-body-light dark:text-text-body-dark opacity-60">Ready for data input...</p>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="space-y-6 font-mono">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-xs uppercase mb-2 text-text-body-light dark:text-text-body-dark">Ident [Name]</label>
                                        <input type="text" name="name" required value={formData.name} onChange={handleChange} 
                                            className="w-full bg-transparent border-b border-border-light dark:border-border-dark py-2 text-text-heading-light dark:text-text-heading-dark focus:outline-none focus:border-accent-highlight transition-colors rounded-none" />
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs uppercase mb-2 text-text-body-light dark:text-text-body-dark">Comms [Email]</label>
                                        <input type="email" name="email" required value={formData.email} onChange={handleChange} 
                                            className="w-full bg-transparent border-b border-border-light dark:border-border-dark py-2 text-text-heading-light dark:text-text-heading-dark focus:outline-none focus:border-accent-highlight transition-colors rounded-none" />
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="block text-xs uppercase mb-2 text-text-body-light dark:text-text-body-dark">Header [Subject]</label>
                                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} 
                                        className="w-full bg-transparent border-b border-border-light dark:border-border-dark py-2 text-text-heading-light dark:text-text-heading-dark focus:outline-none focus:border-accent-highlight transition-colors rounded-none" />
                                </div>
                                <div className="group">
                                    <label className="block text-xs uppercase mb-2 text-text-body-light dark:text-text-body-dark">Packet Data [Message]</label>
                                    <textarea name="message" rows={4} required value={formData.message} onChange={handleChange} 
                                        className="w-full bg-transparent border-b border-border-light dark:border-border-dark py-2 text-text-heading-light dark:text-text-heading-dark focus:outline-none focus:border-accent-highlight transition-colors resize-none rounded-none" />
                                </div>
                                <div className="pt-4">
                                    <button type="submit" disabled={status === 'submitting'} 
                                        className="w-full py-4 bg-text-heading-light dark:bg-text-heading-dark text-background-light dark:text-background-dark font-bold uppercase tracking-widest hover:bg-accent-highlight hover:text-black transition-all disabled:opacity-50">
                                        {status === 'submitting' ? 'TRANSMITTING...' : 'INITIATE TRANSFER'}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </Section>
    );
});

const Footer = () => (
    <footer className="border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
        <div className="max-w-6xl mx-auto py-12 px-6 flex flex-col md:flex-row justify-between items-center text-xs font-mono uppercase tracking-widest text-text-body-light dark:text-text-body-dark">
            <p>Built by Nerds.</p>
            <p className="mt-4 md:mt-0">&copy; {new Date().getFullYear()} app1xy.com</p>
        </div>
    </footer>
);

// --- MAIN APP COMPONENT --- //
const App = () => {
    const [theme, setTheme] = useState('dark');

    const sectionRefs = {
        hero: useRef<HTMLElement>(null),
        directive: useRef<HTMLElement>(null),
        capabilities: useRef<HTMLElement>(null),
        projects: useRef<HTMLElement>(null),
        socials: useRef<HTMLElement>(null),
        process: useRef<HTMLElement>(null),
        connect: useRef<HTMLElement>(null),
    };

    // Theme logic
    useEffect(() => {
        const root = window.document.documentElement;
        const savedTheme = localStorage.getItem('theme');
        const initialTheme = savedTheme || 'dark';
        setTheme(initialTheme);
        root.classList.toggle('dark', initialTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const root = window.document.documentElement;
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        root.classList.toggle('dark', newTheme === 'dark');
    };

    const handleScrollDown = () => {
        sectionRefs.directive.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="font-sans text-text-body-light dark:text-text-body-dark bg-background-light dark:bg-background-dark transition-colors duration-300 relative">
            
            {/* Ambient Background Texture */}
            <div className="fixed inset-0 pointer-events-none bg-dot-pattern opacity-[0.03] dark:opacity-[0.1] text-black dark:text-white z-0"></div>

            <main className="relative z-10">
                <HeroSection ref={sectionRefs.hero} onScrollDown={handleScrollDown} />
                <DirectiveSection ref={sectionRefs.directive} />
                <CapabilitiesSection ref={sectionRefs.capabilities} />
                <ProjectsSection ref={sectionRefs.projects} />
                <SocialManagementSection ref={sectionRefs.socials} />
                <ProcessSection ref={sectionRefs.process} />
                <ContactSection ref={sectionRefs.connect} />
            </main>
            <Footer />
            
             <button 
                onClick={toggleTheme} 
                aria-label="Toggle theme" 
                className="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center border border-black dark:border-white rounded-full bg-background-light dark:bg-background-dark text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
                {theme === 'dark' ? <i className="ph-fill ph-sun text-xl"></i> : <i className="ph-fill ph-moon text-xl"></i>}
            </button>
        </div>
    );
};

export default App;