
import { Project } from './types';

export const NAV_LINKS = [
  { name: 'Directive', href: '#directive' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Projects', href: '#projects' },
  { name: 'Process', href: '#process' },
  { name: 'Principles', href: '#principles' },
  { name: 'Connect', href: '#connect' },
];

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
  },
];
