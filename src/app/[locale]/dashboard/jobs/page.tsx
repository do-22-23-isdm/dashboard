import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@shadcn/card';
import { Separator } from '@shadcn/separator';
import { JobTable, JobTableRow } from '@/components/ui-custom/jobs/jobTable';
import { Header } from '@@/ui-custom/header';

export default function Job() {
  const t = useTranslations('Jobs');

  const jobs: JobTableRow[] = [
    {
      id: 1,
      startTime: 1632886800000,
      jobState: 'SUCCESS',
      cluster: 'cluster-1',
    },
    {
      id: 2,
      startTime: 1632886800000,
      jobState: 'FAILED',
      cluster: 'cluster-2',
    },
    {
      id: 3,
      startTime: 1632886800000,
      jobState: 'SUCCESS',
      cluster: 'cluster-3',
    },
    {
      id: 4,
      startTime: 1632886800000,
      jobState: 'FAILED',
      cluster: 'cluster-4',
    },
  ];

  return (
    <>
      <Header title={t('title')} subtitle={t('description')} />
      <Separator className="my-4" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>{t('numberOfJobs')}</CardTitle>
          </CardHeader>
          <CardContent>{jobs.length}</CardContent>
        </Card>
      </div>
      <div className="my-4">
        <JobTable jobs={jobs} />
      </div>
    </>
  );
}
