import { Header } from '@@/ui-custom/header';
import { Separator } from '@shadcn/separator';
import { Button } from '@shadcn/button';
import { AlertTriangleIcon, BadgeCheck, Bomb, Plus } from 'lucide-react';
import React from 'react';
import { getTranslations } from 'next-intl/server';
import { AlertList } from '@/components/alerts/alert-list';

export default async function Alerts() {
  const t = await getTranslations();

  return (
    <>
      <Header title={t('Alertes.title')} subtitle={t('Alertes.description')} />
      <Separator className="my-4" />
      <Button className="mb-4" variant="outline">
        <Plus className="mr-2 h-4 w-4" />
        {t('Button.add')}
      </Button>
      <AlertList
        className="grid grid-cols-1 gap-4"
        alerts={[
          {
            title: t('Alertes.placeholder.clusterReady.title'),
            description: t('Alertes.placeholder.clusterReady.description'),
            icon: <BadgeCheck />,
            state: 'success',
          },
          {
            title: t('Alertes.placeholder.quotaAlmostReached.title'),
            description: t(
              'Alertes.placeholder.quotaAlmostReached.description',
            ),
            icon: <AlertTriangleIcon />,
            state: 'warning',
          },
          {
            title: t('Alertes.placeholder.quotaReached.title'),
            description: t('Alertes.placeholder.quotaReached.description'),
            icon: <Bomb />,
            state: 'error',
          },
        ]}
      />
    </>
  );
}
