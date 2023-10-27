import React from 'react'
import {Card,Box, Typography, Rating, IconButton} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './cart.css'
import {useDispatch} from 'react-redux'
import {RemoveCart,ProductCountAdd,ProductCountDel} from '../../Store/CartSlice'
import ClearIcon from '@mui/icons-material/Clear';

const CartItem = ({Product}) => {
  const dispatch=useDispatch()
  return (

    <Card variant='outlined' className='cartItem'>
      <img src={Product.thumbnail} alt={Product.title} loading='lazy' />
    <Box sx={{width:'30%',textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}}>
      <Typography component='p' variant='subtitle1'>{Product.title}</Typography>
      <Rating readOnly value={Product.rating} size='small' precision={0.5}/>
    </Box>
    <Box className='cart-btn-group'>
      <IconButton color='secondary' disabled={Product.stock<=Product.count} onClick={()=>dispatch(ProductCountAdd(Product))} ><AddIcon/></IconButton>
      <Typography component='span'  variant='h6'>{Product.count}</Typography>
      <IconButton  color='secondary' disabled={Product.count<=1} onClick={()=>dispatch(ProductCountDel(Product))}  ><RemoveIcon/></IconButton>
    </Box>
    <Typography component='p' sx={{fontWeight:'bold',width:'10%'}}>$ {Product.price * Product.count}</Typography>
    <IconButton className='clearBtn' onClick={()=>dispatch(RemoveCart(Product))}><ClearIcon /></IconButton>
    </Card>
  )
}

export default CartItem