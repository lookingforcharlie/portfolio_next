import { FC } from 'react';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    // z-[999] make the header always on the top, and relative here makes the z-index work
    <header className='z-[999] relative'>
      {/* fixed make it scroll with us */}
      <div className='fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'>
        I am Header
      </div>
    </header>
  );
};

export default Header;
