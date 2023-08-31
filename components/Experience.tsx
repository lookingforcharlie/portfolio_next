'use client';

import SectionHeading from '@/components/SessionHeading';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import React, { FC, Fragment } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { useTheme } from '../context/ThemeContext';

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = ({}) => {
  const { ref } = useSectionInView('Experience');

  const { theme, setTheme, toggleTheme } = useTheme();

  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-44'>
      <SectionHeading title='My Experience' />
      {/* to get rid of a CSS bug, might be a conflict between react-vertical-timeline and Tailwind CSS */}
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          // it's not a good idea to put key in the 3rd party component
          // that's way we use fragment here
          <Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === 'light' ? '#e5e7eb' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={item.date}
              icon={item.icon}
              // In globals.css file, we style the line
              iconStyle={{
                background:
                  theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem',
              }}
            >
              <h1 className='font-semibold capitalize'>{item.title}</h1>
              <p className='font-normal !mt-0'>{item.location}</p>
              <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                {item.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
