import logo from '@/public/wdr_logo_nobg.png';
import {
  CornerRightDown,
  DownloadCloud,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className='py-8 text-center'>
      <div className='flex items-center justify-center'>
        <Image
          src={logo}
          alt='wdr-log'
          quality='100'
          priority={true}
          className='w-14 rounded-full'
        />
      </div>
      <div className='flex items-center justify-center px-3 mx-3 mt-2'>
        <a
          href='https://www.linkedin.com/in/xiaobingfeng/'
          rel='noopener noreferrer'
          target='_blank'
          className='p-2 text-gray-700 rounded-full hover:scale-110 transition'
        >
          <Linkedin />
        </a>
        <a
          href='https://github.com/lookingforcharlie'
          rel='noopener noreferrer'
          target='_blank'
          className='p-2 text-gray-700 rounded-full hover:scale-110 transition'
        >
          <Github />
        </a>
        <a
          href='https://twitter.com/CharlieFeng2020'
          rel='noopener noreferrer'
          target='_blank'
          className='p-2 text-gray-700 rounded-full hover:scale-110 transition'
        >
          <Twitter />
        </a>
        <a
          href='mailto:charliefeng2020@gmail.com'
          rel='noopener noreferrer'
          target='_blank'
          className='p-2 text-gray-700 rounded-full  hover:scale-110 transition '
        >
          <Mail />
        </a>
      </div>
      <p className='text-sm mt-2 opacity-50'>
        &copy; {new Date().getFullYear()} Charlie Feng. All Rights Reserved.
      </p>
    </footer>
  );
}
