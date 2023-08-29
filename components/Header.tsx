'use client';

import { links } from '@/lib/data';
import rabbit_icon from '@/public/rabbit_icon.png';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useContext, useState } from 'react';
import {
  ActiveSectionContext,
  useActiveSectionContext,
} from '../context/ActiveSectionContext';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  // Now the hook comes from context and the custom hook built for the context
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    // z-[999] make the header always on the top, and relative here makes the z-index work
    <header className='z-[999] relative'>
      {/* fixed snippet make it scroll with us */}
      <motion.div
        className='fixed top-0 left-1/2  h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
      ></motion.div>

      <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {links.map((link) => (
            <motion.li
              key={link.name}
              className='relative h-3/4 flex items-center justify-center'
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'tween',
                duration: 0.2,
              }}
            >
              {/* <Link href='#home'>
                <Image src={rabbit_icon} alt='My Icon' />
              </Link> */}
              <Link
                href={link.hash}
                className={clsx(
                  'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition',
                  {
                    'text-gray-950': activeSection === link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className='absolute inset-0 -z-10 bg-gray-300 rounded-full'
                    // make the focus of header items move smoothly and added bouncing effect
                    layoutId='activeSection'
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
