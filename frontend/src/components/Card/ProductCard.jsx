import React from 'react'
import CardContent from '@mui/material/CardContent';
import { Button, CardMedia, Rating, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductCard = ({ProductData}) => {
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
            <Typography variant='h6' sx={{textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}}>{ProductData.title}</Typography>
            <Typography variant='p'> <Rating readOnly size='small' precision={0.5} value={ProductData.rating}/></Typography>
            <br />
            <Button variant="outlined" sx={{margin:'5% 15%'}} startIcon={<ShoppingCartIcon />}> Add to Cart
            </Button>
        </CardContent>
    </React.Fragment>
  )
}

export default ProductCard