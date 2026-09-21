import { Project, SocialLink } from './types';

export const PROJECTS: Project[] = [
  {
    name: 'MEWPHUB.com',
    tagline: "A focused toolkit for access equipment planning",
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
    tagline: "A home for a podcast, a point of view and a deep subject",
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
    tagline: 'A comparison experience built around technical detail',
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
    tagline: 'A straightforward digital home for a local automotive business',
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
