import React from 'react';
import { cn } from '@/lib/utils';

type SharedProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function Sidebar({ className, children }: SharedProps) {
  return <div className={cn('pb-12', className)}>{children}</div>;
}

export function SidebarSection({ className, children }: SharedProps) {
  return (
    <div className={cn('space-y-4 py-4', className)}>
      <div className="px-3 py-2">
        <div className="space-y-2">{children}</div>
      </div>
    </div>
  );
}
