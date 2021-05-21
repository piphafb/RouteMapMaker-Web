import { MenuItem, MenuList } from '@material-ui/core';

let TrainSelector = (props) => {
  let listItems = props.routeMap.trains.map((train, idx) => {
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