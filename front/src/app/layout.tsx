import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';

import ClientProviders from '@/providers/client.providers';

import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Green Home Construtora e Incorporadora LTDA.',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="h-28"></div>
        <ToastContainer />
        <div className="bg-primary-gray">
          <ClientProviders>{children}</ClientProviders>
        </div>
        <Footer />
      </body>
    </html>
  );
}
