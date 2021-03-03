import React from 'react';
import {storiesOf} from '@storybook/react';

import Loader from './index';

storiesOf('Loader', module)
  .add('Default LoaderMessage', () => (
    <Loader/>
  ))
  .add('With LoaderMessage', () => (
    <Loader message='메시지입니다.' />
  ));
