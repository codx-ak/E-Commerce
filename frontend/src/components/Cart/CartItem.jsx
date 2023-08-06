import React, { useState } from 'react'
import {Button, Card, Container,Box, Typography, Rating, IconButton} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import './cart.css'

const CartItem = () => {
  const [Item,setItem]=useState(1)
  return (
    <Card variant='outlined' className='cartItem'>
    <Box>
      <Typography component='h5' variant='h5'>Product Name</Typography>
      <Rating readOnly value={3} precision={0.5}/>
    </Box>
    <Box className='cart-btn-group'>
      <IconButton color='secondary' onClick={()=>setItem(Item + 1)} ><AddIcon/></IconButton>
      <Typography component='span' variant='h6'>{Item}</Typography>
      <IconButton  color='secondary' disabled={Item<=1} onClick={()=>setItem(Item - 1)} ><RemoveIcon/></IconButton>
    </Box>
    <Button variant="outlined" color='error' startIcon={<DeleteIcon />}>Delete</Button>
    </Card>
  )
}

export default CartItem