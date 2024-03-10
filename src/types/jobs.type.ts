export type JobState = 'FAILED' | 'SUCCESS' | 'PENDING' | 'RUNNING' | 'SUSPENDED' | 'COMPLETED' | 'CANCELLED' | 'TIMEOUT' | 'NODE_FAIL' | 'PREEMPTED' | 'BOOT_FAIL' | 'DEADLINE' | 'OUT_OF_MEMORY';

export type Job = {
    id: number;
    startTime: number;
    state: JobState;
    cluster: string;
};