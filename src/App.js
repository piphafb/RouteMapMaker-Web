import './App.css';
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import {routeMap} from './RouteMap.js'
import PropPane from './PropPane.js';
import SvgPane from './SvgPane.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  const [state, setState] = useState(routeMap);
  const [count, setCount] = useState(0);

  const updateView = (rMap) => {
    setState(rMap);
    setCount(count + 1); // これを入れるとなぜか画面が更新される
  };
  return (
   <div>
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          路線図メーカー
        </Typography>
      </Toolbar>
    </AppBar>
    <div className="split">
      <div className="split-left">
        <Paper className={classes.paper}>Left</Paper>
      </div>
      <div className="split-svg">
        <div className="svg-inside">
          <SvgPane routeMap={state} updateView={updateView.bind(this)}/>
        </div>
      </div>
      <div className="split-right">
        <PropPane routeMap={state} updateView={updateView.bind(this)}/>
      </div>
    </div>
   </div>
  );
}

export default App;
