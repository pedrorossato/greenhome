import { cn } from '@/app/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-800',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
