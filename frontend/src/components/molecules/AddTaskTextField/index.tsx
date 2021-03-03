import React, { FormEventHandler, FunctionComponent } from 'react';
import { IconButton, makeStyles, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';

interface AddTaskTextField {
  loading: boolean;
  value: unknown;
  onChangeTextField: FormEventHandler;
}

const useStyles = makeStyles({
  textField: {
    width: '100%',
  },
});

const AddTaskTextField: FunctionComponent<AddTaskTextField> = ({
  loading,
  value,
  onChangeTextField
}) => {
  const classes = useStyles();

  return (
    <TextField
      id="add-task"
      className={classes.textField}
      label="Add a Task"
      name="task"
      required
      value={value}
      InputProps={{
        endAdornment:
          <IconButton
            type="submit"
            edge="end"
            aria-label="delete task"
            disabled={loading}
          >
            <Add />
          </IconButton>
      }}
      onChange={(event) => onChangeTextField(event)}
    />
  );
}
export default AddTaskTextField;
