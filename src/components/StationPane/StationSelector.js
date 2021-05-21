import { MenuItem, MenuList } from '@material-ui/core';

let StationSelector = (props) => {
  const stations = props.routeMap.stations;
  let listItems = stations.map((station, idx) => {
    return (
      <MenuItem
        selected={idx === props.selectedIndex}
        onClick={(e) => props.setSelectedIndex(idx)}
      >
        {station.name}
      </MenuItem>
    );
  });
  return (
    <MenuList>
      {listItems}
    </MenuList>
  );
};
export default StationSelector;