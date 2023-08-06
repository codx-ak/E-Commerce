import { Box, Breadcrumbs, Container, Link, Typography } from '@mui/material'
import React, { useContext } from 'react'
import ProductDetailCard from '../components/Card/ProductDetailCard'
import { ProductDataList } from '../Context/ProductData'
import {useParams} from 'react-router-dom'
import Carosal from '../components/Carosal/Carosal'
const ProductDetail = () => {
  const Product=useContext(ProductDataList)
  let { id } = useParams();
  const filterdProducts =Product.find(value=>value.id==id)
  return (
    <Container>
      {Product.length &&
      <>
      <Breadcrumbs aria-label="breadcrumb" sx={{margin:2}}>
        <Link underline="hover" color="inherit" href="/home">
          Home
        </Link>
        
        <Typography>
        {filterdProducts.brand}
        </Typography>
      </Breadcrumbs>

      <Box sx={{display:'flex',gap:2,height:550,padding:1}}>
        <Carosal images={filterdProducts.images}/>
        <Box>
          <ProductDetailCard Product={filterdProducts}/>
        </Box>


      </Box>
      </>
      }

    
    </Container>
  )
}

export default ProductDetail


