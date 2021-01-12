import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Spinner } from 'reactstrap';
import styled from 'styled-components';

import { WorkoutsTable } from './WorkoutsTable';
import { toggleSelectedWorkout, selectedWorkoutId, unSelect } from './workoutsSlice';

import { useGetWorkoutsQuery } from '../../services/workouts';
import { selectSortedWorkouts } from './selectors';
import { setSort, sortType } from '../filters/filtersSlice';
import { FilterOptions } from '../filters/FilterOptions';

const Th = styled.th`
  cursor: pointer;
  :hover {
    color: #6f6f6f;
  }
`;

export function FilteredWorkoutsTable() {
  const dispatch = useDispatch();
  const selected = useSelector(selectedWorkoutId);

  const { isLoading, isError } = useGetWorkoutsQuery();
  const workouts = useSelector(selectSortedWorkouts);

  return (
    <div>
      <FilterOptions />
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <Th onClick={() => dispatch(setSort(sortType.date))}>дата</Th>
            <Th onClick={() => dispatch(setSort(sortType.type))}>тип тренировки</Th>
            <Th onClick={() => dispatch(setSort(sortType.km))}>км</Th>
          </tr>
        </thead>
        <WorkoutsTable
          workouts={workouts}
          toggleWorkout={id => dispatch(toggleSelectedWorkout(id))}
          selectedWorkout={selected}
        />
      </Table>
      {isError && <p style={{ color: 'red' }}>при загрузке данных произошла ошибка, обновите страницу</p>}
      {isLoading && <Spinner color='dark' />}
      {!workouts.length && !isLoading && <p>Тренировки не найдены</p>}
      {selected && (
        <Button type='submit' color='success' size='lg' block onClick={() => dispatch(unSelect())}>
          Добавить тренировку
        </Button>
      )}
    </div>
  );
}
