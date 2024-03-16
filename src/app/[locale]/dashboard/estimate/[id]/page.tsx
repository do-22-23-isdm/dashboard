import React from 'react';
import { useTranslations } from 'next-intl';
import { Header } from '@@/ui-custom/header';
import { Separator } from '@shadcn/separator';
import { getTranslations } from 'next-intl/server';
import { EstimateDetailsForm } from '@/components/estimate/estimate-details-form';

export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: `${t('Estimate.details.title')} - ${t('Metadata.appTitle')}`,
    description: t('Estimate.details.description'),
  };
}

export default function Estimatedetails() {
  const t = useTranslations();
  return (
    <>
      <Header
        title={`${t('Estimate.details.title')}`}
        subtitle={t('Estimate.details.description')}
      />
      <Separator className="my-4" />
      <EstimateDetailsForm
        id="1234567890"
        status={t('Estimate.details.status.waitingForApproval')}
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
