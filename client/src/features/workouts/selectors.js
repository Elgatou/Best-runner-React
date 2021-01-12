import { selectFilters, selectSort } from '../filters/filtersSlice';
import { selectedWorkoutId } from './workoutsSlice';
import { createSelector } from '@reduxjs/toolkit';

import { workoutsApi } from '../../services/workouts';

const selectWorkouts = workoutsApi.endpoints.getWorkouts.select();

const selectFilteredWorkouts = createSelector([selectWorkouts, selectFilters], (workouts, filters) => {
  if (!workouts.isSuccess) return [];

  return workouts.data.filter(workout => {
    const workoutType = workout.type.name;
    return filters[workoutType];
  });
});

export const selectSortedWorkouts = createSelector([selectFilteredWorkouts, selectSort], (workouts, sort) => {
  const sorted = [...workouts].sort((workoutA, workoutB) => {
    if (sort === 'type') {
      const a = workoutA[sort].translated;
      const b = workoutB[sort].translated;

      return a > b ? 1 : a < b ? -1 : 0;
    } else {
      return workoutA[sort] - workoutB[sort];
    }
  });

  return sorted;
});

export const selectEditedWorkoutInfo = createSelector([selectWorkouts, selectedWorkoutId], (workouts, id) => {
  if (id === null) return { km: 0, date: '', type: 'running', comment: '' };
  else {
    const workout = workouts.data.find(workout => workout.id === id);
    if (workout === undefined) return { km: 0, date: '', type: 'running', comment: '' };

    const { km, date, type, comment } = workout;
    return { km, date, type: type.name, comment };
  }
});
