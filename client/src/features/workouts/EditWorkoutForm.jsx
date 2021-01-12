import React from 'react';
import * as Yup from 'yup';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { selectEditedWorkoutInfo } from './selectors';
import { selectedWorkoutId } from './workoutsSlice';
import { useAddWorkoutMutation, useUpdateWorkoutMutation, useDeleteWorkoutMutation } from '../../services/workouts';

import { Formik, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label, Form, Input, Spinner } from 'reactstrap';

const Wrapper = styled.div`
  padding: 15px;
  background-color: #eee;
  border-radius: 10px;
`;

const StyledErrorMessage = props => (
  <ErrorMessage {...props} render={msg => <span style={{ color: 'red' }}>{msg}</span>} />
);

export const EditWorkoutForm = () => {
  const workout = useSelector(selectEditedWorkoutInfo);
  const selected = useSelector(selectedWorkoutId);

  const [addWorkout, { isLoading: addIsLoading, error: addError }] = useAddWorkoutMutation();
  const [updateWorkout, { isLoading: updateIsLoading, error: updateError }] = useUpdateWorkoutMutation();
  const [deleteWorkout, { isLoading: deleteIsLoading, error: deleteError }] = useDeleteWorkoutMutation();
  const isLoading = addIsLoading || updateIsLoading || deleteIsLoading;
  const error = addError || updateError || deleteError;

  return (
    <Wrapper>
      <Formik
        initialValues={workout}
        enableReinitialize={true}
        validationSchema={Yup.object({
          km: Yup.number().min(1).required('Required'),
          date: Yup.string().required('Required'),
        })}
        onSubmit={values => {
          const button = window.event.submitter.name;
          if (button === 'add') addWorkout(values);
          if (button === 'update') updateWorkout({ ...values, id: selected });
          if (button === 'delete') deleteWorkout({ ...values, id: selected });
        }}
      >
        {formik => (
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <Label htmlFor='km'>количество километров</Label>
              <Input tag={Field} component='input' name='km' type='number' />
              <StyledErrorMessage name='km' />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='date'>дата тренировки</Label>
              <Input tag={Field} component='input' name='date' type='date' />
              <StyledErrorMessage name='date' />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='type'>тип тренировки</Label>
              <Input tag={Field} component='select' name='type' type='select'>
                <option value='running'>бег</option>
                <option value='walking'>ходьба</option>
                <option value='skiing'>лыжи</option>
                <option value='cycling'>велосипед</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor='comment'>Комментарий</Label>
              <Input tag={Field} component='textarea' name='comment' type='textarea' />
            </FormGroup>
            {selected ? (
              <>
                <Button name='update' type='submit' color='success'>
                  сохранить изменения
                </Button>{' '}
                <Button name='delete' color='danger'>
                  удалить
                </Button>
              </>
            ) : (
              <Button name='add' type='submit' color='success'>
                добавить тренировку
              </Button>
            )}
            {error && <p style={{ color: 'red' }}>error</p>}
            {isLoading && <Spinner />}
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
