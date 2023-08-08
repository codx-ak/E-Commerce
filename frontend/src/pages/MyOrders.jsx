import { Container,Typography,Button } from '@mui/material'
import React from 'react'
import { ArrowBack } from '@mui/icons-material'
import BackButton from '../components/BackButton/BackButton'

const MyOrders = () => {
  return (
    <Container>
    <BackButton/>
    <Typography variant='h4' color='gray' sx={{textAlign:'center',padding:'10%',width:'100%'}}>No Orders Available</Typography>
    </Container>
  )
}

export default MyOrders