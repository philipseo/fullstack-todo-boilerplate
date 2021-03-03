import React, { FunctionComponent } from 'react';

import Header from '@components/organisms/Header';

const BaseContainer: FunctionComponent = ({ children }) => (
  <>
    <Header/>
    <main>{children}</main>
  </>
);
export default BaseContainer;
