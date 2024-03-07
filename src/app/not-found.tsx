'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Inter } from 'next/font/google';
import { Button } from '@shadcn/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@shadcn/card';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'Page not found - ISDM MESO@LR',
};

export default function NotFound() {
  const router = useRouter();

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.className,
        )}
      >
        <div className="flex min-h-screen flex-col">
          <main className="flex-1 flex">
            <div className="m-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-amber-500">
                    Page not found
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We are sorry, but we could not find the page you were
                    looking for.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => router.back()}>
                    Go back
                  </Button>
                  <Button asChild>
                    <Link href="/">Go to Homepage</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
