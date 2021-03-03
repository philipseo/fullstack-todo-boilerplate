import React from 'react';
import {storiesOf} from '@storybook/react';

import ErrorReload from './index';

storiesOf('ErrorReload', module)
  .add('Default ErrorMessage', () => (
    <ErrorReload/>
  ))
  .add('With ErrorMessage', () => (
    <ErrorReload message="에러입니다."/>
  ));
