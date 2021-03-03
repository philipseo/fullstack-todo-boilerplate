import React from 'react';
import {storiesOf} from '@storybook/react';

import EmptyList from './index';

storiesOf('EmptyList', module)
  .add('Default EmptyMessage', () => (
    <EmptyList/>
  ))
  .add('With EmptyMessage', () => (
    <EmptyList message='메시지입니다.' />
  ));
