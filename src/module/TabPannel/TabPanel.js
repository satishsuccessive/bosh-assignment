import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import UserDetails from '../UserDetails/UserDetails';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
  const [value, setValue] = React.useState(0);
  const [users, getUsers] = useState('');
  const [userData, setUserData] = useState('');

  const url = 'https://reqres.in/api/users';
  useEffect(() => {
    getAllusers();
  }, []);
  const getAllusers = () => {
    axios.get(url)
      .then((response) => {
        const allUsers = response.data.data;
        console.log(response.data.data, '>>>response');
        getUsers(allUsers);
      })
      .catch(error => console.log(`Error: ${error}`));
  }

  const collectUserDetails = (id) => {
    axios.get(`${url}/${id}`)
      .then((response) => {
        const allDetails = response.data.data;
        console.log(response.data.data, '>>> details response');
        setUserData(allDetails);
        console.log(userData, 'userDatauserData');
      })
      .catch(error => console.log(`Error: ${error}`));
  }

  const handleChange = (event, newValue) => {
    console.log(newValue, 'new v');
    setValue(newValue);
  };

  const viewUserClick = useCallback(async (e, id) => {
    setValue(1);
    collectUserDetails(id);

  }, [])

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="User List" {...a11yProps(0)} />
          <Tab label="User Profile" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell component="th" width="150px" align="left">First Name</TableCell>
            <TableCell component="th">Last Name</TableCell>
            <TableCell component="th">Email</TableCell>
          </TableRow>
          </TableHead>
          {users.length > 0 && users.map((user, index) => {
            return (
              <TableBody>
              <TableRow onClick={(e) => viewUserClick(e, user.id)} >
                <TableCell><img src={user.avatar} style={{ width: '70px', borderRadius: '50%' }} /></TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
              </TableBody>
            )
          })
          }
        </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserDetails data={userData} />
      </TabPanel>
    </div>
  );
}
export default SimpleTabs;