import { Project, SocialLink } from './types';

export const PROJECTS: Project[] = [
  {
    name: 'FindAMEWP.com',
    tagline: 'The Ultimate MEWP Comparison Platform',
    url: 'https://findamewp.com',
    features: [
      'Advanced side-by-side comparison tools',
      'Data-driven selection with detailed specs',
      'Intelligent search & filtering system',
      'Database of 142+ different MEWP models',
    ],
    technologies: ['React', 'Next.js', 'TailwindCSS', 'PostgreSQL'],
  },
  {
    name: 'SpiderMEWP.com',
    tagline: "The UK's Definitive Spider Lift Knowledge Hub",
    url: 'https://spidermewp.com',
    features: [
      'Unbiased, independent equipment data',
      'Backed by first-hand operational experience',
      'Comprehensive technical guides and FAQs',
      'Rigorous data collection and verification',
    ],
    technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL'],
  },
  {
    name: 'Studio.app1xy.com',
    tagline: 'Free Peer-to-Peer Podcast Recording Studio',
    url: 'https://studio.app1xy.com',
    features: [
      'High-fidelity local audio recording',
      'Secure P2P real-time communication',
      'No server-side processing for privacy',
      'Multi-track export capabilities',
    ],
    technologies: ['React', 'WebRTC', 'Web Audio API', 'TailwindCSS'],
  },
  {
    name: 'SiteTools.app1xy.com',
    tagline: 'MEWP Berthing Plans & Site Logistics',
    url: 'https://sitetools.app1xy.com',
    features: [
      'Professional MEWP Berthing Plan creator',
      'Drag-and-drop assets on custom site maps',
      'UK National Grid Reference Finder',
      'Precise Lat/Lng and address pinpointing',
    ],
    technologies: ['React', 'Leaflet', 'Canvas API', 'TailwindCSS'],
  },
  {
    name: 'DayStreetMOT.co.uk',
    tagline: 'Digital Presence for Local Automotive Excellence',
    url: 'https://daystreetmot.co.uk',
    features: [
      'Focused on South Yorkshire local businesses',
      'Clean, user-friendly digital presence',
      'Proven to build trust and attract community',
      'Showcases service excellence (4.8/5 rating)',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Netlify'],
  },
  {
    name: 'ContentFlow.dev',
    tagline: 'Elite AI Content Generation for Professionals',
    url: 'https://contentflow.dev',
    features: [
      'Advanced AI humanisation technology',
      'Content optimised for major social platforms',
      'Customisable to match brand voice and tone',
      'Streamlined professional workflow',
    ],
    technologies: ['SvelteKit', 'Gemini API', 'Vercel', 'Stripe'],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'ph ph-github-logo',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'ph ph-linkedin-logo',
  },
  {
    name: 'X',
    url: 'https://x.com',
    icon: 'ph ph-x-logo',
  },
];