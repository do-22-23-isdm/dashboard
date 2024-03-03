import { MainNav } from '@/components/navigation/main-nav';
import { UserNav } from '@/components/navigation/user-nav';
import { cn } from '@/lib/utils';

type TopbarProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function Topbar({ className }: TopbarProps) {
  return (
    <div className={cn('border-b', className)}>
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
    </div>
  );
}
