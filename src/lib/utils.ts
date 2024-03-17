import { EstimateState } from '@/components/estimate/estimate-list';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getIconColorFromEstimateState = (state: EstimateState) => {
  switch (state) {
    case 'in_progress':
      return 'orange-500';
    case 'waiting_for_approval':
      return 'orange-500';
    case 'waiting_for_payment':
      return 'orange-500';
    case 'payment_pending':
      return 'orange-500';
    case 'payment_failed':
      return 'red-500';
    case 'payment_succeeded':
      return 'green-500';
    case 'rejected':
      return 'red-500';
  }
};
