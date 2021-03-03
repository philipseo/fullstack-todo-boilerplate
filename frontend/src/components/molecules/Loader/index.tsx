import React, { FunctionComponent } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

import Spinner from '@components/atoms/Spinner';

const useStyles = makeStyles(() => ({
  container: {
    zIndex: 5,
    top: 0,
    left: 0,
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
}));

interface LoadingProps {
  message?: string | undefined;
}

const Loading: FunctionComponent<LoadingProps> = ({ message = '불러오는 중입니다.' }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Spinner />
      <Typography variant="h6">{message}</Typography>
    </Box>
  );
};
export default Loading;
