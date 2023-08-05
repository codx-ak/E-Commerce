import React, { useContext } from 'react'
import ProductCard from '../components/Card/ProductCard'
import { Box, Button, Card, Container, Typography } from '@mui/material'
import { ProductDataList } from '../Context/ProductData'
import {Link} from 'react-router-dom'
import BrandCard from '../components/Card/BrandCard'
import Banner from '../components/Home/Banner'

const Home = () => {
  const Product=useContext(ProductDataList)
  const filterdProducts =Product.filter((value)=>value.rating > 4.8)
  const filterdBrandProducts =Product.filter((value)=>value.category == 'smartphones')
  return (
    <>
    <Box>
      <Banner/>
    </Box>
    <Container>
    <Typography variant='h4' sx={{textAlign:'center'}}>Popular Products</Typography>
    <Box sx={{display:'flex',flexWrap:'wrap',gap:1,marginTop:4}}>
      {filterdProducts.length ? filterdProducts.map((product,index)=>{
        return(<Card variant="outlined" sx={{width:280,height:350,cursor:'pointer'}} key={index}><Link to={`/product/${product.id}`}><ProductCard ProductData={product}/></Link></Card>)
      }):<Typography variant='h4' color='gray' sx={{textAlign:'center',padding:'10%',width:'100%'}}>No Products Available</Typography>}
    </Box>

    <Typography variant='h4' sx={{textAlign:'center',marginTop:10}}>Brand Mobiles</Typography>
    {
     filterdBrandProducts.length >=3 && (
    <Box sx={{display:'flex',flexWrap:'wrap', justifyContent:'space-around',gap:3,marginTop:3}}>
    <Card variant="outlined" sx={{width:600,height:620,cursor:'pointer'}} key={filterdBrandProducts[0]}><Link to={`/product/${filterdBrandProducts[0].id}`}><BrandCard ProductData={filterdBrandProducts[0]}/></Link></Card>
    <div>
    <Card variant="outlined" sx={{width:280,height:310,cursor:'pointer'}} key={filterdBrandProducts[1]}><Link to={`/product/${filterdBrandProducts[1].id}`}><ProductCard ProductData={filterdBrandProducts[1]}/></Link></Card>
    <Card variant="outlined" sx={{width:280,height:310,cursor:'pointer'}} key={filterdBrandProducts[2]}><Link to={`/product/${filterdBrandProducts[2].id}`}><ProductCard ProductData={filterdBrandProducts[2]}/></Link></Card>
    </div>
    </Box>
     ) 
    }
    </Container>
    </>
  )
}

export default Home