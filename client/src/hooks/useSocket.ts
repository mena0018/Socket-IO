import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { SocketData } from '@/models';

export function useSocket() {
  const socket = io('http://localhost:8888');
  const [messageReceived, setMessageReceived] = useState('');

  const sendMessage = (message: string) => {
    socket.emit('send_message', { message });
  };

  useEffect(() => {
    socket.on('receive_message', (data: SocketData) => {
      setMessageReceived(data.message);
    });

    return () => {
      socket.off('receive_message');
    };
  }, [socket]);

  return { sendMessage, messageReceived };
}
