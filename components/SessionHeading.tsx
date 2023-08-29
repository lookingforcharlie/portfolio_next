import { FC } from 'react';

interface SessionHeadingProps {
  title: string;
}

const SessionHeading: FC<SessionHeadingProps> = ({ title }) => {
  return (
    <h1 className='text-3xl font-medium capitalize mb-8 text-center'>
      {title}
    </h1>
  );
};

export default SessionHeading;
