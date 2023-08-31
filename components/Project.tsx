'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useRef } from 'react';
import { projectsData } from '../lib/data';

// Because the project is typed as const
type ProjectProps = (typeof projectsData)[number];

const Project: FC<ProjectProps> = (project) => {
  // console.log('inside the function', project);
  const { title, description, tags, imageUrl, webLink, gitLink, demo } =
    project;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className='group mb-8 sm:mb-[3rem] last:mb-0'
    >
      <section className='relative  bg-gray-200 rounded-md max-w-[30rem] sm:max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[22rem] group-odd:pl-10 hover:bg-gray-300 hover:shadow-lg transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 max-w-[70%] sm:max-w-[50%] flex flex-col h-full group-odd:ml-[18rem]'>
          <h1 className='text-2xl font-semibold'>{title}</h1>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>
            {description}
          </p>
          <ul className='flex flex-wrap mt-4 gap-2'>
            {tags.map((tag, index) => (
              <li
                key={index}
                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'
              >
                {tag}
              </li>
            ))}
          </ul>
          {/* Three Links in the Card starts */}
          <div className='flex items-center justify-start gap-6 mt-8 text-xl font-semibold '>
            {demo === '#' ? null : (
              <Link
                href={demo}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-2 text-blue-900 relative overflow-hidden py-1 after:h-[2px] after:w-full after:bottom-0 after:right-full after:bg-orange-700 after:absolute hover:after:right-0 after:duration-200 dark:text-amber-700'
              >
                Demo
              </Link>
            )}

            <Link
              href={webLink}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-2 text-blue-900 relative overflow-hidden py-1 after:h-[2px] after:w-full after:bottom-0 after:right-full after:bg-orange-700 after:absolute hover:after:right-0 after:duration-200 dark:text-amber-700'
            >
              Website
            </Link>
            <Link
              href={gitLink}
              target='_blank'
              rel='noopener noreferrer'
              // disable a tag for Mobile Math Game app, cos it doesn't have github
              className='mt-2 text-blue-900 relative overflow-hidden py-1 after:h-[2px] after:w-full after:bottom-0 after:right-full after:bg-orange-700 after:absolute hover:after:right-0 after:duration-200 dark:text-amber-700'
            >
              GitHub
            </Link>
          </div>
          {/* three Links in the Card ends  */}
        </div>

        {/* <Image /> is always the 2nd child here */}
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className='rounded-xl absolute top-8 left-[22rem] sm:-right-40 sm:w-[28.5rem] shadow-2xl transition group-hover:-translate-x-3 
          group-hover:translate-y-3 
          group-hover:-rotate-2 
          group-hover:scale-[1.04] 
        
          group-odd:group-hover:translate-x-3 
          group-odd:group-hover:translate-y-3 
          group-odd:group-hover:rotate-2

          group-odd:right-[initial] 
          group-odd:-left-40
          '
        />
      </section>
    </motion.div>
  );
};

export default Project;
