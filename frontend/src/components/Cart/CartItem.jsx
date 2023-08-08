import React, { useEffect, useState } from 'react'
import {Button, Card, Container,Box, Typography, Rating, IconButton} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import './cart.css'
import {useDispatch} from 'react-redux'
import {RemoveCart,ProductCountAdd,ProductCountDel} from '../../Store/CartSlice'
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Link} from 'react-router-dom'

const CartItem = ({Product}) => {
  const dispatch=useDispatch()
  return (
    <Card variant='outlined' className='cartItem'>
    <Box sx={{width:'30%',textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}}>
      <Typography component='h5' variant='h5'>{Product.title}</Typography>
      <Rating readOnly value={Product.rating} precision={0.5}/>
    </Box>
    <Box className='cart-btn-group'>
      <IconButton color='secondary' disabled={Product.stock<=Product.count} onClick={()=>dispatch(ProductCountAdd(Product))} ><AddIcon/></IconButton>
      <Typography component='span'  variant='h6'>{Product.count}</Typography>
      <IconButton  color='secondary' disabled={Product.count<=1} onClick={()=>dispatch(ProductCountDel(Product))}  ><RemoveIcon/></IconButton>
    </Box>
    <Button variant="outlined" color='error' onClick={()=>dispatch(RemoveCart(Product))} startIcon={<DeleteIcon />}>Delete</Button>
    <Button variant="contained" color='warning' startIcon={<VisibilityIcon />}><Link  to={`/product/${Product.id}`}>View</Link></Button>
    </Card>
  )
}

export default CartItem