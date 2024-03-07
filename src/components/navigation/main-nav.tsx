import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@shadcn/button';

type Props = {
  links: {
    title: string;
    href: string;
    level?: string; // hé by default
  }[];
} & React.HTMLAttributes<HTMLElement>;

export function MainNav({ links, className, ...props }: Props) {
  return (
    <nav
      className={cn('flex items-center space-x-1 lg:space-x-3', className)}
      {...props}
    >
      {links.map(({ level, title, href }, i) => (
        <Button
          variant="link"
          asChild
          className={cn(
            level === 'h1' && 'text-xl font-semibold',
            (level === undefined || level === 'h2') && 'text-md font-medium',
            'transition-colors text-ghost hover:text-primary',
          )}
          key={i}
        >
          <Link href={href}>{title}</Link>
        </Button>
      ))}
    </nav>
  );
}
