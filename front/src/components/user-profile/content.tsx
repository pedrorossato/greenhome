import { type ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

export default async function Content({
  children,
}: ContentProps): Promise<JSX.Element> {
  return <div className="flex flex-col items-center p-5">{children}</div>;
}
