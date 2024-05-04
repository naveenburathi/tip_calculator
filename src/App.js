import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

import './App.css'
import LeftComponent from './components/leftcomponent';
import RightComponent from './components/rightcomponent';
import { useState } from 'react';

export default function App() {
  const [splitterObj,setSplitterObj]=useState({
    bill:'',
    customTip:'0',
    noOfPeople:'',
    errorNoOfPeople:false
  })
  return <div>
    <Grid className='text-top' container direction={'column'} justifyContent={'center'}  alignItems={'center'}>
      <Grid item>SPLI</Grid>
      <Grid item>TTER</Grid>
    </Grid>
    <FormControl sx={{'width':'100vw'}}>
    <Grid container direction={'row'} sx={{'padding':{sm:'32px', xs:'20px'},'width':{sm:'70vw !important', xs:'100vw'}}} className='content' justifyContent={'space-between'}  >
      <Grid  item xs='12' md='6' sx={{'margin-bottom':{xs:'5vh',md:'0'}}}><LeftComponent splitterObj={splitterObj} setSplitterObj={setSplitterObj}/></Grid>
      <Grid  item xs='12' md='6'><RightComponent splitterObj={splitterObj} setSplitterObj={setSplitterObj}></RightComponent></Grid>
    </Grid>
    </FormControl>
  </div>
}