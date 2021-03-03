import React, { FunctionComponent } from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { useMutation } from '@apollo/client'

import Task from '@src/interfaces/task';
import { UPDATE_TASK_BY_ID } from '@src/queries/task';
import { useSnackbar } from 'notistack';

interface TaskListItemProps {
  task: Task;
  afterUpdateTask(): void;
}

const useStyles = makeStyles(() => ({
  lineThroughText: {
    textDecoration: 'line-through',
  },
}));

const TaskListItem: FunctionComponent<TaskListItemProps> = ({
  task,
  afterUpdateTask,
}) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [updateTaskById, { loading: updateLoading }] = useMutation(UPDATE_TASK_BY_ID);

  async function handleToggleComplete() {
    try {
      await updateTaskById({
        variables: {
          input: {
            id: task.id,
            taskPatch: {
              completedAt: task.completedAt ? null : new Date(),
            },
          },
        },
      });
      enqueueSnackbar('변경되었습니다.', { variant: 'success' });
      await afterUpdateTask();
    } catch (error) {
      enqueueSnackbar(error?.message || '에러가 발생하였습니다.', { variant: 'error' });
    }
  }
  async function handleDeleteTask() {
    try {
      await updateTaskById({
        variables: {
          input: {
            id: task.id,
            taskPatch: {
              deletedAt: new Date(),
            },
          },
        },
      });
      enqueueSnackbar('삭제되었습니다..', { variant: 'success' });
      await afterUpdateTask();
    } catch (error) {
      enqueueSnackbar(error?.message || '에러가 발생하였습니다.', { variant: 'error' });
    }
  }

  return (
    <ListItem
      dense
      button
      disabled={updateLoading}
      onClick={() => handleToggleComplete()}
    >
      <ListItemIcon>
        <Checkbox
          edge='start'
          checked={task.completedAt !== null}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': `checkbox-${task.id}` }}
        />
      </ListItemIcon>
      <ListItemText
        id={`checkbox-${task.id}`}
        primary={task.task}
        className={task.completedAt ? classes.lineThroughText : ''}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete task"
          disabled={updateLoading}
          onClick={() => handleDeleteTask()}
        >
          <Delete/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
export default TaskListItem;
