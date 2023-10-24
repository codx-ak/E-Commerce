import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import OrderItem from './OrderItem'
import './order.css'
import ClearIcon from '@mui/icons-material/Clear';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import {useDispatch} from 'react-redux'
import { RemoveOrder } from '../../Store/OrderSlice';

const OrderSet = ({orderItem}) => {
  const dispatch=useDispatch()
  function RemoveOrders(){
    dispatch(RemoveOrder(orderItem))
  }
  return (
    <Card variant='outlined' className='order-set' sx={{padding:2,marginBottom:2}}>
      {
        orderItem &&
        <Box>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:3}}>
        <Typography component='div' sx={{color:'black',padding:2,borderRadius:10,backgroundColor:'lightgray'}}>Order  <Typography sx={{color:'blue',marginLeft:1}} component='span'>#{orderItem.orderId}</Typography></Typography>
        <Typography component='p'>Order Picked : {orderItem.date}</Typography>
        <Button variant='contained' color='warning' sx={{borderRadius:'20px'}} startIcon={<LocationSearchingIcon/>}>Track Order</Button>
        </Box>
        <div className="border"></div>
    {
      orderItem && orderItem.product.map((order,index)=>{
        return (<Box key={index}><OrderItem order={order}/><div className="border"></div></Box>)})
    }
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:2}}>
            <Button type='button' color='error' variant='text' startIcon={<ClearIcon/>} onClick={RemoveOrders} >Cancel Order</Button>
            <Typography component='span' sx={{fontWeight:'bold',fontSize:'18px'}}>Total Rs. {orderItem.totalprice}</Typography>
    </Box>
    </Box>
    }
  </Card>
  )
}

export default OrderSet