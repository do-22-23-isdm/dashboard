import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { REHYDRATE } from 'redux-persist'

import { RootState } from '@/lib/store/store';
import { Action } from '@reduxjs/toolkit';

const baseUrl = process.env.API_BASE_URL;

function isHydrateAction(action: Action): action is Action<typeof REHYDRATE> & {
  key: string
  payload: RootState
  err: unknown
} {
  return action.type === REHYDRATE
}

/**
 * The API slice.
 */
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      if (state.auth.state === 'authenticated') {
        headers.set('Authorization', `Bearer ${state.auth.token}`);
      }

      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      // when persisting the api reducer
      if (action.key === 'key used with redux-persist') {
        return action.payload
      }

      // When persisting the root reducer
      return action.payload[apiSlice.reducerPath]
    }
  },
  endpoints: () => ({}),
  tagTypes: [
    'Job',
  ],
});