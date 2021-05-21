import { Box, Text } from 'grommet';
import { ColorInput } from 'grommet-controls';
import { materialColors } from 'grommet-controls'

const LineColorInput = (props) => {
  const selectedTrain = props.routeMap.trains[props.selectedIndex];
  const setLineColor = (e) => {
    selectedTrain.strokeColor = e.target.value;
    props.updateView(props.routeMap);
  }
  return (
    <Box direction="row">
      <Text>ラインカラー</Text>
      <ColorInput 
        value={selectedTrain.strokeColor}
        colors={materialColors}
        onChange={setLineColor}
        />
    </Box>
  );
};
export default LineColorInput;