import React, { ChangeEvent, useState } from 'react';
import {storiesOf} from '@storybook/react';

import AddTaskTextField from './index';

storiesOf('AddTaskTextField', module)
  .add('AddTaskTextField', () => {
    const [value, setValue] = useState<unknown>('');

    function onChangeTextField(event: ChangeEvent<HTMLInputElement>) {
      setValue(event.target.value);
    }

    return (
      <AddTaskTextField
        loading={false}
        value={value}
        onChangeTextField={(event: ChangeEvent<HTMLInputElement>) => onChangeTextField(event)}
      />
    );
  });
