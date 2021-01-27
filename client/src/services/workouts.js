import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query';

const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://best-runner-api.herokuapp.com/' : 'http://127.0.0.1:3012/';

export const workoutsApi = createApi({
  reducerPath: 'workoutsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  entityTypes: ['Workouts'],
  endpoints: builder => ({
    getWorkouts: builder.query({
      provides: result => [...result.map(({ id }) => ({ type: 'Workouts', id })), { type: 'Workouts', id: 'LIST' }],
      query: () => 'workouts',
    }),

    addWorkout: builder.mutation({
      invalidates: [{ type: 'Workouts', id: 'LIST' }],
      query: workout => {
        const normalizedWorkout = { ...workout, type: { name: workout.type } };
        return { url: 'workouts', method: 'POST', body: normalizedWorkout };
      },
    }),

    updateWorkout: builder.mutation({
      invalidates: (_, { id }) => [{ type: 'Workouts', id }],
      query: workout => {
        const { id, ...otherWorkout } = workout;
        const normalizedWorkout = { ...otherWorkout, type: { name: otherWorkout.type } };
        return { url: `workouts/${id}`, method: 'PUT', body: normalizedWorkout };
      },
    }),

    deleteWorkout: builder.mutation({
      invalidates: (_, { id }) => [{ type: 'Workouts', id }],
      query: ({ id }) => ({ url: `workouts/${id}`, method: 'DELETE' }),
    }),
  }),
});

export const {
  useGetWorkoutsQuery,
  useAddWorkoutMutation,
  useUpdateWorkoutMutation,
  useDeleteWorkoutMutation,
} = workoutsApi;
