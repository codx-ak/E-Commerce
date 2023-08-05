import React, { useContext, useState } from 'react'
import {Container,Breadcrumbs,Typography, Button, Box, Card, Pagination, FormControl, Select, MenuItem, InputLabel} from '@mui/material'
import ProductCard from '../components/Card/ProductCard'
import { ProductDataList } from '../Context/ProductData'
import {Link} from 'react-router-dom'
const Products = () => {
  const Product=useContext(ProductDataList)
  const [buttonSelect,setButton]=useState('All')
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb" sx={{margin:2}}>
        <Link to='/'>
          Home
        </Link>
        
        <Typography>
        Category
        </Typography>
      </Breadcrumbs>
      <Box>
        <Box sx={{display:'flex',justifyContent:"space-around",alignItems:"center",gap:1}}>
          <Box sx={{display:'flex',gap:1}}>
          <Button type='button' onClick={()=>setButton("All")} variant={buttonSelect=='All'?'contained':'outlined'}>All</Button>
          <Button type='button' onClick={()=>setButton("Mobiles")} variant={buttonSelect=='Mobiles'?'contained':'outlined'}>Mobiles</Button>
          <Button type='button' onClick={()=>setButton("Laptops")} variant={buttonSelect=='Laptops'?'contained':'outlined'}>Laptops</Button>
          <Button type='button' onClick={()=>setButton("Clothes")} variant={buttonSelect=='Clothes'?'contained':'outlined'}>Cloths</Button>
          <Button type='button' onClick={()=>setButton("Shoes")} variant={buttonSelect=='Shoes'?'contained':'outlined'}>Shoes</Button>
          </Box>
          <Box>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="sort-label">Sort</InputLabel>
        <Select
          labelId="sort-label"
          label="Sort"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Popular</MenuItem>
          <MenuItem value={2}>Rating</MenuItem>
          <MenuItem value={3}>Lowest</MenuItem>
          <MenuItem value={4}>Highest</MenuItem>
        </Select>
      </FormControl>
          </Box>
        </Box>
        <Box sx={{display:'flex',flexWrap:'wrap',gap:1,marginTop:4}}>
        {Product.length ? Product.map((product,index)=>{
        return(<Card variant="outlined" sx={{width:280,height:350}} key={index}><Link to={`/product/${product.id}`}><ProductCard ProductData={product}/></Link></Card>)
      }):<Typography>No Products</Typography>}
        </Box>
      </Box>
      <Box sx={{margin:3,display:'flex',justifyContent:'center'}}>
      <Pagination count={10} variant="outlined" shape="rounded" />
      </Box>
    </Container>
  )
}

export default Products