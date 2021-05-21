import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import {
  CircularInput,
  CircularTrack,
  CircularProgress,
  CircularThumb
} from 'react-circular-input'
import './StationPane.css';
import AddStationButton from './AddStationButton';
import RemoveStationButton from './RemoveStationButton';
import StationNameInput from './StationNameInput';
import StationSelector from './StationSelector';
import TextDirectionSelector from './TextDirectionSelector';

let StationPane = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  let params = {
    routeMap: props.routeMap,
    updateView: props.updateView,
    selectedIndex: selectedIndex,
    setSelectedIndex: setSelectedIndex
  };
  return (
    <div className="split">
      <div className="split-left">
        <AddStationButton {...params} />
        <RemoveStationButton {...params} />
        <StationSelector {...params}/>
      </div>
      <div className="split-right">
        <StationNameInput {...params} />
        <div className="prop-margin">
          駅名の向き
          <TextDirectionSelector {...params} />
        </div>
        <CircularInput className="circle-input">
          <CircularTrack />
          <CircularProgress />
          <CircularThumb />
        </CircularInput>
        <TextField label="駅名の角度" defaultValue="0" />
      </div>
    </div>
  );
}
export default StationPane;
