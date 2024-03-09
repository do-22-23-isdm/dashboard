import React, { useCallback } from 'react';
import { Button } from '@shadcn/button';
import { Card, CardContent, CardHeader, CardTitle } from '@shadcn/card';
import { XCircleIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  alerts: {
    title: string;
    description: string;
    icon: React.ReactElement;
    state: IconState;
  }[];
} & React.HTMLAttributes<HTMLDivElement>;

type IconState = 'success' | 'warning' | 'error';

export function AlertList({ className, alerts }: Props) {
  const getIconClassName = useCallback((state: IconState) => {
    switch (state) {
      case 'success':
        return 'text-green-500';
      case 'warning':
        return 'text-orange-500';
      case 'error':
        return 'text-red-500';
      default:
        return '';
    }
  }, []);

  return (
    <div className={cn(className)}>
      {alerts.map((alert, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row justify-between items-center pb-0">
            <div className="flex items-center">
              {React.cloneElement(alert.icon, {
                className: cn(`h-5 w-5 mr-2`, getIconClassName(alert.state)),
              })}
              <CardTitle className="text-lg">{alert.title}</CardTitle>
            </div>
            <Button variant="ghost" color="red" size="icon">
              <XCircleIcon className="h-6 w-6" />
            </Button>
          </CardHeader>
          <CardContent className="text-sm">
            <p>{alert.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
