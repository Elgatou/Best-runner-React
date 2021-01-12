import { createSlice } from '@reduxjs/toolkit';

export const filtersType = {
  walking: 'walking',
  running: 'running',
  cycling: 'cycling',
  skiing: 'skiing',
};

export const sortType = {
  date: 'date',
  type: 'type',
  km: 'km',
};

const filtersSlice = createSlice({
  name: 'visibilityFilters',
  initialState: {
    filters: { walking: true, running: true, cycling: true, skiing: true },
    sort: sortType.date,
  },
  reducers: {
    toggleFilter(state, action) {
      const type = action.payload;
      state.filters[type] = !state.filters[type];
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { toggleFilter, setSort } = filtersSlice.actions;

export const selectFilters = state => state.visibilityOptions.filters;
export const selectSort = state => state.visibilityOptions.sort;

export default filtersSlice.reducer;
