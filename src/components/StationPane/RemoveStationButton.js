import { Button } from "grommet";

let RemoveStationButton = (props) => {
  // 駅を削除するロジック
  let removeStation = event => {
    const idx = props.selectedIndex;
    if (idx === 0 || idx === props.routeMap.stations.length - 1) {
      alert("端の駅は削除できません");
      return;
    }
    props.routeMap.stations.splice(idx, 1);
    props.updateView(props.routeMap);
  };

  return (
    <Button label="駅削除" onClick={removeStation} />
  );
};
export default RemoveStationButton;