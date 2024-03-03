'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@shadcn/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@shadcn/card';

export const metadata: Metadata = {
  title: 'Page not found | Dashboard',
  description: 'Dashboard for ISDM MESO@LR',
};

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="m-auto">
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
          <Button asChild>
            <Link href="/">Go to Homepage</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
