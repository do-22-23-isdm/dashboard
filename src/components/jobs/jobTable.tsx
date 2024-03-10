'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useFormatter } from 'next-intl';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@shadcn/tooltip';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
} from '@shadcn/table';
import { Badge } from '@shadcn/badge';
import { cn } from '@/lib/utils';
import { JobState } from '@/types/jobs.type';
import InlineCode from '@@/ui-custom/inline-code';

export type JobTableProps = {
  jobs: {
    id: number;
    startTime: number;
    state: JobState;
    cluster: string;
  }[];
} & React.HTMLAttributes<HTMLDivElement>;

export function JobTable({ className, jobs }: JobTableProps) {
  const router = useRouter();
  const format = useFormatter();

  const handleRowClick = useCallback(
    (jobId: number) => {
      router.push(`/dashboard/jobs/${jobId}`);
    },
    [router],
  );

  const isSuccess = useCallback((state: JobState) => {
    return state === 'SUCCESS' || state === 'COMPLETED';
  }, []);

  const isError = useCallback((state: JobState) => {
    return (
      state === 'BOOT_FAIL' ||
      state === 'FAILED' ||
      state === 'CANCELLED' ||
      state === 'NODE_FAIL'
    );
  }, []);

  const isWarn = useCallback((state: JobState) => {
    return (
      state === 'SUSPENDED' ||
      state === 'TIMEOUT' ||
      state === 'PREEMPTED' ||
      state === 'DEADLINE' ||
      state === 'OUT_OF_MEMORY'
    );
  }, []);

  return (
    <Table className={cn(className)}>
      <TableCaption>A list of your recent jobs.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableCell>Job ID</TableCell>
          <TableCell>Cluster</TableCell>
          <TableCell>Start Time</TableCell>
          <TableCell>State</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobs.map((job) => (
          <TableRow
            key={job.id}
            onClick={() => handleRowClick(job.id)}
            className="cursor-pointer"
          >
            <TableCell>
              <InlineCode>{job.id}</InlineCode>
            </TableCell>
            <TableCell>
              <InlineCode>{job.cluster}</InlineCode>
            </TableCell>
            <TableCell>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {format.relativeTime(job.startTime)}
                  </TooltipTrigger>
                  <TooltipContent>
                    {format.dateTime(job.startTime, {
                      dateStyle: 'medium',
                      timeStyle: 'medium',
                    })}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableCell>
            <TableCell>
              <Badge
                className={cn(
                  isSuccess(job.state) && 'bg-green-500',
                  isError(job.state) && 'bg-red-500',
                  isWarn(job.state) && 'bg-orange-500',
                )}
              >
                {job.state}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
