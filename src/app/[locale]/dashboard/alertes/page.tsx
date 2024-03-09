import { Header } from '@@/ui-custom/header';
import { Card, CardContent, CardHeader, CardTitle } from '@shadcn/card';
import { Separator } from '@shadcn/separator';
import { Button } from '@shadcn/button';
import { AlertTriangleIcon, Cable, XCircleIcon } from 'lucide-react';
import React from 'react';

export const listOfAlerts = [
  {
    title: 'Your cluster is now available - #124',
    description: 'Your cluster is ready to go !',
    icon: <Cable />,
    iconClassName: 'text-green-500',
  },
  {
    title: 'You almost reached the total available compute - #124',
    description: 'Quota of compute almost reached - 12/08/1991',
    icon: <AlertTriangleIcon />,
    iconClassName: 'text-orange-500',
  },
  {
    title: 'You reached the total available compute',
    description: 'Quota of compute reached - 12/10/1991',
    icon: <AlertTriangleIcon />,
    iconClassName: 'text-red-500',
  },
];

export default function AlertesView() {
  return (
    <>
      <Header
        title="Alertes"
        subtitle="Welcome to your alerts page, here you can manage all your alerts"
      />
      <Separator className="my-4" />
      <Button className="mb-4 w-full" variant="outline">
        <span className="text-xl">+</span> Ajouter
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
