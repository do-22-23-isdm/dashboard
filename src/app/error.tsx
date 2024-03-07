'use client';

import { Button } from '@shadcn/button';
import { Card, CardFooter, CardHeader, CardTitle } from '@shadcn/card';
import Link from 'next/link';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="m-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-red-500">Something went wrong!</CardTitle>
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
  );
}
