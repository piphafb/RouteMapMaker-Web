import { Button } from "grommet";

let AddStationButton = (props) => {
  // 駅を追加するロジック
  let addStation = event => {
    let insertIdx = Math.min(props.selectedIndex + 1, props.routeMap.stations.length - 1);
    props.routeMap.stations.splice(insertIdx, 0, {
      name: `新駅`,
      writingMode: "tb",
    });
    props.updateView(props.routeMap);
  };

  return (
    <Button label="駅追加" onClick={addStation} />
  );
};
export default AddStationButton;