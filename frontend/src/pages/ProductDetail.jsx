import { Box, Breadcrumbs, Container, Link, Typography } from '@mui/material'
import React, { useContext } from 'react'
import ProductDetailCard from '../components/Card/ProductDetailCard'
import { ProductDataList } from '../Context/ProductData'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,ImageWithZoom,Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Carosal from '../components/Carosal/Carosal'


const ProductDetail = () => {
  const Product=useContext(ProductDataList)
  const filterdProducts =Product[0]
  return (
    <Container>
      {Product.length &&
      <>
      <Breadcrumbs aria-label="breadcrumb" sx={{margin:2}}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        
        <Typography>
        {filterdProducts.brand}
        </Typography>
      </Breadcrumbs>

      <Box sx={{display:'flex',gap:2,height:500,padding:1}}>
        <Carosal images={filterdProducts.images}/>
        <Box sx={{width:'50%'}}>
          <ProductDetailCard Product={filterdProducts}/>
        </Box>


      </Box>
      </>
      }

    
    </Container>
  )
}

export default ProductDetail


