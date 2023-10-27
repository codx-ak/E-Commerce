import { Box, Rating, Typography } from '@mui/material'
import React from 'react'

const OrderItem = ({order}) => {
  return (
    <Box variant='outlined' className='order-item'>
        <img src={order.thumbnail} alt="Product Img" />
        <Box>
            <Typography variant='h6'>{order.title}</Typography>
            <Rating precision={0.5} value={order.rating} size='small'/>
            <Box sx={{display:'flex',alignItems:'center',gap:3}}>
            <Typography component='p'> Qty : {order.count}</Typography>
            <Typography component='span' sx={{fontWeight:'bold'}} variant='subtitle1'> Rs. {order.count*order.price}</Typography>
            </Box>
        </Box>
        <Box>
        <Typography component='p'> status</Typography>
        <Typography color={'green'} variant='h6'> {order.status}</Typography>
        </Box>
        <Box>
        <Typography sx={{fontSize:'14px'}} component='p'> Delivery Expected by</Typography>
        <Typography  variant='h6'> {order.deleveryDate}</Typography>
        </Box>

    </Box>
  )
}

export default OrderItem