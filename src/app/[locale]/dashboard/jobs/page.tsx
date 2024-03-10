import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Card, CardHeader, CardTitle } from '@shadcn/card';
import { Separator } from '@shadcn/separator';
import { Header } from '@@/ui-custom/header';
import { JobTable, JobTableProps } from '@@/jobs/jobTable';

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: `${t('Jobs.title')} - ${t('Metadata.appTitle')}`,
    description: t('Jobs.description'),
  };
}

export default function Job() {
  const t = useTranslations('Jobs');

  const jobs: JobTableProps['jobs'] = [
    {
      id: 1,
      startTime: 1632886800000,
      state: 'SUCCESS',
      cluster: 'job-1',
    },
    {
      id: 2,
      startTime: 1632886800000,
      state: 'FAILED',
      cluster: 'job-2',
    },
    {
      id: 3,
      startTime: 1632886800000,
      state: 'SUCCESS',
      cluster: 'job-3',
    },
    {
      id: 4,
      startTime: 1632886800000,
      state: 'FAILED',
      cluster: 'job-4',
    },
    {
      id: 5,
      startTime: 1632886800000,
      state: 'PENDING',
      cluster: 'job-5',
    },
    {
      id: 6,
      startTime: 1632886800000,
      state: 'RUNNING',
      cluster: 'job-6',
    },
    {
      id: 7,
      startTime: 1632886800000,
      state: 'SUSPENDED',
      cluster: 'job-7',
    },
    {
      id: 8,
      startTime: 1632886800000,
      state: 'COMPLETED',
      cluster: 'job-8',
    },
    {
      id: 9,
      startTime: 1632886800000,
      state: 'CANCELLED',
      cluster: 'job-9',
    },
    {
      id: 10,
      startTime: 1632886800000,
      state: 'TIMEOUT',
      cluster: 'job-10',
    },
    {
      id: 11,
      startTime: 1632886800000,
      state: 'NODE_FAIL',
      cluster: 'job-11',
    },
    {
      id: 12,
      startTime: 1632886800000,
      state: 'PREEMPTED',
      cluster: 'job-12',
    },
    {
      id: 13,
      startTime: 1632886800000,
      state: 'BOOT_FAIL',
      cluster: 'job-13',
    },
    {
      id: 14,
      startTime: 1632886800000,
      state: 'DEADLINE',
      cluster: 'job-14',
    },
    {
      id: 15,
      startTime: 1632886800000,
      state: 'OUT_OF_MEMORY',
      cluster: 'job-15',
    },
  ];

  return (
    <>
      <Header title={t('title')} subtitle={t('description')} />
      <Separator className="my-4" />
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="text-md font-medium">{t('numberOfJobs')}</div>
            <CardTitle>{jobs.length}</CardTitle>
          </CardHeader>
        </Card>
      </div>
      <div className="my-4">
        <JobTable jobs={jobs} />
      </div>
    </>
  );
}
