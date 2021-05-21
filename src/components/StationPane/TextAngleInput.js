import { Box } from 'grommet';
import { NumberInput } from 'grommet-controls';
import {
  CircularInput,
  CircularTrack,
  CircularProgress,
  CircularThumb
} from 'react-circular-input'

let TextAngleInput = (props) => {

  return (
    <Box>
      <CircularInput className="circle-input">
        <CircularTrack />
        <CircularProgress />
        <CircularThumb />
      </CircularInput>
        駅名の角度
      <NumberInput suffix="°" gap="none" />
    </Box>
  );
};
export default TextAngleInput;