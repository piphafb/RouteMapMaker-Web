import { Button, TextField } from '@material-ui/core';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class StationPane extends React.Component {
    st_list = [];
    constructor(props) {
        super(props);
        this.state = this.props.routeMap;
    }

    addStation = event => {
        this.state.stations.splice(-1, 0, {name: "新駅"});
        this.setState(this.state);
        this.props.updateView(this.state);
    };

    removeStation = idx => {
        this.state.stations.splice(idx,1);
        this.setState(this.state);
        this.props.updateView(this.state);
    };

    changeStaName = event => {
        let idx = parseInt(event.target.id.slice(11));
        this.state.stations[idx].name = event.target.value;
        this.setState(this.state);
        this.props.updateView(this.state);
    };

    handleChange = event => {

    }

    render() {
        var stations = this.state.stations;
        this.st_list.splice(0);
        for(let idx=0; idx<stations.length; idx++) {
            this.st_list.push(<tr>
                <td>    
                    <TextField id={"stationName"+idx} label={"駅名"+(idx+1)} value={stations[idx].name} onChange={this.changeStaName}/>
                </td>
                <td>
                <IconButton aria-label="delete" id={idx} onClick={() => this.removeStation(idx)}>
                    <DeleteIcon />
                </IconButton>
                </td>
            </tr>)
        }
        return (
            <div>
                <Button variant="outlined" onClick={this.addStation}>駅追加</Button>
                <table>
                    {this.st_list}
                </table>
            </div>
        );
    }
}

export default StationPane;
