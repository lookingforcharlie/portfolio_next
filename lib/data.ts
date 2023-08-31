import chatter from '@/public/chatter.png';
import flashcards from '@/public/flashcards.png';
import githubfinder from '@/public/githubFinder.png';
import icons from '@/public/icons.png';
import mathGame from '@/public/mathGame.png';
import { BatteryFull, Dumbbell, GraduationCap } from 'lucide-react';
import React from 'react';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    title: 'Icon Generator',
    description: 'SaaS Project for generating icons using the DALL·E API',
    tags: [
      'Next.js',
      'Next AUTH',
      'TypeScript',
      'PostgreSQL',
      'tRPC',
      'Prisma',
      'Tailwind CSS',
      'AWS S3 Amplify',
    ],
    imageUrl: icons,
    webLink: 'https://icons.meetxb.com',
    gitLink: 'https://github.com/lookingforcharlie/dalle-icon-generator',
    demo: 'https://youtu.be/8SIAU4kHrvM',
  },
  {
    title: 'Realtime Chatter',
    description: 'A Real-time, mobile friendly chat room Application',
    tags: [
      'Next.js',
      'TypeScript',
      'Next AUTH',
      'Redis',
      'WebSocket',
      'Tailwind CSS',
    ],
    imageUrl: chatter,
    webLink: 'https://real-time-chatter.vercel.app',
    gitLink: 'https://github.com/lookingforcharlie/real_time_chatter',
    demo: 'https://youtu.be/fiGdjj3IXo8',
  },
  // {
  //   title: 'Flashcards',
  //   description:
  //     'A MERN Stack App empowering users to Create, Edit, and Delete Flashcards',
  //   tags: [
  //     'React',
  //     'TypeScript',
  //     'Node.JS',
  //     'Express.JS',
  //     'MongoDB',
  //     'Tailwind CSS',
  //   ],
  //   imageUrl: flashcards,
  //   webLink: 'https://wdr-flashcards-client.vercel.app/',
  //   gitLink: 'https://github.com/lookingforcharlie/wdr-flashcards-server',
  //   demo: '#',
  // },
  {
    title: 'Mobile Math Game',
    description:
      'A Full-Stack Mobile App with user authentication and authorization capabilities',
    tags: ['React Native', 'Node.JS', 'Express.JS', 'SQLite', 'Redis'],
    imageUrl: mathGame,
    webLink: 'https://youtu.be/IArmm4ae5hw',
    gitLink: 'https://github.com/lookingforcharlie/math-game',
    demo: 'https://youtu.be/IArmm4ae5hw',
  },
  {
    title: 'GitHub Dev Finder',
    description:
      'A communicative application for users to search for developers at GitHub.',
    tags: ['React', 'Tailwind CSS', 'GitHub API'],
    imageUrl: githubfinder,
    webLink: 'https://new-github-finder-one.vercel.app/',
    gitLink: 'https://github.com/lookingforcharlie/new-github-finder',
    demo: '#',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS/SASS',
  'JavaScript',
  'ES6',
  'TypeScript',
  'React',
  'ReactNative',
  'Next.js',
  'Node.js',
  'Git',
  'GitHub',
  'AWS',
  'Tailwind CSS',
  'Prisma',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Express',
  'Python',
  'Framer Motion',
  'Java',
  'C#',
  'PHP',
  'jQuery',
  'WordPress',
] as const;

// We use 'React.createElement(GraduationCap)' for icon, cos this is .ts file, we can't use jsx in .ts file
// If it's .tsx file, we can use 'icon: <GraduationCap />'
// React.createElement() is actually what's going on behind the scene anyway
export const experiencesData = [
  {
    title: 'Graduated Mohawk College',
    location: 'Hamilton, ON',
    description:
      'I graduated from Mohawk College as a Software Management Major. I built 45 projects using 7 different programming languages, and I am ready to do some damage in the digital world.',
    icon: React.createElement(GraduationCap),
    date: 'Feb 2023',
  },
  {
    title: 'Front-End Developer',
    location: 'Burlington, ON',
    description:
      'I worked for a E-Commerce Company called Evenica as a Web Developer. In there, I up-skilled to the full stack and solved real work problems.',
    icon: React.createElement(Dumbbell),
    date: 'Jan 2022 - May 2022',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Oakville, ON',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(BatteryFull),
    date: 'March 2023 - present',
  },
] as const;
