import React from 'react'
import {Button, Card, Container,Box, Typography} from '@mui/material'
import CartItem from '../components/Cart/CartItem'
import { ArrowBack } from '@mui/icons-material'

import {useSelector} from 'react-redux'
import BackButton from '../components/BackButton/BackButton'
import PriceCard from '../components/Cart/PriceCard';

const Cart = () => {
  const CartItems=useSelector(state=>state.CartStore.value)
  return (
    <Container>
      <BackButton/>
      {
        CartItems.length ? <>
      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Box sx={{width:'60%',padding:2}}>
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