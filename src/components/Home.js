import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Layout from '../layout';
import TabPanel from '../module/TabPannel';



export default function Home() {

    return (
        <Layout>
            <TabPanel />
        </Layout>
    );
}