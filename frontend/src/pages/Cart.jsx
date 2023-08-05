import React from 'react'
import {Button, Card, Container,Box} from '@mui/material'
import CartItem from '../components/Cart/CartItem'
import { ArrowBack } from '@mui/icons-material'

const Cart = () => {
  return (
    <Container>
      <Button variant='text' startIcon={<ArrowBack/>} sx={{marginTop:3}} href='/home'>Back</Button>
      <Box>
        <Card variant='outlined'>
          <CartItem/>
        </Card>
      </Box>
    </Container>
  )
}

export default Cart