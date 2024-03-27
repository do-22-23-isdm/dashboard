import { EstimateState } from '../estimate-list';

const ressourcesInputs = [
  {
    label: 'Date de création',
    value: '12/03/2023',
  },
  {
    label: 'Type de demande',
    value: 'Stockage',
  },
  {
    label: 'Prix TTC',
    value: '12 000 €',
  },
];

export const listOfEstimate: {
  id: string;
  stateTitle: string;
  date: string;
  description: string;
  state: EstimateState;
  readonlyInputs: {
    label: string;
    value: string;
  }[];
}[] = [
  {
    id: 'a7688e33-1136-46cd-b930-ddfae39b0d54',
    stateTitle: 'Estimate.status.estimateInProgress.title',
    date: '12/03/2063',
    description: 'Estimate.status.estimateInProgress.description',
    state: 'in_progress',
    readonlyInputs: ressourcesInputs,
  },
  {
    id: '0882cf76-aac1-418e-bbb5-0ee35aab6b8a',
    stateTitle: 'Estimate.status.estimateWaitingForApproval.title',
    date: '12/08/2063',
    description: 'Estimate.status.estimateWaitingForApproval.description',
    state: 'waiting_for_approval',
    readonlyInputs: ressourcesInputs,
  },
  {
    id: '5385dda6-c009-45db-8fb4-9557884c5ece',
    stateTitle: 'Estimate.status.estimateApproved.waitingForPayment.title',
    date: '12/08/2063',
    description:
      'Estimate.status.estimateApproved.waitingForPayment.description',
    state: 'waiting_for_payment',
    readonlyInputs: ressourcesInputs,
  },
  {
    id: '3fdfa794-ccd8-4533-afdf-e05d2e528df5',
    stateTitle: 'Estimate.status.estimateApproved.paymentPending.title',
    date: '12/08/2063',
    description: 'Estimate.status.estimateApproved.paymentPending.description',
    state: 'payment_pending',
    readonlyInputs: ressourcesInputs,
  },
  {
    id: '84828b11-1c72-4386-9d3b-8c56902d521d',
    stateTitle: 'Estimate.status.estimateApproved.paymentSuccessful.title',
    date: '12/08/2063',
    description:
      'Estimate.status.estimateApproved.paymentSuccessful.description',
    state: 'payment_succeeded',
    readonlyInputs: ressourcesInputs,
  },
  {
    id: '0a641c4c-4292-4277-9e13-cfc6b82c2ffd',
    stateTitle: 'Estimate.status.estimateApproved.paymentFailed.title',
    date: '12/08/2063',
    description: 'Estimate.status.estimateApproved.paymentFailed.description',
    state: 'payment_failed',
    readonlyInputs: ressourcesInputs,
  },
  {
    id: '59b75698-b32f-4cf8-90ce-d5f4ad72ac36',
    stateTitle: 'Estimate.status.estimateRejected.title',
    date: '12/08/2063',
    description: 'Estimate.status.estimateRejected.description',
    state: 'rejected',
    readonlyInputs: ressourcesInputs,
  },
];
