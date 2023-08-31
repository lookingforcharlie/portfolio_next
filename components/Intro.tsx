'use client';

import avatar from '@/public/avatar_min.png';
import { motion } from 'framer-motion';
import {
  CornerRightDown,
  DownloadCloud,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { useActiveSectionContext } from '../context/ActiveSectionContext';
import { useSectionInView } from '../lib/hooks';

const Intro: FC = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView('Home', 0.5);

  return (
    // scroll-mt-[10rem] make Header go to section precisely
    <section
      ref={ref}
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[10rem]'
      id='home'
    >
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-5xl md:text-7xl mb-1 md:mb-3 font-semibold'>
          Charlie Feng
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className='text-base md:text-xl mb-4 font-medium'>
            Full Stack Developer
          </p>
        </motion.div>

        <div className='relative my-5'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src={avatar}
              alt='avatar'
              width='240'
              height='240'
              quality='100'
              priority={true}
              className='rounded-full border-4 border-gray-400 object-cover shadow-xl'
            />
          </motion.div>
          <motion.span
            className='text-6xl absolute bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🐰
          </motion.span>
        </div>
      </div>

      <motion.div
        className='mt-8 flex flex-col items-center justify-center'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'tween',
          delay: 0.1,
        }}
      >
        <div className='flex items-center justify-center gap-4 sm:gap-6 w-[30rem] sm:w-[36rem] px-4'>
          <a
            href='#contact'
            className='group flex items-center justify-center gap-2 sm:gap-4 w-1/2 bg-gray-900 text-white px-2 sm:px-7 py-3 border border-gray-100 rounded-full shadow-lg outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:text-white/60'
            onClick={() => {
              setActiveSection('Contact');
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{' '}
            <CornerRightDown className='opacity-70 group-hover:translate-x-1 transition' />
          </a>
          <a
            href='https://drive.google.com/file/d/1YjfnPX1I-6dqdR7ZtDSZ5g7YrvRid_2j/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='group flex items-center justify-center gap-2 sm:gap-4 bg-gray-200 border border-gray-400 w-1/2 px-4 sm:px-7 py-3 rounded-full shadow-md outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-white/10 dark:text-white/60 hover:dark:text-white'
          >
            My Resume{' '}
            <DownloadCloud className='opacity-70 group-hover:translate-x-1 transition' />
          </a>
        </div>
        <div className='flex mt-8 gap-8'>
          <a
            href='https://www.linkedin.com/in/xiaobingfeng/'
            rel='noopener noreferrer'
            target='_blank'
            className='bg-white p-4 text-gray-700 rounded-full shadow-lg hover:scale-110 transition border border-gray-200  dark:bg-white/10 dark:text-white/60 hover:dark:text-white'
          >
            <Linkedin />
          </a>
          <a
            href='https://github.com/lookingforcharlie'
            rel='noopener noreferrer'
            target='_blank'
            className='bg-white p-4 text-gray-700 rounded-full shadow-lg hover:scale-110 transition border border-gray-200  dark:bg-white/10 dark:text-white/60 hover:dark:text-white'
          >
            <Github />
          </a>
          <a
            href='https://twitter.com/CharlieFeng2020'
            rel='noopener noreferrer'
            target='_blank'
            className='bg-white p-4 text-gray-700 rounded-full shadow-lg hover:scale-110 transition border border-gray-200 dark:bg-white/10 dark:text-white/60 hover:dark:text-white'
          >
            <Twitter />
          </a>
          <a
            href='mailto:charliefeng2020@gmail.com'
            rel='noopener noreferrer'
            target='_blank'
            className='bg-white p-4 text-gray-700 rounded-full shadow-lg hover:scale-110 transition border border-gray-200 dark:bg-white/10 dark:text-white/60 hover:dark:text-white'
          >
            <Mail />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
