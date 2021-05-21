import { Box, Text } from 'grommet';
import { NumberInput } from 'grommet-controls';

const LineWidthInput = (props) => {
  const selectedTrain = props.routeMap.trains[props.selectedIndex];
  const setLineWidth = (e) => {
    const newVal = parseInt(e.target.value);
    if(!Number.isNaN(newVal)) {
      selectedTrain.strokeWidth = newVal;
      props.updateView(props.routeMap);
    }
  };
  
  return (
    <Box direction="row">
      <Text>ライン幅</Text>
      <NumberInput 
      value={selectedTrain.strokeWidth}
      onChange={setLineWidth}
      min="0"
      />
    </Box>
  );
};
export default LineWidthInput;