import { Header } from '@@/ui-custom/header';
import { Separator } from '@shadcn/separator';
import { Button } from '@shadcn/button';
import { AlertTriangleIcon, BadgeCheck, Bomb, Plus } from 'lucide-react';
import React from 'react';
import { getTranslations } from 'next-intl/server';
import { AlertList } from '@/components/alerts/alert-list';

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: `${t('Alerts.title')} - ${t('Metadata.appTitle')}`,
    description: t('Alerts.description'),
  };
}

export default async function Alerts() {
  const t = await getTranslations();

  return (
    <>
      <Header title={t('Alerts.title')} subtitle={t('Alerts.description')} />
      <Separator className="my-4" />
      <Button className="mb-4" variant="outline">
        <Plus className="mr-2 h-4 w-4" />
        {t('Button.add')}
      </Button>
      <AlertList
        className="grid grid-cols-1 gap-4"
        alerts={[
          {
            title: t('Alerts.placeholder.clusterReady.title'),
            description: t('Alerts.placeholder.clusterReady.description'),
            icon: <BadgeCheck />,
            state: 'success',
          },
          {
            title: t('Alerts.placeholder.quotaAlmostReached.title'),
            description: t('Alerts.placeholder.quotaAlmostReached.description'),
            icon: <AlertTriangleIcon />,
            state: 'warning',
          },
          {
            title: t('Alerts.placeholder.quotaReached.title'),
            description: t('Alerts.placeholder.quotaReached.description'),
            icon: <Bomb />,
            state: 'error',
          },
        ]}
      />
    </>
  );
}
