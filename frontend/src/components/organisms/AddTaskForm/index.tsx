import React, { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { gql, useMutation } from '@apollo/client';

import AddTaskTextField from '@components/molecules/AddTaskTextField';
import { useSnackbar } from 'notistack';

export const ADD_TASK = gql`
  mutation addTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      task {
        id
      }
    }
  }
`;

interface AddTaskForm {
  afterAddTask(): void;
}

const useStyles = makeStyles({
  form: {
    width: '95%',
    margin: '0 auto',
  },
});

const AddTaskForm: FunctionComponent<AddTaskForm> = ({ afterAddTask }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [task, setTask] = useState<unknown>('');
  const [addTask, { loading }] = useMutation(ADD_TASK);

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      if (task) {
        await addTask({
          variables: {
            input: {
              task: { task }
            }
          },
        });
        setTask('');
        enqueueSnackbar('등록되었습니다.', { variant: 'success' });
        await afterAddTask();
      }
    } catch (error) {
      enqueueSnackbar(error?.message || '에러가 발생하였습니다.', { variant: 'error' });
    }
  }

  return (
    <form
      className={classes.form}
      onSubmit={(event) => submitHandler(event)}
    >
      <AddTaskTextField
        loading={loading}
        value={task}
        onChangeTextField={(event: ChangeEvent<HTMLInputElement>) => handleChangeInput(event)}
      />
    </form>
  );
}
export default AddTaskForm;

