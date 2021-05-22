import { Box, Text } from 'grommet';
import { NumberInput } from 'grommet-controls';

const LineOffsetInput = (props) => {
  const selectedTrain = props.routeMap.trains[props.selectedIndex];
  const setLineOffset = (e) => {
    const newVal = parseInt(e.target.value);
    if(!Number.isNaN(newVal)) {
      selectedTrain.lineOffset = newVal;
      props.updateView(props.routeMap);
    }
  };
  
  return (
    <Box direction="row">
      <Text>ライン位置</Text>
      <NumberInput 
      value={selectedTrain.lineOffset}
      onChange={setLineOffset}
      />
    </Box>
  );
};
export default LineOffsetInput;