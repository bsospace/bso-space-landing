import React from 'react';
import './globals.css';

export const metadata = {
  title: 'BSO Space',
  description: 'Be Simple but Outstanding - BSO Space',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/app/favicon.ico" />
      </head>
      <body>
        {children}
        <footer className='text-center text-white text-sm py-4 bg-gray-800'>
          &copy; {new Date().getFullYear()} | BSO Space
        </footer>
      </body>
    </html>
  );
}