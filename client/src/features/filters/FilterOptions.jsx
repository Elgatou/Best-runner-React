import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilters, filtersType, toggleFilter } from './filtersSlice';

const Label = styled.label`
  display: inline-block;
  padding: 5px 20px;
  margin: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #f5f5f5;

  ${props =>
    props.checked &&
    css`
      background-color: #bababa;
    `};
`;

const Input = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export function FilterOptions() {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  return (
    <div>
      <p>
        <Label checked={filters.walking}>
          ходьба
          <Input
            checked={filters.walking}
            type='checkbox'
            id='walking'
            onChange={() => dispatch(toggleFilter(filtersType.walking))}
          />
        </Label>
        <Label checked={filters.running}>
          бег
          <Input
            checked={filters.running}
            type='checkbox'
            id='running'
            onChange={() => dispatch(toggleFilter(filtersType.running))}
          />
        </Label>
        <Label checked={filters.cycling}>
          велосипед
          <Input
            checked={filters.cycling}
            type='checkbox'
            id='cycling'
            onChange={() => dispatch(toggleFilter(filtersType.cycling))}
          />
        </Label>
        <Label checked={filters.skiing}>
          лыжи
          <Input
            checked={filters.skiing}
            type='checkbox'
            id='skiing'
            onChange={() => dispatch(toggleFilter(filtersType.skiing))}
          />
        </Label>
      </p>
    </div>
  );
}
