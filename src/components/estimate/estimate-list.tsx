'use client';

import React, { useCallback } from 'react';
import { Button } from '@shadcn/button';
import { Card, CardContent, CardHeader, CardTitle } from '@shadcn/card';
import { Badge, Calendar, Eye, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

type Props = {
  estimates: {
    id: string;
    stateTitle: string;
    description: string;
    date: string;
    state: EstimateState;
  }[];
} & React.HTMLAttributes<HTMLDivElement>;

type EstimateState =
  | 'in_progress'
  | 'waiting_for_approval'
  | 'waiting_for_payment'
  | 'payment_pending'
  | 'payment_failed'
  | 'payment_succeeded'
  | 'rejected';

export function EstimateList({ className, estimates }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const getColor = useCallback((state: EstimateState) => {
    switch (state) {
      case 'in_progress':
        return 'orange-500';
      case 'waiting_for_approval':
        return 'orange-500';
      case 'waiting_for_payment':
        return 'orange-500';
      case 'payment_pending':
        return 'orange-500';
      case 'payment_failed':
        return 'red-500';
      case 'payment_succeeded':
        return 'green-500';
      case 'rejected':
        return 'red-500';
    }
  }, []);
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
              <FileText className="h-5 w-5 mr-2" />
              <CardTitle className="text-lg">
                {t('Estimate.title')} : {estimate.id}
              </CardTitle>
            </div>
            <Button
              className="ml-4"
              variant="outline"
              onClick={() => handleDetailsClick(estimate.id)}
            >
              <Eye className="mr-2 h-4 w-4" />
              {t('Common.details')}
            </Button>
          </CardHeader>
          <CardContent className="text-sm">
            <div className="flex items-center space-x-2 mt-2">
              <Badge
                className={`w-3 h-3 rounded-full bg-${getColor(estimate.state)}`}
              />
              <p>{estimate.stateTitle}</p>
            </div>
            <p className="mt-2">{estimate.description}</p>
            <div className="flex items-center mt-2">
              <Calendar className="h-4 w-4 mr-2" />
              {estimate.date}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
