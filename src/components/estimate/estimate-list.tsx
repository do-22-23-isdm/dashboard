'use client';

import React, { useCallback } from 'react';
import { Button } from '@shadcn/button';
import { Card, CardContent, CardHeader, CardTitle } from '@shadcn/card';
import { Calendar, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

type Props = {
  estimates: {
    id: string;
    title: string;
    description: string;
    date: string;
    icon: React.ReactElement;
    state: IconState;
  }[];
} & React.HTMLAttributes<HTMLDivElement>;

type IconState = 'ready' | 'in_progress';

export function EstimateList({ className, estimates }: Props) {
  const getIconClassName = useCallback((state: IconState) => {
    switch (state) {
      case 'ready':
        return 'text-green-500';
      case 'in_progress':
        return 'text-orange-500';
      default:
        return '';
    }
  }, []);
  const t = useTranslations();
  const router = useRouter();

  const handleDetailsClick = useCallback(
    (id: string) => {
      router.push(`/dashboard/estimate/${id}`);
    },
    [router],
  );

  return (
    <div className={cn(className)}>
      {estimates.map((estimate, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row justify-between items-center pb-0">
            <div className="flex items-center">
              {React.cloneElement(estimate.icon, {
                className: cn(`h-5 w-5 mr-2`, getIconClassName(estimate.state)),
              })}
              <CardTitle className="text-lg">{estimate.title}</CardTitle>
            </div>
            <Button
              className="mb-4"
              variant="outline"
              onClick={() => handleDetailsClick(estimate.id)}
            >
              <Eye className="mr-2 h-4 w-4" />
              {t('Common.details')}
            </Button>
          </CardHeader>
          <CardContent className="text-sm">
            <div className="flex items-center mb-2">
              <Calendar className="h-4 w-4 mr-2" />
              {estimate.date}
            </div>
            <p>{estimate.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
