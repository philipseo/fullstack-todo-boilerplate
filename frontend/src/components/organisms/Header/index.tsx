import React, { FunctionComponent } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header: FunctionComponent = () => (
  <AppBar position='sticky'>
    <Toolbar>
      <Typography variant="h6">Todo App</Typography>
    </Toolbar>
  </AppBar>
);
export default Header;
