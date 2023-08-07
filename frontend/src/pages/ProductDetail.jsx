import { Box, Breadcrumbs, Container, Link, Typography } from '@mui/material'
import React, { useContext } from 'react'
import ProductDetailCard from '../components/Card/ProductDetailCard'
import {useParams} from 'react-router-dom'
import Carosal from '../components/Carosal/Carosal'
import { ProductDataList } from '../Context/ProductData'
const ProductDetail = () => {

  let { id } = useParams();
  const {FilterById}=useContext(ProductDataList)
  const filterdProducts =FilterById(id)

  return (
    <Container>
      {filterdProducts &&
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


