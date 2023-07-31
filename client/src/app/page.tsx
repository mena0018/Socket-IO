import { FC } from 'react';
import Form from '@/components/Form';
import Chat from '@/components/Chat';

const Home: FC = () => {
  return (
    <main className='w-full max-w-2xl mx-auto min-h-screen flex gap-12 flex-col items-center pt-12 '>
      <h1 className='text-3xl font-semibold'>Welcome to ChatBox</h1>
      <Form />
      <Chat />
    </main>
  );
};

export default Home;
