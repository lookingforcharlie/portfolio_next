// We can use @ here, cos tsconfig in next.js already set the path for us,
// @ means start from the root
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer';
import ScrollToTopBtn from '../components/ScrollToTopBtn';
import ThemeSwitch from '../components/ThemeSwitch';
import {
  default as ActiveSectionContext,
  default as ActiveSectionContextProvider,
} from '../context/ActiveSectionContext';
import ThemeContextProvider from '../context/ThemeContext';
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
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body
        // overflow-x-hidden max-w-full here fixed the bug that page being horizontally scrollable on Mobile
        className={`${inter.className} bg-slate-100 text-gray-950 relative min-h-screen pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden max-w-full`}
      >
        {/* Rendering background color for light mode starts */}
        <div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'></div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
        {/* Rendering background color for light mode ends */}

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position='bottom-left' />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <ScrollToTopBtn />
      </body>
    </html>
  );
}

// 946263
