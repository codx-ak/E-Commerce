import { Container,Typography} from '@mui/material'
import React from 'react'
import BackButton from '../components/BackButton/BackButton'
import OrderSet from '../components/Orders/OrderSet'
import {useSelector} from 'react-redux'

const MyOrders = () => {
  const OrderData=useSelector(state=>state.OrderStore.value)
  return (
    <Container>
    <BackButton/>
    {
      OrderData.length ? OrderData.map((orderItem,index)=><OrderSet key={index} orderItem={orderItem}/>) 
      :<Typography variant='h4' color='gray' sx={{textAlign:'center',padding:'10%',width:'100%'}}>No Orders Available</Typography>
    }
    
    
    </Container>
  )
}

export default MyOrders