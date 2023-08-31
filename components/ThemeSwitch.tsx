'use client';

import { Theme } from '@/lib/types';
import { MoonStar, Sun } from 'lucide-react';
import { FC, useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface ThemeSwitchProps {}

const ThemeSwitch: FC<ThemeSwitchProps> = ({}) => {
  const { theme, setTheme, toggleTheme } = useTheme();

  return (
    <button
      className='fixed bottom-5 right-5 bg-violet-950 dark:bg-gray-300 w-[2.5rem] h-[2.5rem] bg-opacity-80 backdrop-blur-[0.5rem] shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.1] active:scale-105 transition-all'
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <MoonStar className='text-white ' />
      ) : (
        <Sun className='text-slate-700 ' />
      )}
    </button>
  );
};

export default ThemeSwitch;
