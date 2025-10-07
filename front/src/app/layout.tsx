import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { UserProfile } from '@/components/user-profile';
import WhatsAppButtonWrapper from '@/components/whatsapp-button/whatsapp-button-wrapper';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

const openSans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Green Home Construtora e Incorporadora LTDA.',
  description: '',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  return (
    <html lang="en">
      <body className={`${openSans.className}`}>
        <Navbar>
          <UserProfile.Anchor />
        </Navbar>
        <div className="h-28"></div>
        <ToastContainer />
        {children}
        <Footer />
        <WhatsAppButtonWrapper />
      </body>
    </html>
  );
}
