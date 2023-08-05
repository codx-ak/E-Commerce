import React from 'react'
import CardContent from '@mui/material/CardContent';
import { Box, Button, CardMedia, Rating, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const BrandCard = ({ProductData}) => {
  return (
    <React.Fragment>
        <CardMedia
        component="img"
        height="60%"
        width='100%'
        sx={{objectFit:'cover'}}
        image={ProductData.thumbnail}
        alt="Product"
      />
        <CardContent>
            <Typography variant='p' color='gray'>{ProductData.category}</Typography>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography variant='h5'>{ProductData.title}</Typography>
            <Typography variant='p'> <Rating readOnly size='small' precision={0.5} value={ProductData.rating}/></Typography>
            </Box>
            <br />
            <Typography variant='p' color='green'>Save {ProductData.discountPercentage} %</Typography>
            <Typography variant='h6'>$ {ProductData.price}</Typography>
            <br />
            <Typography variant='p'>{ProductData.description}</Typography>
            <br />
            <Button variant="outlined" sx={{margin:'5% 15%'}} startIcon={<ShoppingCartIcon />}> Add to Cart</Button>
            <Button variant="contained"  color='warning' endIcon={<ShoppingCartIcon />}> Buy Now</Button>
        </CardContent>
    </React.Fragment>
  )
}

export default BrandCard