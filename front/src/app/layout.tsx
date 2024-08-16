import type { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { Inter } from 'next/font/google';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';

import ClientProviders from '@/app/providers/client.providers';

import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Green Home Construtora e Incorporadora LTDA.',
  description: '',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={`${inter.className} text-lg`}>
        <Navbar />
        <div className="h-28"></div>
        <ToastContainer />
        <ClientProviders session={session}>{children}</ClientProviders>
        <Footer />
      </body>
    </html>
  );
}
