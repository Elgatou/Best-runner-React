import React from "react";
import styled from "styled-components";
import { FilteredWorkoutsTable } from "./features/workouts/FilteredWorkoutsTable";
import { EditWorkoutForm } from "./features/workouts/EditWorkoutForm";

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

function App() {
  return (
    <div>
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
