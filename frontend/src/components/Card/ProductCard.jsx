import React from 'react'
import CardContent from '@mui/material/CardContent';
import { Button, CardMedia, Rating, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useDispatch} from 'react-redux'
import { AddCart } from '../../Store/CartSlice';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Link} from 'react-router-dom'

const ProductCard = ({ProductData}) => {
  const dispatch=useDispatch()
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
            <Button variant="outlined" sx={{margin:'5%'}} onClick={()=>dispatch(AddCart(ProductData))} startIcon={<ShoppingCartIcon />}> Add to Cart </Button>
            <Button variant="contained"sx={{padding:'3px',minWidth:'58px'}} color='warning'><Link  to={`/product/${ProductData.id}`}><VisibilityIcon /></Link></Button>
            
        </CardContent>
    </React.Fragment>
  )
}

export default ProductCard