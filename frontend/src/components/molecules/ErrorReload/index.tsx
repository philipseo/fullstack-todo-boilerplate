import React, { FunctionComponent } from 'react';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';

interface ErrorReloadProps {
  message?: string | undefined;
}

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '30px',
    textAlign: 'center',
  },
  message: {
    margin: '16px',
  },
}));

const ErrorReload: FunctionComponent<ErrorReloadProps> = ({ message= '에러가 발생했습니다.' }) => {
  const classes = useStyles();

  function refresh(): void {
    window.location.reload();
  }

  return (
    <Box className={classes.container}>
      <Typography className={classes.message}>{message}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => refresh()}
      >
        새로고침
      </Button>
    </Box>
  )
};
export default ErrorReload;
