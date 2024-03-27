'use client';

import React, { useCallback } from 'react';
import { Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Separator } from '@shadcn/separator';
import { Button } from '@shadcn/button';
import { Header } from '@@/ui-custom/header';
import { EstimateList } from '@/components/estimate/estimate-list';
import { listOfEstimate } from '@/components/estimate/mock/data';
import { useRouter } from 'next/navigation';

export default function Estimate() {
  const t = useTranslations();
  const router = useRouter();

  const handleNewOne = useCallback(() => {
    router.push(`/dashboard/estimate/new`);
  }, [router]);
  return (
    <>
      <Header
        title={t('Estimate.title')}
        subtitle={t('Estimate.description')}
      />
      <Separator className="my-4" />
      <Button className="mb-4" variant="outline" onClick={handleNewOne}>
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
