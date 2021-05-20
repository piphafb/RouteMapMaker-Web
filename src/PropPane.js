import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Tabs, Tab} from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StationPane from './StationPane';
import TrainPane from './TrainPane';
import TrainStopPane from './TrainStopPane'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="駅" {...a11yProps(0)} />
                    <Tab label="運転系統" {...a11yProps(1)} />
                    <Tab label="停車駅" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <StationPane routeMap={props.routeMap} updateView={props.updateView}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TrainPane routeMap={props.routeMap} updateView={props.updateView}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <TrainStopPane routeMap={props.routeMap} updateView={props.updateView}/>
            </TabPanel>
        </div>
    );
}