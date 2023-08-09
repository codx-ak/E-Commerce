import { Container,Typography,Button } from '@mui/material'
import React from 'react'
import BackButton from '../components/BackButton/BackButton'
import OrderSet from '../components/Orders/OrderSet'

const MyOrders = () => {
  return (
    <Container>
    <BackButton/>
    <Typography variant='h4' color='gray' sx={{textAlign:'center',padding:'10%',width:'100%'}}>No Orders Available</Typography>
    <OrderSet/>
    </Container>
  )
}

export default MyOrders