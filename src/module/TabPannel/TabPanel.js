import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersList } from '../../redux/api';
import { getUserList, getUserById } from '../../redux/selectors';
import UserDetails from '../UserDetails/UserDetails';

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

function SimpleTabs() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [id, setUserId] = useState('');
  const newUsers = useSelector(getUserList);
  useEffect(() => {
    dispatch(getUsersList());
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const viewUserClick = useCallback(async (e, id) => {
    setValue(1);
    setUserId(id);
  }, []);

  const userData = useSelector(getUserById(id)) || {};

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="User List" {...a11yProps(0)} />
          <Tab label="User Profile" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <table>
          <tr>
            <th></th>
            <th width="150px" align="left">First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
          {newUsers.length > 0 && newUsers.map((user, index) => {
            return (
              <tr onClick={(e) => viewUserClick(e, user.id)} style={{ cursor: 'pointer' }}>
                <td><img src={user.avatar} alt={user.first_name} style={{ width: '70px', borderRadius: '50%' }} /></td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
              </tr>
            )
          })
          }
        </table>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserDetails data={userData} />
      </TabPanel>
    </div>
  );
}
export default SimpleTabs;