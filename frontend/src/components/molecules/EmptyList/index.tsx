import React, { FunctionComponent } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

interface EmptyListProps {
  message?: string | undefined;
}

const useStyles = makeStyles(() => ({
  container: {
    padding: '30px',
    textAlign: 'center',
  },
}));

const EmptyList: FunctionComponent<EmptyListProps> = ({ message = '데이터가 존재하지 않습니다.' }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography>{message}</Typography>
    </Box>
  );
};
export default EmptyList;
