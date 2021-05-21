import { RadioButtonGroup } from 'grommet';

let TextDirectionSelector = (props) => {
  const setNameOrientation = event => {
    const idx = props.selectedIndex;
    props.routeMap.stations[idx].writingMode = (event.target.value === "縦書き" ? "tb" : "lr");
    props.updateView(props.routeMap);
  }

  const selectedStation = props.routeMap.stations[props.selectedIndex]
  return (
    
    <RadioButtonGroup
      name="nn"
      options={["縦書き", "横書き"]}
      value={selectedStation.writingMode === "tb" ? "縦書き" : "横書き"}
      onChange={setNameOrientation}
      direction="row"
      />
  );
};
export default TextDirectionSelector;