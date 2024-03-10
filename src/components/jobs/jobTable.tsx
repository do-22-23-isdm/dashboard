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
import { JobState } from '@/types/jobs.type';
export interface JobTableRow {
  id: number;
  startTime: number;
  state: JobState;
  cluster: string;
}

export interface JobTableProps {
  jobs: JobTableRow[];
}

export function JobTable({ jobs }: JobTableProps) {
  const router = useRouter();

  const handleRowClick = useCallback(
    (jobId: number) => {
      router.push(`dashboard/jobs/${jobId}`); 
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
          <TableCell>Cluster</TableCell>
          <TableCell>State</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobs.map((job) => (
          <TableRow key={job.id} onClick={() => handleRowClick(job.id)} className='cursor-pointer'>
            <TableCell>{job.id}</TableCell>
            <TableCell>{job.startTime}</TableCell>
            <TableCell>{job.cluster}</TableCell>
            <TableCell>{job.state}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
