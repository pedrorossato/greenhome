'use client';

import { usePathname } from 'next/navigation';

import { publicRoutes } from '@/routes';

import WhatsAppButton from './whatsapp-button';

export default function WhatsAppButtonWrapper(): JSX.Element | null {
  const pathname = usePathname();

  const isPublicRoute = publicRoutes.some((route) => {
    if (route === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(route);
  });

  if (pathname.startsWith('/admin') || pathname.startsWith('/user')) {
    return null;
  }

  if (!isPublicRoute) {
    return null;
  }

  return (
    <WhatsAppButton
      phoneNumber="5555999531120"
      message="Olá! Gostaria de saber mais sobre os empreendimentos da Green Home."
    />
  );
}
