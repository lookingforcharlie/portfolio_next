'use client';

import { ChevronsUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;

    if (scrolled > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Round the percentage to no decimal here
    // Percentage doesn't work yet
    // const percentage = Math.min(
    //   100,
    //   Math.round((scrolled / scrollHeight) * 100)
    // );

    // setScrollPercentage(percentage);
    // console.log('percentage: ', percentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='fixed bottom-5 right-[4.5rem]'>
      <button
        onClick={scrollToTop}
        className={`${
          isVisible ? 'opacity-100' : 'opacity-0'
        } group p-2 bg-gray-400 hover:bg-gray-300 dark:bg-gray-900 rounded-full dark:hover:bg-gray-800 transition-all duration-500 relative border border-gray-200`}
      >
        <ChevronsUp className='group-hover:-translate-y-1 transition-all duration-300' />
      </button>
    </div>
  );
};

export default ScrollToTopBtn;
