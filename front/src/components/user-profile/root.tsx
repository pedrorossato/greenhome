import { type ReactNode } from 'react';

interface RootProps {
  children: ReactNode;
}

export default async function Root({
  children,
}: RootProps): Promise<JSX.Element> {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full m-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {children}
      </div>
    </div>
  );
}
