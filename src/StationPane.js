import { Button, RadioGroup, Radio, MenuItem, MenuList, TextField, FormControlLabel} from '@material-ui/core';
import React from 'react';
import {
	CircularInput,
	CircularTrack,
	CircularProgress,
	CircularThumb
} from 'react-circular-input'
import './StationPane.css';

class StationPane extends React.Component {
    st_list = [];
    constructor(props) {
        super(props);
        this.state = {routeMap: this.props.routeMap, selectedIndex: 0};
    }

    addStation = event => {
        this.state.routeMap.stations.splice(-1, 0, {name: "新駅"});
        this.setState({routeMap: this.state.routeMap});
        this.props.updateView(this.state.routeMap);
    };

    removeStation = event => {
        this.state.routeMap.stations.splice(this.state.selectedIndex,1);
        this.setState({routeMap: this.state.routeMap});
        this.props.updateView(this.state.routeMap);
    };

    changeStaName = event => {
        let idx = this.state.selectedIndex
        this.state.routeMap.stations[idx].name = event.target.value;
        this.setState({routeMap: this.state.routeMap});
        this.props.updateView(this.state.routeMap);
    };

    selectStation = idx => {
        this.setState({selectedIndex: idx});
    }


    render() {
        var stations = this.state.routeMap.stations;
        this.st_list.splice(0);
        for(let idx=0; idx<stations.length; idx++) {
            this.st_list.push(
                <MenuItem selected={idx === this.state.selectedIndex} 
                onClick={(e) => this.selectStation(idx)}>{stations[idx].name}</MenuItem>)
        }
        return (
            <div className="split">
                <div className="split-left">
                    <Button variant="outlined" onClick={this.addStation}>駅追加</Button>
                    <Button variant="outlined" onClick={this.removeStation}>駅削除</Button>
                    <MenuList>
                        {this.st_list}
                    </MenuList>
                    
                </div>
                <div className="split-right">
                    <TextField label={"駅名"} 
                    value={stations[this.state.selectedIndex].name} onChange={this.changeStaName}/>
                    <div className="prop-margin">
                    駅名の向き
                        <RadioGroup row aria-label="駅名の向き" name="textOrientation">
                            <FormControlLabel value="female" control={<Radio />} label="縦書き" />
                            <FormControlLabel value="male" control={<Radio />} label="横書き" />
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

/*
<RadioGroup aria-label="駅名の向き" name="textOrientation" value={value} onChange={handleChange}>
                        <FormControlLabel value="female" control={<Radio />} label="縦書き" />
                        <FormControlLabel value="male" control={<Radio />} label="横書き" />
                    </RadioGroup>
*/

export default StationPane;
