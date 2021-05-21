import { Button } from "grommet";

const getRandomStr = (N = 24) => {
  return btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(N)))).substring(0,N);
};

const AddTrainButton = (props) => {
  // 系統を追加するロジック
  const addTrain = event => {
    const insertIdx = Math.min(props.selectedIndex + 1, props.routeMap.trains.length - 1);
    props.routeMap.trains.splice(insertIdx, 0, {
      id: getRandomStr(),
      name: `新しい運転系統`,
    });
    props.updateView(props.routeMap);
  };

  return (
    <Button label="系統追加" onClick={addTrain} />
  );
};
export default AddTrainButton;