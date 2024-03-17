import React from 'react';
import { FileText, MessageCircleWarning, Plus } from 'lucide-react';
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
            stateTitle: t('Estimate.status.estimateInProgress.title'),
            date: '12/03/2063',
            description: t('Estimate.status.estimateInProgress.description'),
            state: 'in_progress',
          },
          {
            id: '51291483-01d2-4e56-958b-9bd7a030ceed',
            stateTitle: t('Estimate.status.estimateWaitingForApproval.title'),
            date: '12/08/2063',
            description: t(
              'Estimate.status.estimateWaitingForApproval.description',
            ),
            state: 'waiting_for_approval',
          },
          {
            id: '51291483-01d2-4e56-958b-9bd7a030ceed',
            stateTitle: t(
              'Estimate.status.estimateApproved.waitingForPayment.title',
            ),
            date: '12/08/2063',
            description: t(
              'Estimate.status.estimateApproved.waitingForPayment.description',
            ),
            state: 'waiting_for_payment',
          },
          {
            id: '51291483-01d2-4e56-958b-9bd7a030ceed',
            stateTitle: t(
              'Estimate.status.estimateApproved.paymentPending.title',
            ),
            date: '12/08/2063',
            description: t(
              'Estimate.status.estimateApproved.paymentPending.description',
            ),
            state: 'payment_pending',
          },
          {
            id: '51291483-01d2-4e56-958b-9bd7a030ceed',
            stateTitle: t(
              'Estimate.status.estimateApproved.paymentSuccessful.title',
            ),
            date: '12/08/2063',
            description: t(
              'Estimate.status.estimateApproved.paymentSuccessful.description',
            ),
            state: 'payment_succeeded',
          },
          {
            id: '51291483-01d2-4e56-958b-9bd7a030ceed',
            stateTitle: t(
              'Estimate.status.estimateApproved.paymentFailed.title',
            ),
            date: '12/08/2063',
            description: t(
              'Estimate.status.estimateApproved.paymentFailed.description',
            ),
            state: 'payment_failed',
          },
          {
            id: '51291483-01d2-4e56-958b-9bd7a030ceed',
            stateTitle: t('Estimate.status.estimateRejected.title'),
            date: '12/08/2063',
            description: t('Estimate.status.estimateRejected.description'),
            state: 'rejected',
          },
        ]}
      />
    </>
  );
}
