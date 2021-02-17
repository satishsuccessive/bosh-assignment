import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import bosch from '../../media/bosch-logo.png';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            padding: theme.spacing(2),
        },
    },
}));




export default function Header() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <Box display="flex" width="100%" justifyContent="space-between">
            <Typography style={{ padding: 10}}>
                <Link href="#" onClick={preventDefault}>
                    <img src={bosch} alt="My logo" width="150px" />
                </Link>
            </Typography>
            <Typography style={{ padding: 15 }}>
                User Name
            </Typography>
        </Box>
    );
}