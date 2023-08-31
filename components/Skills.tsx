'use client';

import SectionHeading from '@/components/SessionHeading';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { skillsData } from '../lib/data';
import { useSectionInView } from '../lib/hooks';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  const { ref } = useSectionInView('Skills');
  return (
    <section
      id='skills'
      ref={ref}
      className='mb-28 max-w-[53rem] scroll-mt-30 text-center sm:mb-44'
    >
      <SectionHeading title='My Skills' />
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className='bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
