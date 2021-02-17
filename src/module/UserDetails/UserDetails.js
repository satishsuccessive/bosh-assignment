import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
}));
const UserDetails = (props) => {
    const { data } = props;
    const classes = useStyles();

    return (
        <Box display="flex">
            <Avatar src={data.avatar} className={classes.large}/>
            <form fullWidth>
                <Box p={2}>
                    <InputLabel>First Name:</InputLabel>
                    <TextField fullWidth id="outlined-basic" variant="outlined" value={data.first_name} />
                </Box>
                <Box p={2}>
                    <InputLabel margin={2}>Last Name:</InputLabel>
                    <TextField fullWidth id="outlined-basic" variant="outlined" value={data.last_name} />
                </Box>
                <Box p={2}>
                    <InputLabel variant="standard">Email:</InputLabel>
                    <TextField fullWidth id="outlined-basic" variant="outlined" type="text" value={data.email} />
                </Box>
                <Box p={2} display="flex" justifyContent="flex-end">
                    <Button size="large" variant="contained" color="primary">
                        Submit
                     </Button>
                </Box>
            </form>
        </Box>
    )
}

export default UserDetails;