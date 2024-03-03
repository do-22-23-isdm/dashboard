'use client';

import { Button } from '@shadcn/button';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import { Card, CardFooter, CardHeader, CardTitle } from '@shadcn/card';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
                  <CardTitle className="text-red-500">
                    Something went wrong!
                  </CardTitle>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => reset()}>
                    Try again
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
