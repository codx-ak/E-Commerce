import { Box, Button, Rating, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductDetailCard = ({Product}) => {
  return (
    <Box sx={{ textAlign:'left',padding:'10%'}}>
      { Product &&
      <>
        <Typography variant='p' color='gray'>{Product.category}</Typography>
        <Typography variant='h4'>{Product.title}</Typography>
        <Typography variant='h6'>Brand : {Product.brand}</Typography>
        <Typography variant='p'><Rating precision={0.5} value={Product.rating} readOnly/></Typography> 
        <Typography variant='h6'>$.{Product.price} <Typography variant='p' color='green'>(Discount {Product.discountPercentage}%)</Typography> </Typography>
        <Typography variant='p'>{Product.description}</Typography>
        <br />
        <Button variant="contained" sx={{margin:'5% 15%'}} color='warning' endIcon={<ShoppingCartIcon />}> Add to Cart</Button>
        <Button variant="outlined" sx={{margin:'5% 15%'}} color='warning' endIcon={<ShoppingCartIcon />}> Buy Now</Button>
        </>
      }
        </Box>
  )
}

export default ProductDetailCard