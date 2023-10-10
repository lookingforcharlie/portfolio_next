'use client';

import Sessionheading from '@/components/SessionHeading';
import { motion } from 'framer-motion';
import { FC } from 'react';
import toast from 'react-hot-toast';
import { sendEmail } from '../actions/sendEmail';
import { useSectionInView } from '../lib/hooks';
import SubmitBtn from './SubmitBtn';

type DataType = {
  name: string;
  message: string;
  statusCode: number;
};
interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <Sessionheading title='Contact Me' />
      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at{' '}
        <a
          className='underline text-blue-700 dark:text-blue-400'
          href='mailto:charliefeng2020@gmail.com'
        >
          My Email
        </a>{' '}
        or through this form. Click on{' '}
        <a
          className='underline text-blue-700 dark:text-blue-400'
          target='_blank'
          rel='noopener noreferrer'
          href='https://calendly.com/charliefeng2020/30min'
        >
          My Calendly
        </a>{' '}
        if you are interested in a quick call.
      </p>
      <form
        className='mt-10 flex flex-col '
        // Server Action provided by Next.JS, must be an async function
        // This server Action running on the server
        // Add 'name' attribute to each form item, and use formData.get('name') to get value
        action={async (formData) => {
          const { data } = await sendEmail(formData);
          // if no error occurs, data: {id: string}
          // if error occurs, data: {name: string, message: string, statusCode: number}
          console.log(data);
          // if (!data) return;
          // // if data has 'message' property means error occurs
          // if ('message' in data) {
          //   const errorData = data as DataType; // Assert the type
          //   toast.error(errorData.message);
          //   return;
          // } else if (data.id) {
          //   toast.success('Message sent successfully!');
          // }
          // Define a type guard function
          function isError(data: any): data is DataType {
            return 'message' in data;
          }

          // if no error occurs, data: { id: string }
          // if error occurs, data: { name: string, message: string, statusCode: number }
          console.log(data);
          if (!data) return;

          if (isError(data)) {
            toast.error(data.message);
          } else if (data.id) {
            toast.success('Message sent successfully!');
          }
        }}
      >
        <input
          type='email'
          name='senderEmail'
          required
          maxLength={50}
          className='h-12 rounded-lg borderBlack focus:outline-none px-4 dark:bg-transparent dark:border-2 dark:border-stone-500'
          placeholder='Your email'
        />
        <textarea
          name='senderMessage'
          required
          maxLength={700}
          rows={8}
          className=' my-4 rounded-lg borderBlack focus:outline-none p-4 dark:bg-transparent dark:border-2 dark:border-stone-500'
          placeholder='Your message'
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
