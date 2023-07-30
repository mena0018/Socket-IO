import './globals.css';
import type { Metadata } from 'next';
import { FC, PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Home page',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en' data-theme='cupcake'>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
