import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useState } from 'react';



const RightComponent = ({splitterObj, setSplitterObj}) => {
    const[disableReset,setDisableReset]=useState(true);
    
    const handleReset =()=>{
        setSplitterObj({bill:'',
        bill:'',
    customTip:'',
    noOfPeople:'0',});
    }

    const bill= parseFloat(splitterObj.bill);
    const customTip= isNaN(parseFloat(splitterObj.customTip))?0:parseFloat(splitterObj.customTip);
    const noOfPeople= parseFloat(splitterObj.noOfPeople);

    const tipAmount=!isNaN(bill)&&!isNaN(customTip)&&!isNaN(noOfPeople)&&noOfPeople!==0?
                    (bill*(customTip/100))/noOfPeople:0;
    const totalAmount=!isNaN(bill)&&!isNaN(customTip)&&!isNaN(noOfPeople)&&noOfPeople!==0?(bill*(customTip/100)+bill)/noOfPeople:0;

    useEffect(()=>{
        console.log('called');
        if(splitterObj.noOfPeople==='0')
            setDisableReset(true);
        else setDisableReset(false);
    },[splitterObj])
    return (
        <Grid className='right-content' container direction={'column'} justifyContent={'space-between'}>
            <Grid item container direction={'row'} justifyContent={'space-between'} alignItems={'center'} >
                <Grid item xs={4} sx={{'color':'hsl(0, 0%, 100%)','padding-top':'10px'}}>Tip Amount<br/><span style={{'color':'hsl(184, 14%, 56%)'}}>/ person</span></Grid>
                <Grid item xs={8}  sx={{'color':'#2bbba6','font-size':'44px','font-weight':'600','text-align':'right'}}>${tipAmount.toFixed(2)}</Grid>
                <Grid item xs={4} sx={{'color':'hsl(0, 0%, 100%)','padding-top':'10px'}}>Total<br/><span style={{'color':'hsl(184, 14%, 56%)'}}>/ person</span></Grid>
                <Grid item xs={8} sx={{'color':'#2bbba6','font-size':'44px','font-weight':'600','text-align':'right'}}>${totalAmount.toFixed(2)}</Grid>
            </Grid>
            <Grid item><Button className={disableReset?'disable-reset-button':'reset-button'}  variant="contained" onClick={handleReset}>RESET</Button></Grid>
        </Grid>
    );
}

export default RightComponent;