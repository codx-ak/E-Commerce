import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import OrderItem from './OrderItem'
import './order.css'
import ClearIcon from '@mui/icons-material/Clear';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

const OrderSet = () => {
  return (
    <Card variant='outlined' className='order-set' sx={{padding:2}}>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:3}}>
        <Typography component='div' sx={{color:'black',padding:2,borderRadius:10,backgroundColor:'lightgray'}}>Order  <Typography sx={{color:'blue',marginLeft:1}} component='span'>#1224445446</Typography></Typography>
        <Typography component='p'>Order Picked : Thu 17th Nov 16</Typography>
        <Button variant='contained' color='warning' sx={{borderRadius:'20px'}} startIcon={<LocationSearchingIcon/>}>Track Order</Button>
        </Box>
        <Box>
            <div className="border"></div>
            <OrderItem/>
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:2}}>
            <Button type='button' color='error' variant='text' startIcon={<ClearIcon/>}>Cancel Order</Button>
            <Typography component='span' sx={{fontWeight:'bold',fontSize:'18px'}}>Total Rs. 12222</Typography>
        </Box>
    </Card>
  )
}

export default OrderSet