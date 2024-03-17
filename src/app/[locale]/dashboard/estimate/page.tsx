import React from 'react';
import { FileText, MessageCircleWarning, Plus } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Separator } from '@shadcn/separator';
import { Button } from '@shadcn/button';
import { Header } from '@@/ui-custom/header';
import { EstimateList } from '@/components/estimate/estimate-list';
import { listOfEstimate } from '@/components/estimate/mock/data';

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
        estimates={listOfEstimate}
      />
    </>
  );
}
