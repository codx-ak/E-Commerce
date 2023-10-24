import React from 'react'
import {Container,Box, Typography} from '@mui/material'
import CartItem from '../components/Cart/CartItem'
import {useSelector} from 'react-redux'
import BackButton from '../components/BackButton/BackButton'
import PriceCard from '../components/Cart/PriceCard';
import StepperPage from '../components/Process/StepperPage'

const Cart = () => {
  const CartItems=useSelector(state=>state.CartStore.value)
  return (
    <Container>
      <BackButton/>
      <StepperPage activeStep={0}/>
      {
        CartItems.length ? <>
      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Box sx={{width:'60%',padding:2}}>
          <Box className='cart-heading'><Typography component='p' sx={{width:'50%'}}>Product</Typography><Typography component='p'sx={{width:'25%'}}>Quantity</Typography><Typography component='p'>Total</Typography></Box>
          
          {
            CartItems.length && CartItems.map((product,index)=>{
              return <CartItem key={index} Product={product}/>
            })
          }
          
        </Box>
        <PriceCard Product={CartItems}/>
      </Box>
      </> : <Typography variant='h4' color='gray' sx={{textAlign:'center',padding:'10%',width:'100%'}}>No Items Available</Typography>

      }
    </Container>
  )
}

export default Cart