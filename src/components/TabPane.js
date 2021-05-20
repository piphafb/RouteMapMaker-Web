import React from 'react';
import { Box, Tab, Tabs } from 'grommet';
import StationPane from './StationPane/StationPane.js';
import TrainPane from './TrainPane/TrainPane.js';
import TrainStopPane from './TrainStopPane/TrainStopPane.js';

let component = (props) => (
  <Tabs height='medium' flex='grow' alignSelf='center'>
    <Tab title='駅'>
      <Box
        margin='small'
        pad='small'
      >
        <StationPane routeMap={props.routeMap} updateView={props.updateView}/>
      </Box>
    </Tab>
    <Tab title='運転系統'>
      <Box
        margin='small'
        pad='small'
      >
        <TrainPane routeMap={props.routeMap} updateView={props.updateView}/>
      </Box>
    </Tab>
    <Tab title='停車駅'>
      <Box
        flex='grow'
        margin='small'
        pad='small'
      >
        <TrainStopPane routeMap={props.routeMap} updateView={props.updateView}/>
      </Box>
    </Tab>
  </Tabs>
);

export default component;