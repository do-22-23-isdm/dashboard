import { cn } from '@/lib/utils';
import { MainNav } from '@@/navigation/main-nav';
import { UserNav } from '@@/navigation/user-nav';
import { ThemeSwitcher } from '@@/ui-custom/theme-switcher';

type TopbarProps = {} & React.HTMLAttributes<HTMLDivElement>;

const links = [
  { title: 'MESO@LR', href: '/', level: 'h1' },
  { title: 'Dashboard', href: '/dashboard' },
];

export function Topbar({ className }: TopbarProps) {
  return (
    <div className={cn('border-b', className)}>
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" links={links} />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeSwitcher />
          <UserNav />
        </div>
      </div>
    </div>
  );
}
