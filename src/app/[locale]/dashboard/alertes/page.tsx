import { Header } from '@@/ui-custom/header';
import { Card, CardContent, CardHeader, CardTitle } from '@shadcn/card';
import { Separator } from '@shadcn/separator';
import { Button } from '@shadcn/button';
import { AlertTriangleIcon, Cable, XCircleIcon } from 'lucide-react';
import React from 'react';
import { getTranslations } from 'next-intl/server';

export default async function AlertesView() {
  const t = await getTranslations();
  const listOfAlerts = [
    {
      title: t('Alertes.messages.clusterReady.title'),
      description: t('Alertes.messages.clusterReady.description'),
      icon: <Cable />,
      iconClassName: 'text-green-500',
    },
    {
      title: t('Alertes.messages.quotaAlmostReached.title'),
      description: t('Alertes.messages.quotaAlmostReached.description'),
      icon: <AlertTriangleIcon />,
      iconClassName: 'text-orange-500',
    },
    {
      title: t('Alertes.messages.quotaReached.title'),
      description: t('Alertes.messages.quotaReached.description'),
      icon: <AlertTriangleIcon />,
      iconClassName: 'text-red-500',
    },
  ];
  return (
    <>
      <Header title={t('Alertes.title')} subtitle={t('Alertes.description')} />
      <Separator className="my-4" />
      <Button className="mb-4 w-full" variant="outline">
        <span className="text-xl">+</span> {t('Button.add')}
      </Button>
      <div className="grid grid-cols-1 gap-4">
        {listOfAlerts.map((alert, i) => (
          <Card key={i} className="w-full">
            <CardHeader className="flex flex-row justify-between items-center pb-0">
              <div className="flex items-center">
                {React.cloneElement(alert.icon, {
                  className: `h-4 w-4 mr-2 ${alert.iconClassName}`,
                })}
                <CardTitle>{alert.title}</CardTitle>
              </div>
              <Button variant="ghost" color="red">
                <XCircleIcon className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <p>{alert.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
