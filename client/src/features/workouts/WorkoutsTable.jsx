import React from 'react';
import styled, { css } from 'styled-components';

const Tr = styled.tr`
  :hover {
    cursor: pointer;
  }

  ${props =>
    props.selected &&
    css`
      background-color: lightgray !important;
    `}
`;

export function WorkoutsTable({ workouts, toggleWorkout, selectedWorkout }) {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  return (
    <tbody>
      {workouts.map((workout, index) => {
        const [year, monthNumber, day] = workout.date.split('-');
        const formatData = `${day} ${months[monthNumber - 1]} ${year}`;

        return (
          <Tr
            key={workout.id}
            onClick={() => {
              toggleWorkout(workout.id);
            }}
            selected={selectedWorkout === workout.id}
          >
            <th scope='row'>{index + 1}</th>
            <td>{formatData}</td>
            <td>{workout.type.translated}</td>
            <td>{workout.km}</td>
          </Tr>
        );
      })}
    </tbody>
  );
}
