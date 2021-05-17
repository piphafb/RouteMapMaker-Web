import React from 'react';
//import {routeMap} from './RouteMap.js'

class SvgPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {routeMap: this.props.routeMap, isMouseDown: false};
        this.svgRef = React.createRef();
        this.ratio = 2;
    }

    onMouseDown = (e) => {
        if(e.target.id!="c0") {
            return;
        }
        this.setState({isMouseDown: true});
    };

    onMouseUp = (e) => {
        this.setState({isMouseDown: false});
    };

    onMouseMove = (e) => {
        if(!this.state.isMouseDown) {
            return;
        }
        let id = e.target.id;
        const svgRect = this.svgRef.current.getBoundingClientRect();
        const relativeX = (e.pageX - svgRect.left)/this.ratio;
        const relativeY = (e.pageY - svgRect.top)/this.ratio;
        this.state.routeMap.stations[0].pos = [relativeX, relativeY];
        this.setState({routeMap: this.state.routeMap});
    };

    render() {
        var staPoints = [];
        let start = this.state.routeMap.stations[0].pos;
        let end = this.state.routeMap.stations.slice(-1)[0].pos;
        let numOfSta = this.state.routeMap.stations.length;
        for(let i=0; i<numOfSta; i++) {
            let x = (start[0]*(numOfSta-1-i) + end[0]*i)/(numOfSta-1);
            let y = (start[1]*(numOfSta-1-i) + end[1]*i)/(numOfSta-1);
            let station = this.state.routeMap.stations[i];
            staPoints.push(<circle cx={x} cy={y} r="2" fill="black" id={"c"+i}
                onMouseDown={this.onMouseDown} />);
            staPoints.push(<text x={x} y={y+5} writing-mode={station.writingMode} font-size="8" id={"n"+i}>
                {station.name}</text>);
        }
        const pathD = "M " + start[0] + " " + start[1] + " L " + end[0] + " " + end[1];
        return (
            <div>
                <svg width={100*this.ratio} height={100*this.ratio} viewBox="0 0 100 100" 
                    ref={this.svgRef} onMouseUp={this.onMouseUp} onMouseMove={this.onMouseMove}>
                    <path d={pathD} stroke="black" />
                    {staPoints}
                </svg>
            </div>
        );
    }
}

export default SvgPane;