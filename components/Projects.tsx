'use client';

import React, { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { projectsData } from '../lib/data';
import { useSectionInView } from '../lib/hooks';
import Project from './Project';
import SessionHeading from './SessionHeading';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} id='projects' className='scroll-mt-[11.5rem] mb-44'>
      <SessionHeading title='My Projects' />
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          {/* What's going on with {...project} */}
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
};

export default Projects;
