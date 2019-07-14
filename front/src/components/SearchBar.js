import React, { useState } from 'react';
import { TextInput, Button } from 'grommet';
import { Edit } from 'grommet-icons';
import categoryApi from '../utils/categoryApi';

export default () => {
  const [value, setValue] = useState('');

  return (
    <>
      <TextInput
        placeholder="Tags"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <Button
        icon={<Edit />}
        label="Search"
        onClick={() => {
          categoryApi
            .getAll()
            .then(categories => console.log('front', categories));
        }}
      />
    </>
  );
};
