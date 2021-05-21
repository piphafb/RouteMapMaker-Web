import { Button } from "grommet";

let RemoveTrainButton = (props) => {
  // 系統を追加するロジック
  let removeTrain = event => {
    if(props.routeMap.trains.length === 1) {
      alert("運転系統は1つ以上必要です");
      return;
    }
    props.routeMap.trains.splice(props.selectedIndex, 1);
    props.updateView(props.routeMap);
  };

  return (
    <Button label="系統削除" onClick={removeTrain} />
  );
};
export default RemoveTrainButton;