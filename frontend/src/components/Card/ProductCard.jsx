import React from 'react'
import CardContent from '@mui/material/CardContent';
import { Button, CardMedia, Rating, Typography,Card } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useDispatch} from 'react-redux'
import { AddCart } from '../../Store/CartSlice';
import {Link} from 'react-router-dom'
import './card.css'

const ProductCard = ({ProductData}) => {
  const dispatch=useDispatch()
  return (
    <Card className='ProductCard' variant="outlined">
      <Link  to={`/product/${ProductData.id}`}>
        <CardMedia
        component="img"
        loading='lazy'
        image={ProductData.thumbnail}
        alt="Product"
      />
        <CardContent sx={{paddingBottom:0}}>
            <Typography variant='h6' sx={{textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}}>{ProductData.title}</Typography>
            <Typography variant='p'> <Rating readOnly size='small' precision={0.5} value={ProductData.rating}/></Typography>
        </CardContent>
        </Link>
            <Button variant="outlined" sx={{margin:'5%'}} onClick={()=>dispatch(AddCart(ProductData))} startIcon={<ShoppingCartIcon />}> Add to Cart </Button>
    </Card>
  )
}
export default ProductCard