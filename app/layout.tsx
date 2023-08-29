// We can use @ here, cos tsconfig in next.js already set the path for us,
// @ means start from the root
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {
  default as ActiveSectionContext,
  default as ActiveSectionContextProvider,
} from '../context/ActiveSectionContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Charlie | Portfolio',
  description: "Charlie Feng's personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-slate-100 text-gray-950 relative min-h-screen pt-28 sm:pt-36`}
      >
        {/* Rendering background color for light mode starts */}
        <div className='bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        {/* Rendering background color for light mode ends */}

        <ActiveSectionContextProvider>
          <Header />
          {children}
          {/* <Footer /> */}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
