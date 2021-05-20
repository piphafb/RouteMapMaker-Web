import './App.css';
import React, { useState } from 'react';
import { Box, Button, Grommet } from 'grommet';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { routeMap } from './RouteMap.js';
import SvgPane from './components/SvgPane.js';
import AppBar from './components/AppBar.js'
import TabPane from './components/TabPane';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

function App() {
  const [state, setState] = useState(routeMap);
  const [count, setCount] = useState(0);

  const updateView = (rMap) => {
    setState(rMap);
    setCount(count + 1); // これを入れるとなぜか画面が更新される
  };
  return (
    <Grommet theme={theme}>
      <AppBar>
        <Typography variant="h6" color="inherit" noWrap>路線図メーカー</Typography>
        <Box direction='row'>
          <Button>Button1</Button>
          <Button>Button2</Button>
        </Box>
      </AppBar>
      <div className="split">
        <div className="split-left">
          <Paper>Left</Paper>
        </div>
        <div className="split-svg">
          <div className="svg-inside">
            <SvgPane routeMap={state} updateView={updateView.bind(this)} />
          </div>
        </div>
        <div className="split-right">
          <TabPane routeMap={state} updateView={updateView.bind(this)}/>
        </div>
      </div>
    </Grommet>
  );
}

export default App;
