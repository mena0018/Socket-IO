'use client';

import { FC, FormEvent } from 'react';
import { useSocket } from '@/hooks/useSocket';

const Form: FC = () => {
  const { sendMessage } = useSocket();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const message = String(formData.get('message'));

    sendMessage(message);
    form.reset();
  };

  return (
    <form className='w-full justify-center flex gap-6' onSubmit={handleSubmit}>
      <input
        name='message'
        placeholder='Enter a message...'
        className='input input-bordered w-full max-w-xs'
      />
      <button type='submit' className='btn btn-neutral'>
        Send
      </button>
    </form>
  );
};

export default Form;
