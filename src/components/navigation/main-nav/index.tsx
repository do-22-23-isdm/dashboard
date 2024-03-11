import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@shadcn/button';

type MainNavProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export function MainNav({ className, children, ...props }: MainNavProps) {
  return (
    <nav
      className={cn('flex items-center space-x-1 lg:space-x-3', className)}
      {...props}
    >
      {children}
    </nav>
  );
}

type MainNavItemProps = {
  link: {
    title: string;
    href: string;
    level?: string;
  };
} & React.HTMLAttributes<HTMLDivElement>;

export function MainNavItem({ className, link }: MainNavItemProps) {
  return (
    <Button
      variant="link"
      asChild
      className={cn(
        'text-md transition-colors text-ghost hover:text-primary',
        link.level === 'h1' && 'text-xl font-semibold',
        link.level === 'h2' && 'font-medium',
        className,
      )}
    >
      <Link href={link.href}>{link.title}</Link>
    </Button>
  );
}
