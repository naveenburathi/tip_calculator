import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useState } from 'react';



const RightComponent = ({splitterObj, setSplitterObj}) => {
    const [tipAmount,setTipAmount]= useState('0.00');
    const [totalAmount,setTotalAmount]= useState('0.00');

    const handleSubmit =()=>{
        if(splitterObj.noOfPeople==='0'||splitterObj.noOfPeople==='')
        {
            setSplitterObj({...splitterObj,errorNoOfPeople:'true'});
            return;
        }
        const bill= parseFloat(splitterObj.bill);
        const customTip= parseFloat(splitterObj.customTip);
        const noOfPeople= parseFloat(splitterObj.noOfPeople);

        const totalTipPH=(bill*(customTip/100))/noOfPeople;
        const totalBillPH=(bill*(customTip/100)+bill)/noOfPeople;

        setTipAmount(totalTipPH.toFixed(2));
        setTotalAmount(totalBillPH.toFixed(2));
        // setSplitterObj({bill:'',customTip:'0',noOfPeople:'',errorNoOfPeople:false});
    }

    return (
        <Grid className='right-content' container direction={'column'} justifyContent={'space-between'}>
            <Grid item container direction={'row'} justifyContent={'space-between'} alignItems={'center'} >
                <Grid item xs={6} sx={{'color':'hsl(0, 0%, 100%)','padding-top':'10px'}}>Tip Amount<br/><span style={{'color':'hsl(184, 14%, 56%)'}}>/ person</span></Grid>
                <Grid item xs={6}  sx={{'color':'#2bbba6','font-size':'44px','font-weight':'600','text-align':'right'}}>${tipAmount}</Grid>
                <Grid item xs={6} sx={{'color':'hsl(0, 0%, 100%)','padding-top':'10px'}}>Total<br/><span style={{'color':'hsl(184, 14%, 56%)'}}>/ person</span></Grid>
                <Grid item xs={6} sx={{'color':'#2bbba6','font-size':'44px','font-weight':'600','text-align':'right'}}>${totalAmount}</Grid>
            </Grid>
            <Grid item><Button className='reset-button' variant="contained" onClick={handleSubmit}>RESET</Button></Grid>
        </Grid>
    );
}

export default RightComponent;