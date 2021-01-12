import { configureStore } from '@reduxjs/toolkit';
import workoutsReducer from '../features/workouts/workoutsSlice';
import filtersReducer from '../features/filters/filtersSlice';

import { workoutsApi } from '../services/workouts';

export default configureStore({
  reducer: {
    [workoutsApi.reducerPath]: workoutsApi.reducer,
    workouts: workoutsReducer,
    visibilityOptions: filtersReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(workoutsApi.middleware),
});
