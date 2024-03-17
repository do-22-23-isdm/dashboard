'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Header } from '@@/ui-custom/header';
import { Separator } from '@shadcn/separator';
import { EstimateDetailsForm } from '@/components/estimate/estimate-details-form';

type Params = {
  params: {
    id: string;
  };
};

export default function Estimatedetails({ params }: Params) {
  const t = useTranslations();
  console.log(`param tag: ${JSON.stringify(params)}`);
  return (
    <>
      <Header
        title={`${t('Estimate.details.title')}`}
        subtitle={t('Estimate.details.description')}
      />
      <Separator className="my-4" />
      <EstimateDetailsForm
        id={params.id}
        state={t('Estimate.status.estimateInProgress.title')}
        readOnlyInputs={[
          {
            label: 'Date de création',
            value: '12/03/2023',
          },
          {
            label: 'Type de demande',
            value: 'Stockage',
          },
          {
            label: 'Prix TTC',
            value: '12 000 €',
          },
        ]}
      />
    </>
  );
}
