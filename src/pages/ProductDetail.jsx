import { Box, Breadcrumbs, Container, Typography } from '@mui/material'
import React from 'react'
import ProductDetailCard from '../components/Card/ProductDetailCard'
import {useParams} from 'react-router-dom'
import Carosal from '../components/Carosal/Carosal'

import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Loader from '../components/Spinner/Loader'
import { FilterProductID } from '../Api/ProductApi'

const ProductDetail = () => {
  let { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["productID"],
    queryFn:()=> FilterProductID(id),
  });
  const filterdProducts = data;


  return (
    <Container>
      {
        isLoading && <Loader/>
      }
      {filterdProducts &&
      <>
      <Breadcrumbs aria-label="breadcrumb" sx={{margin:2}}>
        <Link to='/home'>
          Home
        </Link>
        <Link to='/products'>
          Products
        </Link>
        
        <Typography>
        {filterdProducts.brand}
        </Typography>
      </Breadcrumbs>

      <Box sx={{display:'flex',gap:2,height:550,padding:1}}>
        <Carosal images={filterdProducts.images}/>
        <Box width='40%'>
          <ProductDetailCard Product={filterdProducts}/>
        </Box>


      </Box>
      </>
      }

    
    </Container>
  )
}

export default ProductDetail


