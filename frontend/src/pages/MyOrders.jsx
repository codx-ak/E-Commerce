import { Container,Typography,Button } from '@mui/material'
import React from 'react'
import { ArrowBack } from '@mui/icons-material'

const MyOrders = () => {
  return (
    <Container>
    <Button variant='text' startIcon={<ArrowBack/>} sx={{marginTop:3}}  href='/home'>Back</Button>
    <Typography variant='h4' color='gray' sx={{textAlign:'center',padding:'10%',width:'100%'}}>No Orders Available</Typography>
    </Container>
  )
}

export default MyOrders