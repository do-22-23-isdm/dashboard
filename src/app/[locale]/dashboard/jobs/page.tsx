'use client';

import { Card, CardHeader, CardTitle } from '@shadcn/card';
import { Separator } from '@shadcn/separator';
import { Header } from '@@/ui-custom/header';
import { useTranslations } from 'next-intl';
import { JobTable, JobTableRow } from '@/components/jobs/jobTable';
import { useGetJobsQuery } from '@/lib/store/api/jobApiSlice';

export default function Job() {
  const t = useTranslations();

  const { data: j} = useGetJobsQuery();

  const jobs: JobTableRow[] = [
    {
      id: 1,
      startTime: 1632886800000,
      state: 'SUCCESS',
      cluster: 'cluster-1',
    },
    {
      id: 2,
      startTime: 1632886800000,
      state: 'FAILED',
      cluster: 'cluster-2',
    },
    {
      id: 3,
      startTime: 1632886800000,
      state: 'SUCCESS',
      cluster: 'cluster-3',
    },
    {
      id: 4,
      startTime: 1632886800000,
      state: 'FAILED',
      cluster: 'cluster-4',
    },
    {
      id: 5,
      startTime: 1632886800000,
      state: 'PENDING',
      cluster: 'cluster-5',
    },
    {
      id: 6,
      startTime: 1632886800000,
      state: 'RUNNING',
      cluster: 'cluster-6',
    },
    {
      id: 7,
      startTime: 1632886800000,
      state: 'SUSPENDED',
      cluster: 'cluster-7',
    },
    {
      id: 8,
      startTime: 1632886800000,
      state: 'COMPLETED',
      cluster: 'cluster-8',
    },
    {
      id: 9,
      startTime: 1632886800000,
      state: 'CANCELLED',
      cluster: 'cluster-9',
    },
    {
      id: 10,
      startTime: 1632886800000,
      state: 'TIMEOUT',
      cluster: 'cluster-10',
    },
    {
      id: 11,
      startTime: 1632886800000,
      state: 'NODE_FAIL',
      cluster: 'cluster-11',
    },
    {
      id: 12,
      startTime: 1632886800000,
      state: 'PREEMPTED',
      cluster: 'cluster-12',
    },
    {
      id: 13,
      startTime: 1632886800000,
      state: 'BOOT_FAIL',
      cluster: 'cluster-13',
    },
    {
      id: 14,
      startTime: 1632886800000,
      state: 'DEADLINE',
      cluster: 'cluster-14',
    },
    {
      id: 15,
      startTime: 1632886800000,
      state: 'OUT_OF_MEMORY',
      cluster: 'cluster-15',
    },
  ];
  
  return (
    <>
      <Header title={t('Jobs.title')} subtitle={t('Jobs.description')} />
      <Separator className="my-4" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>{t('Jobs.numberOfJobs', {number: jobs.length})}</CardTitle>
          </CardHeader>
        </Card>
      </div>
      <div className="my-4">
        <JobTable jobs={jobs} />
      </div>
    </>
  );
}
