'use client';

import { FC } from 'react';
import { useSocket } from '@/hooks/useSocket';

const Chat: FC = () => {
  const { messageReceived } = useSocket();

  return (
    <section className='w-full px-2'>
      <div className='chat chat-end'>
        <div className='chat-bubble bg-gray-400 text-white'>Hello guys!</div>
      </div>

      {messageReceived && (
        <div className='chat chat-start'>
          <div className='chat-bubble bg-blue-500 text-white'>{messageReceived}</div>
        </div>
      )}
    </section>
  );
};

export default Chat;
