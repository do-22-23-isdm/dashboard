'use client';

import React from 'react';
import { Button } from '@shadcn/button';
import { Card, CardContent, CardHeader, CardTitle } from '@shadcn/card';
import { Badge, Download, File, Handshake, X, CreditCard } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Label, Separator } from '@radix-ui/react-dropdown-menu';
import { Input } from '../ui/input';
import { EstimateState } from './estimate-list';
import { getIconColorFromEstimateState } from '@/lib/utils';

type Props = {
  id: string;
  stateTitle: string;
  state: EstimateState;
  readOnlyInputs: {
    label: string;
    value: string;
  }[];
} & React.HTMLAttributes<HTMLDivElement>;

export function EstimateDetailsReadOnlyForm({
  readOnlyInputs,
  id,
  stateTitle,
  state,
}: Props) {
  const t = useTranslations();
  const isWaitingForPayment =
    state === 'waiting_for_payment' || state === 'payment_failed';
  const isWaitingForApproval = state === 'waiting_for_approval';
  const isPaymentSucceeded = state === 'payment_succeeded';
  const isEstimateInProgress = state === 'in_progress';
  return (
    <>
      <Card className="mb-2">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-lg">
                {t('Estimate.title')} n°: {id}
              </CardTitle>
              <div className="flex items-center space-x-2 mt-2">
                <Badge
                  className={`w-3 h-3 rounded-full bg-${getIconColorFromEstimateState(state)}`}
                />
                <p>{stateTitle}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              {!isEstimateInProgress && (
                <Button className="mb-4" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  {t('Common.download')}
                </Button>
              )}

              {isPaymentSucceeded && (
                <Button className="mb-4" variant="outline">
                  <File className="mr-2 h-4 w-4" />
                  {t('Estimate.details.invoice')}
                </Button>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="text-sm">
          {readOnlyInputs.map((input, index) => (
            <div className="flex items-center space-x-2 mt-2" key={index}>
              <Label className="w-1/3">{input.label}</Label>
              <Input
                type="text"
                value={input.value}
                readOnly
                className="cursor-not-allowed"
              />
            </div>
          ))}
          <Separator className="my-4" />

          {isWaitingForApproval && (
            <>
              <Button className="mb-4" variant="outline">
                <Handshake className="mr-2 h-4 w-4 text-green-500" />
                {t('Common.approve')}
              </Button>
              <Button className="mb-4 ml-2" variant="outline">
                <X className="mr-2 h-4 w-4 text-red-500" />
                {t('Common.reject')}
              </Button>
            </>
          )}
          {isWaitingForPayment && (
            <Button className="mb-4 " variant="outline">
              <CreditCard className="mr-2 h-4 w-4 " />
              {t('Common.pay')}
            </Button>
          )}
        </CardContent>
      </Card>
    </>
  );
}
