
import { Box } from 'grommet';
import React from 'react';

let component = (props) => {
  return (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='light-2'
      pad={{ vertical: 'small', horizontal: 'medium' }}
      elevation='medium'
      {...props}
    />
  );
};

export default component;