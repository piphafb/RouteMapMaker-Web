import React, { useState } from 'react';
import './TrainPane.css';
import AddTrainButton from './AddTrainButton'
import TrainSelector from './TrainSelector'
import RemoveTrainButton from './RemoveTrainButton';

let TrainPane = (props) => {
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
        <AddTrainButton {...params} />
        <RemoveTrainButton {...params} />
        <TrainSelector {...params} />
      </div>
      <div className="split-right">
      </div>
    </div>
  );
};

export default TrainPane;