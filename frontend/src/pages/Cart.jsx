import React from 'react'
import {Button, Card, Container,Box, Typography} from '@mui/material'
import CartItem from '../components/Cart/CartItem'
import { ArrowBack } from '@mui/icons-material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = () => {
  return (
    <Container>
      <Button variant='text' startIcon={<ArrowBack/>} sx={{marginTop:3}} href='/home'>Back</Button>
      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Box sx={{width:'60%',padding:2}}>
          <CartItem/>
          <CartItem/>
        </Box>
        <Card className='cart-price-card' variant='outlined'>
          <Typography component='p' variant='h5'> Price Details</Typography>
          <Typography  color='gray' component='p'> Product 1 : $200</Typography>
          <Typography  color='gray' component='p'> Product 2 : $200</Typography>
          <Typography  color='gray' component='p'> Discount : 2%</Typography>
          <Typography  color='gray' component='p'> Extra Charges : 0</Typography>
          <Typography  color='gray' component='p'> Total Products : 2</Typography>
          <Typography sx={{fontWeight:'bold'}} color='gray' component='p'> Total Amount: $300</Typography>
          <Button variant="contained" color='success' type='button' endIcon={<ShoppingCartIcon />}> Buy Now</Button>
        </Card>
      </Box>
    </Container>
  )
}

export default Cart