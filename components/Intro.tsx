'use client';

import avatar from '@/public/avatar_min.png';
import { motion } from 'framer-motion';
import { CornerRightDown, DownloadCloud, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Intro: FC = () => {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-5xl md:text-6xl mb-1 md:mb-3 font-semibold'>
          Charlie Feng
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className='text-base md:text-xl mb-4 font-medium'>
            Full Stack Web Developer
          </p>
        </motion.div>

        <div className='relative'>
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
              width='192'
              height='192'
              quality='100'
              priority={true}
              className='rounded-full border-4 border-slate-600 object-cover shadow-xl'
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
        <div className='flex items-center justify-center gap-6 w-[30rem] sm:w-[36rem] '>
          <Link
            href='#contact'
            className='group flex items-center justify-center sm:gap-4 w-1/2 bg-gray-900 text-white px-7 py-3 rounded-full shadow-lg outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          >
            Contact me here{' '}
            <CornerRightDown className='opacity-70 group-hover:translate-x-1 transition' />
          </Link>
          <Link
            href='https://drive.google.com/file/d/1YjfnPX1I-6dqdR7ZtDSZ5g7YrvRid_2j/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='group flex items-center justify-center sm:gap-4 bg-slate-100 border border-gray-200 w-1/2 px-7 py-3 rounded-full shadow-md outline-none focus:scale-110 hover:scale-110 active:scale-105 transition'
          >
            My Resume{' '}
            <DownloadCloud className='opacity-70 group-hover:translate-x-1 transition' />
          </Link>
        </div>
        <div className='flex mt-8 gap-8'>
          <Link
            href='https://www.linkedin.com/in/xiaobingfeng/'
            rel='noopener noreferrer'
            target='_blank'
            className='bg-white p-4 text-gray-700 rounded-full shadow-lg hover:scale-110 transition border border-gray-200'
          >
            <Linkedin />
          </Link>
          <Link
            href='https://github.com/lookingforcharlie'
            rel='noopener noreferrer'
            target='_blank'
            className='bg-white p-4 text-gray-700 rounded-full shadow-lg hover:scale-110 transition border border-gray-200'
          >
            <Github />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
