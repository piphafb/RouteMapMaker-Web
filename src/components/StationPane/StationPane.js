import { RadioGroup, Radio, MenuItem, MenuList, TextField, FormControlLabel } from '@material-ui/core';
import React from 'react';
import {
  CircularInput,
  CircularTrack,
  CircularProgress,
  CircularThumb
} from 'react-circular-input'
import AddStationButton from './AddStationButton';
import RemoveStationButton from './RemoveStationButton';
import StationNameInput from './StationNameInput';
import './StationPane.css';

class StationPane extends React.Component {
  st_list = [];
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 };
  }

  selectStation = idx => {
    this.setState({ selectedIndex: idx });
  }

  setNameOrientation = event => {
    let idx = this.state.selectedIndex;
    this.props.routeMap.stations[idx].writingMode = (event.target.value === "tate" ? "tb" : "lr");
    this.props.updateView(this.props.routeMap);
  }

  render() {
    var stations = this.props.routeMap.stations;
    this.st_list.splice(0);
    for (let idx = 0; idx < stations.length; idx++) {
      this.st_list.push(
        <MenuItem selected={idx === this.state.selectedIndex}
          onClick={(e) => this.selectStation(idx)}>{stations[idx].name}</MenuItem>)
    }
    let selectedStation = stations[this.state.selectedIndex];
    let params = {
      routeMap: this.props.routeMap,
      updateView: this.props.updateView,
      selectedIndex: this.state.selectedIndex
    }
    return (
      <div className="split">
        <div className="split-left">
          <AddStationButton {...params} />
          <RemoveStationButton {...params} />
          <MenuList>
            {this.st_list}
          </MenuList>

        </div>
        <div className="split-right">
          <StationNameInput {...params} />
          <div className="prop-margin">
            駅名の向き
                        <RadioGroup row aria-label="駅名の向き" name="textOrientation"
              value={selectedStation.writingMode === "tb" ? "tate" : "yoko"}
              onChange={this.setNameOrientation}>
              <FormControlLabel value="tate" control={<Radio />} label="縦書き" />
              <FormControlLabel value="yoko" control={<Radio />} label="横書き" />
            </RadioGroup>
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
}

export default StationPane;
