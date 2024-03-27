'use client';

import React, { useCallback } from 'react';
import { Button } from '@shadcn/button';
import { Card, CardContent, CardHeader, CardTitle } from '@shadcn/card';
import { Badge, Calendar, Eye, FileText, Info } from 'lucide-react';
import { cn, getIconColorFromEstimateState } from '@/lib/utils';
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

export type EstimateState =
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
                className={`w-3 h-3 rounded-full bg-${getIconColorFromEstimateState(estimate.state)}`}
              />
              <p>{t(estimate.stateTitle as any)}</p>
            </div>
            <div className="flex items-center mt-2">
              <Info className="h-4 w-4 mr-2" />
              {t(estimate.description as any)}
            </div>
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
