import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { useDispatch } from 'react-redux';
import { updateUserById } from '../../redux/api';


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
	const dispatch = useDispatch();
	const [first_name, setFirstName] = useState(props.data.first_name);
	const [last_name, setLastName] = useState(props.data.last_name);
	const [email, setEmail] = useState(props.data.email);
	const classes = useStyles();
	console.log(props, "dsdsdsdsdsd");

	return (
		<Box display="flex">
			<Avatar src={props.data.avatar} className={classes.large} />
			<FormControl>
				<Box p={2} >
					<label>First Name:</label>
					<TextField fullWidth id="outlined-basic" variant="outlined" value={first_name} onChange={e => setFirstName(e.target.value)} />
				</Box>
				<Box p={2}>
					<label margin={2}>Last Name:</label>
					<TextField fullWidth id="outlined-basic" variant="outlined" value={last_name} onChange={e => setLastName(e.target.value)} />
				</Box>
				<Box p={2}>
					<label variant="standard">Email:</label>
					<TextField fullWidth id="outlined-basic" variant="outlined" type="text" value={email} onChange={e => setEmail(e.target.value)} />
				</Box>
				<Box p={2} display="flex" justifyContent="flex-end">
					<Button
						size="large"
						variant="contained"
						color="primary"
						onClick={() => dispatch(updateUserById(props.data.id, {first_name, last_name, email, avatar: props.data.avatar }))}
					>
						Submit
          </Button>
				</Box>
			</FormControl>
		</Box>
	)
}

export default UserDetails;