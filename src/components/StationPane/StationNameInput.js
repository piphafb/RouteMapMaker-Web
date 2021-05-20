import TextField from '@material-ui/core/TextField';

let StationNameInput = (props) => {
  // 駅名を変更するロジック
  let changeStaName = event => {
    let idx = props.selectedIndex
    props.routeMap.stations[idx].name = event.target.value;
    props.updateView(props.routeMap);
  };

  // grommetのTextInputは日本語入力が機能しない
  return (
    <TextField
      label="駅名"
      margin="dense"
      variant="outlined"
      value={props.routeMap.stations[props.selectedIndex].name}
      onChange={changeStaName}
      />
  );
};
export default StationNameInput;