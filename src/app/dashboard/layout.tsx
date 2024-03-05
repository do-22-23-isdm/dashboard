import { Sidebar } from '@@/sidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - MESO@LR',
  description: 'Dashboard page for ISDM MESO@LR',
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid lg:grid-cols-5 flex-1">
      <Sidebar className="hidden lg:block" />
      <div className="col-span-3 lg:col-span-4 lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">{children}</div>
      </div>
    </div>
  );
}
