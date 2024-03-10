import { apiSlice } from '@/lib/store/api/apiSlice';

/**
 * The extended API slice for jobs.
 */
// @TODO replace any with the correct type
export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getJobs: builder.query<any, void>({
      query: () => 'jobs',
      providesTags: (result) =>
        result
          ? [
              result.map(({ id }: { id: string }) => ({ type: 'Job', id })),
              { type: 'Job', id: 'LIST' },
            ]
          : [{ type: 'Job', id: 'LIST' }],
    }),
  }),
});

export const { useGetJobsQuery } = extendedApiSlice;