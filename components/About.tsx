'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';
import { useSectionInView } from '../lib/hooks';
import SessionHeading from './SessionHeading';

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='flex flex-col items-center justify-center mb-28 max-w-[45rem] sm:mb-40 scroll-mt-[24rem] mt-12'
      id='about'
      // initial={{ opacity: 0, scale: 0 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{
      //   type: 'tween',
      //   duration: 0.2,
      // }}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      viewport={{
        once: true,
      }}
    >
      {/* <h1 className='text-3xl font-medium capitalize mb-6'>About me </h1> */}
      <SessionHeading title='About me' />
      <p className='text-sm max-w-xl mb-6 mt-4 font-semibold leading-6 text-center'>
        After pursuing the knowledge at Mohawk College that a software
        engineering diploma had to offer, I decided to put my{' '}
        <span className='text-cyan-600'>
          passion and energy on web development
        </span>
        . Implementing a toggle function or retrieving certain data from API can
        be sometimes nerve-racking and nail-biting, but alway exhilarating when
        you made it.
        <br />
        <br />I am a{' '}
        <span className='text-cyan-600'>Full Stack Web Developer</span> building
        my own version of digital world, and my current goal is to become a
        proficient version of it which requires a significant learning curve.{' '}
        <span className='text-cyan-600'>
          “Your enthusiasm of learning is tremendous”
        </span>{' '}
        is a quote about my passion for learning made by a previous leader at
        Evenica.
      </p>
    </motion.section>
  );
};

export default About;
