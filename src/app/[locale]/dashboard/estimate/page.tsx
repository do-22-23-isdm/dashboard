import React from 'react';
import { BadgeCheck, MessageCircleWarning, Plus } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Separator } from '@shadcn/separator';
import { Button } from '@shadcn/button';
import { Header } from '@@/ui-custom/header';
import { EstimateList } from '@/components/estimate/estimate-list';

export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: `${t('Estimate.title')} - ${t('Metadata.appTitle')}`,
    description: t('Estimate.description'),
  };
}

export default function Estimate() {
  const t = useTranslations();
  return (
    <>
      <Header
        title={t('Estimate.title')}
        subtitle={t('Estimate.description')}
      />
      <Separator className="my-4" />
      <Button className="mb-4" variant="outline">
        <Plus className="mr-2 h-4 w-4" />
        {t('Estimate.askForEstimate')}
      </Button>
      <EstimateList
        className="grid grid-cols-1 gap-4"
        estimates={[
          {
            id: 'a7688e33-1136-46cd-b930-ddfae39b0d54',
            title: t('Estimate.placeholder.estimateInProgress.title'),
            date: '12/03/2063',
            description: t(
              'Estimate.placeholder.estimateInProgress.description',
            ),
            icon: <MessageCircleWarning />,
            state: 'in_progress',
          },
          {
            id: '51291483-01d2-4e56-958b-9bd7a030ceed',
            title: t('Estimate.placeholder.estimateReady.title'),
            date: '12/08/2063',
            description: t('Estimate.placeholder.estimateReady.description'),
            icon: <BadgeCheck />,
            state: 'ready',
          },
        ]}
      />
    </>
  );
}
