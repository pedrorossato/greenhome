'use client';

import { useRouter } from 'next/navigation';

import { Button } from '../ui/button';

interface RedirectPropertiesPageButtonProps {
  className?: string;
}
export default function RedirectPropertiesPageButton({
  className,
}: RedirectPropertiesPageButtonProps): JSX.Element {
  const router = useRouter();
  return (
    <Button
      className={className}
      onClick={() => {
        router.push('/properties');
      }}
    >
      Visualizar todos
    </Button>
  );
}
