'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Header } from '@@/ui-custom/header';
import { Separator } from '@shadcn/separator';
import { EstimateDetailsReadOnlyForm } from '@/components/estimate/estimate-details-form';
import { listOfEstimate } from '@/components/estimate/mock/data';

type Params = {
  params: {
    id: string;
  };
};

export default function EstimateDetails({ params }: Params) {
  const t = useTranslations();

  return (
    <>
      <Header
        title={`${t('Estimate.details.title')}`}
        subtitle={t('Estimate.details.description')}
      />
      <Separator className="my-4" />

      {listOfEstimate
        .filter((estimate) => estimate.id === params.id)
        .map((status, index) => (
          <EstimateDetailsReadOnlyForm
            key={index}
            id={params.id}
            stateTitle={t(status.stateTitle as any)}
            state={status.state}
            readOnlyInputs={status.readonlyInputs}
          />
        ))}
    </>
  );
}
