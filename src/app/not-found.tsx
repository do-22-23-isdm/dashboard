'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Topbar } from '@/components/topbar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Page not found | Dashboard',
  description: 'Dashboard for ISDM MESO@LR',
};

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col">
      {/* topbar */}
      <Topbar />

      {/* main content */}
      <main className="flex-1 flex justify-center items-center">
        <Card>
          <CardHeader>
            <CardTitle className="text-amber-500">Page not found</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We are sorry, but we could not find the page you were looking for.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.back()}>
              Go back
            </Button>
            <Link href="/">
              <Button>Go to Homepage</Button>
            </Link>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
