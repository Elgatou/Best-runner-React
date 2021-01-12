import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'workouts',
  initialState: {
    selectedWorkout: null,
  },
  reducers: {
    toggleSelectedWorkout(state, action) {
      const id = action.payload;
      if (id === state.selectedWorkout) state.selectedWorkout = null;
      else state.selectedWorkout = id;
    },
    unSelect(state) {
      state.selectedWorkout = null;
    },
  },
});

export const { toggleSelectedWorkout, unSelect } = counterSlice.actions;
export const selectedWorkoutId = state => state.workouts.selectedWorkout;

export default counterSlice.reducer;
