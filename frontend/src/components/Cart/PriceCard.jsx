import { Button, Card, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const PriceCard = ({Product}) => {
    const [Discount,setDiscount]=useState(0)
    const [Price,setPrice]=useState(0)

    useEffect(()=>{
      setDiscount(Math.round(Product.reduce((prev,curr)=>prev+curr.discountPercentage,0)))
    },[Product.length])
    useEffect(()=>{
        setPrice(Product.reduce((prev,curr)=>prev+curr.price*curr.count,0))
    },Product.count)

  return (
    <Card className='cart-price-card' variant='outlined'>
        {
            Product.length && 
            <>
            <Typography component='p' variant='h5'> Price Details</Typography>
            {
                Product.length && Product.map((product,index)=><Typography  color='gray' component='p'> Item {index+1} : $ {product.price * product.count}.00</Typography>)
            }
          <Typography  color='gray' component='p'> Discount : {Discount}%</Typography>
          <Typography  color='gray' component='p'> Extra Charges : $ 0</Typography>
          <Typography  color='gray' component='p'> Total Products : {Product.length}</Typography>
          <Typography sx={{fontWeight:'bold'}} color='gray' component='p'> Total Amount: $ {Price}.00</Typography>
          <Button variant="contained" color='success' type='button' endIcon={<ShoppingCartIcon />}><Link to='checkout'>Buy Now</Link></Button>
            </>
        }
        </Card>
  )
}

export default PriceCard