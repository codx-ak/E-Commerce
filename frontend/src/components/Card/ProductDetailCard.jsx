import { Box, Button, Rating, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './card.css'

const ProductDetailCard = ({Product}) => {
  return (
    <Box className="ProductDetailCard" sx={{ textAlign:'left',padding:'10%'}}>
      { Product &&
      <>
        <Typography component='p' color='gray'>{Product.category}</Typography>
        <Typography variant='h4'>{Product.title} ({Product.brand})</Typography>
        <Typography component='p' textAlign='right' padding={2}><Rating size='small' precision={0.5} value={Product.rating} readOnly/></Typography> 
        <Typography component='p' sx={{fontWeight:'bold'}} color='green'>{Product.discountPercentage}% Discount</Typography>
        <Typography variant='h5'>$.{Product.price}.00  <Typography component='span'  color='gray' >(all tax.includes)</Typography></Typography>
        
        <Typography component='p' sx={{fontWeight:'bold',marginTop:2}}>Description</Typography>
        <Typography component='p'>{Product.description}</Typography>
        <br />
        <Button variant="contained" sx={{margin:'5% 15%'}} color='warning' endIcon={<ShoppingCartIcon />}> Add to Cart</Button>
        <Button variant="outlined" sx={{margin:'5% 15%'}} color='warning' endIcon={<ShoppingCartIcon />}> Buy Now</Button>
        </>
      }
        </Box>
  )
}

export default ProductDetailCard