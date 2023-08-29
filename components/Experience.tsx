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

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = ({}) => {
  const { ref } = useSectionInView('Experience');

  return (
    <section id='experience' ref={ref}>
      <SectionHeading title='My Experience' />
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          // it's not a good idea to put key in the 3rd party component
          // that's way we use fragment here
          <Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: '#e5e7eb',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #9ca3af',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: 'white',
                fontSize: '1.5rem',
              }}
            >
              <h1 className='font-semibold capitalize'>{item.title}</h1>
              <p className='font-normal !mt-0'>{item.location}</p>
              <p className='!mt-1 !font-normal text-gray-700'>
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
