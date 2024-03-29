import TextField from '@material-ui/core/TextField';

const TrainNameInput = (props) => {
  // 系統名を変更するロジック
  const changeTrainName = event => {
    const idx = props.selectedIndex
    props.routeMap.trains[idx].name = event.target.value;
    props.updateView(props.routeMap);
  };

  // grommetのTextInputは日本語入力が機能しない
  return (
    <TextField
      label="系統名"
      margin="dense"
      variant="outlined"
      value={props.routeMap.trains[props.selectedIndex].name}
      onChange={changeTrainName}
      />
  );
};
export default TrainNameInput;