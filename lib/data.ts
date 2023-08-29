import chatter from '@/public/chatter.png';
import flashcards from '@/public/flashcards.png';
import githubfinder from '@/public/githubFinder.png';
import icons from '@/public/icons.png';
import { Camera, Dumbbell, GraduationCap } from 'lucide-react';
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
  {
    title: 'Flashcards',
    description:
      'A MERN Stack App empowering users to Create, Edit, and Delete Flashcards',
    tags: [
      'React',
      'TypeScript',
      'Node.JS',
      'Express.JS',
      'MongoDB',
      'Tailwind CSS',
    ],
    imageUrl: flashcards,
    webLink: 'https://wdr-flashcards-client.vercel.app/',
    gitLink: 'https://github.com/lookingforcharlie/wdr-flashcards-server',
    demo: '#',
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
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'GitHub',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'PostgreSQL',
  'Express',
  'Python',
  'Java',
  'C#',
  'PHP',
  'Framer Motion',
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(Camera),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(Dumbbell),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(GraduationCap),
    date: '2021 - present',
  },
] as const;
