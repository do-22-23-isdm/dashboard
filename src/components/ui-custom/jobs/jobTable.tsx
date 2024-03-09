'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { JobState } from '@/jobs.type';

export interface JobTableRow {
  id: number;
  startTime: number;
  jobState: JobState;
  cluster: string;
}

export interface JobTableProps {
  jobs: JobTableRow[];
}

export function JobTable({ jobs }: JobTableProps) {
  const router = useRouter();

  const handleRowClick = useCallback(
    (jobId: number) => {
      console.log('Navigating to job with ID:', jobId);
      router.push(`/jobs/${jobId}`); // Navigate to the job details page
    },
    [router],
  );

  return (
    <Table>
      <TableCaption>A list of your recent jobs.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableCell>Job ID</TableCell>
          <TableCell>Start Time</TableCell>
          <TableCell>State</TableCell>
          <TableCell>Cluster</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobs.map((job) => (
          <TableRow key={job.id} onClick={() => handleRowClick(job.id)}>
            <TableCell>{job.id}</TableCell>
            <TableCell>{job.startTime}</TableCell>
            <TableCell>{job.jobState}</TableCell>
            <TableCell>{job.cluster}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
