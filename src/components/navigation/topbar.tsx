import { cn } from '@/lib/utils';

type SharedProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function Topbar({ className, children }: SharedProps) {
  return (
    <div className={cn('border-b', className)}>
      <div className="flex justify-between h-16 items-center px-4">
        {children}
      </div>
    </div>
  );
}

export function TopbarSection({ className, children }: SharedProps) {
  return (
    <div className={cn('flex items-center space-x-4', className)}>
      {children}
    </div>
  );
}
