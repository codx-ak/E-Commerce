import { Box, Card, Rating, Typography } from '@mui/material'
import React from 'react'

const OrderItem = () => {
  return (
    <Box variant='outlined' className='order-item'>
        <img src="" alt="Product Img" />
        <Box>
            <Typography variant='h6'>Product Name</Typography>
            <Rating precision={0.5} value={4} size='small'/>
            <Box sx={{display:'flex',alignItems:'center',gap:3}}>
            <Typography component='p'> Qty : 1</Typography>
            <Typography component='span' sx={{fontWeight:'bold'}} variant='subtitle1'> Rs. 1200</Typography>
            </Box>
        </Box>
        <Box>
        <Typography component='p'> status</Typography>
        <Typography color={'green'} variant='h6'> In- Transit</Typography>
        </Box>
        <Box>
        <Typography sx={{fontSize:'14px'}} component='p'> Delivery Expected by</Typography>
        <Typography  variant='h6'> 20 Dec 2000</Typography>
        </Box>

    </Box>
  )
}

export default OrderItem