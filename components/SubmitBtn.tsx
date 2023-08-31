import { Send } from 'lucide-react';
import { FC } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

interface SubmitBtnProps {}

const SubmitBtn: FC<SubmitBtnProps> = ({}) => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='group flex items-center justify-center gap-2 h-[3rem] sm:w-[10rem] bg-gray-900 text-white rounded-full outline-none focus:scale-[1.02] hover:scale-105 active:scale-105 hover:bg-gray-950 transition-all disable:scale-100 disable:bg-opacity-65 dark:bg-white dark:bg-opacity-10'
      disabled={pending}
    >
      {pending ? (
        // Tailwind CSS provides the spinner
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Submit
          <Send className='w-5 h-5 opacity-70 transition-all group-hover:translate-x-1 group-hover:opacity-100' />
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
