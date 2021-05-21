import { MenuItem, MenuList } from '@material-ui/core';

const TrainSelector = (props) => {
  const listItems = props.routeMap.trains.map((train, idx) => {
    return (
      <MenuItem
        selected={idx === props.selectedIndex}
        onClick={(e) => props.setSelectedIndex(idx)}
      >
        {train.name}
      </MenuItem>
    );
  });
  return (
    <MenuList>
      {listItems}
    </MenuList>
  );
};
export default TrainSelector;