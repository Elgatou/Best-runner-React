import React from 'react';
import styled from 'styled-components';
import { FilteredWorkoutsTable } from './features/workouts/FilteredWorkoutsTable';
import { EditWorkoutForm } from './features/workouts/EditWorkoutForm';
import { Chart } from './features/workouts/Chart';

const StyledApp = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 25px;

  @media screen and (min-width: 1300px) {
    flex-direction: row;
  }
`;

const RightPanel = styled.div`
  width: 370px;
  margin: 0 50px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function App() {
  return (
    <div>
      <Wrapper>
        <Chart />
      </Wrapper>
      <StyledApp>
        <FilteredWorkoutsTable />
        <RightPanel>
          <EditWorkoutForm />
        </RightPanel>
      </StyledApp>
    </div>
  );
}

export default App;
