'use client';

import { cn } from '@/lib/utils';
import { Button } from '@shadcn/button';
import { LayoutDashboard, AlarmCheckIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarLinks = [
  {
    title: 'Overview',
    href: '/dashboard',
    icon: <LayoutDashboard />,
  },
  {
    title: 'Alertes',
    href: '/dashboard/alertes',
    icon: <AlarmCheckIcon />,
  },
];

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname();

  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          {/* <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Features
          </h2> */}

          <div className="space-y-1">
            {sidebarLinks.map(({ title, href, icon }, i) => (
              <Button
                key={i}
                variant={pathname === href ? 'secondary' : 'ghost'}
                className="w-full justify-start gap-2"
                asChild
              >
                <Link href={href}>
                  {icon}
                  {title}
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* other sections */}
      </div>
    </div>
  );
}
