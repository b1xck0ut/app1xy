import { Project, SocialLink } from './types';

export const PROJECTS: Project[] = [
  {
    name: 'MEWPHUB.com',
    tagline: "The UK's #1 MEWP Specifications & Site Planning Toolkit",
    url: 'https://mewphub.com',
    features: [
      'Interactive MEWP Berthing Plan creator',
      'Advanced MEWP Finder with 320+ machines',
      'UK Grid Reference & Locality Finder',
      'Unified Site Hub for professional PDF packs',
    ],
    technologies: ['React', 'Leaflet', 'Canvas API', 'TailwindCSS'],
  },
  {
    name: 'SpiderMEWP.com',
    tagline: "Personal Branding for Matthew Dean & The Spiderlift Nerd Podcast",
    url: 'https://spidermewp.com',
    features: [
      'Home to the Spiderlift Nerd Podcast',
      'Independent spider lift technical data',
      'Backed by 20+ years of operational experience',
      'Comprehensive UK spider lift guides',
    ],
    technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL'],
  },
  {
    name: 'FindAMEWP.com',
    tagline: 'The Professional MEWP Comparison Platform',
    url: 'https://findamewp.com',
    features: [
      'Side-by-side technical specification comparison',
      'Data-driven selection with door-width filtering',
      'Industry-leading database of machine specs',
      'Optimised for hire desks and site surveyors',
    ],
    technologies: ['React', 'Next.js', 'TailwindCSS', 'PostgreSQL'],
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
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/matthew-dean-mewp',
    icon: 'ph ph-linkedin-logo',
  },
  {
    name: 'Podcast',
    url: 'https://spidermewp.com/podcast',
    icon: 'ph ph-microphone-stage',
  },
  {
    name: 'Email',
    url: 'mailto:info@mewphub.com',
    icon: 'ph ph-envelope',
  },
];