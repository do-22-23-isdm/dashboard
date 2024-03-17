'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@shadcn/button';
import { cn } from '@/lib/utils';

type Props = {
  title: string;
  href: string;
  icon: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function SidebarItem({ className, title, href, icon }: Props) {
  const pathname = usePathname();

  return (
    <Button
      variant={pathname === href ? 'secondary' : 'ghost'}
      className={cn('w-full justify-start gap-2', className)}
      asChild
    >
      <Link href={href}>
        {icon}
        {title}
      </Link>
    </Button>
  );
}
