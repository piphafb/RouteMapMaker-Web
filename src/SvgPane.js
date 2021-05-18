import React from 'react';
//import {routeMap} from './RouteMap.js'

// 固定点から、各stationの座標を計算する
function getStationPoints(stations) {
    let points = [];
    let startIdx = 0;
    let endIdx = 1;
    points.push(stations[0].pos);
    while(endIdx<stations.length) {
        // 固定点idxを探す
        if(!stations[endIdx].pos) {
            endIdx += 1;
            continue;
        }
        // 固定点。中間の点を補完する。
        let sP = stations[startIdx].pos;
        let eP = stations[endIdx].pos;
        for(let i=startIdx+1; i<=endIdx; i++) {
            let x = (sP[0]*(endIdx-i) + eP[0]*i)/(endIdx-startIdx);
            let y = (sP[1]*(endIdx-i) + eP[1]*i)/(endIdx-startIdx);
            points.push([x, y]);
        }
        startIdx = endIdx;
        endIdx += 1;
    }
    return points;
}

function getPathString(points) {
    let str = "M " + points[0][0] + " " + points[0][1];
    for(let i=0; i<points.length; i++) {
        str += " L " + points[i][0] + " " + points[i][1];
    }
    return str;
}

class SvgPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isMouseDown: false};
        this.svgRef = React.createRef();
        this.ratio = 10;
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
        const relativeX = (e.pageX - svgRect.left);
        const relativeY = (e.pageY - svgRect.top);
        this.props.routeMap.stations[0].pos = [relativeX, relativeY];
        this.props.updateView(this.props.routeMap);
    };

    render() {
        var staPoints = [];
        let start = this.props.routeMap.stations[0].pos;
        let end = this.props.routeMap.stations.slice(-1)[0].pos;
        let numOfSta = this.props.routeMap.stations.length;
        let stationPoints = getStationPoints(this.props.routeMap.stations);
        for(let i=0; i<numOfSta; i++) {
            let [x, y] = stationPoints[i];
            let station = this.props.routeMap.stations[i];
            staPoints.push(<circle cx={x} cy={y} r="4" fill="black" id={"c"+i}
                onMouseDown={this.onMouseDown} />);
            staPoints.push(<text x={x} y={y+5} writing-mode={station.writingMode} font-size="16" id={"n"+i}>
                {station.name}</text>);
        }
        return (
            <div>
                <svg width={100*this.ratio} height={100*this.ratio} viewBox="0 0 1000 1000" 
                    ref={this.svgRef} onMouseUp={this.onMouseUp} onMouseMove={this.onMouseMove}>
                    <path d={getPathString(stationPoints)} stroke="black" stroke-width="2" />
                    {staPoints}
                </svg>
            </div>
        );
    }
}

export default SvgPane;