import React, { useContext, useEffect, useState } from 'react'
import {Container,Breadcrumbs,Typography, Button, Box, Card, Pagination, FormControl, Select, MenuItem, InputLabel} from '@mui/material'
import ProductCard from '../components/Card/ProductCard'
import { ProductDataList } from '../Context/ProductData'
import {Link} from 'react-router-dom'
const Products = () => {
  
  const {AllProduct,FilteredByMobile,FilteredByLaptops,FilteredByDecoration,FilteredByFragrances}=useContext(ProductDataList)
  
  const [buttonSelect,setButton]=useState('Mobiles')
  const [sortProduct,setsortProduct]=useState('')

 const [filteredProduct,setProducts]=useState(AllProduct) 

 useEffect(()=>{
    function FilteredProducts(){
      if(buttonSelect=='All'){
        setProducts(AllProduct)
      }
      if(buttonSelect==='Mobiles'){
        setProducts(FilteredByMobile)
      }
      if(buttonSelect==='Laptops'){
        setProducts(FilteredByLaptops)
      }
      if(buttonSelect==='Decoration'){
        setProducts(FilteredByDecoration)
      }
      if(buttonSelect==='Fragrances'){
        setProducts(FilteredByFragrances)
      }
    }
    FilteredProducts()
  },[buttonSelect])

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
          <Button type='button' onClick={()=>setButton("All")} variant={buttonSelect==='All'?'contained':'outlined'}>All</Button>
          <Button type='button' onClick={()=>setButton("Mobiles")} variant={buttonSelect==='Mobiles'?'contained':'outlined'}>Mobiles</Button>
          <Button type='button' onClick={()=>setButton("Laptops")} variant={buttonSelect==='Laptops'?'contained':'outlined'}>Laptops</Button>
          <Button type='button' onClick={()=>setButton("Decoration")} variant={buttonSelect==='Decoration'?'contained':'outlined'}>Decoration</Button>
          <Button type='button' onClick={()=>setButton("Fragrances")} variant={buttonSelect==='Fragrances'?'contained':'outlined'}>Fragrances</Button>
          </Box>
          <Box>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="sort-label">Sort</InputLabel>
        <Select
          labelId="sort-label"
          label="Sort"
          onChange={(e)=>setsortProduct(e.target.value)}
          value={sortProduct}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem name='Popular' value='Popular'>Popular</MenuItem>
          <MenuItem name='Rating' value='Rating'>Rating</MenuItem>
          <MenuItem name='Lowest' value='Lowest'>Lowest</MenuItem>
          <MenuItem name='Highest' value='Highest'>Highest</MenuItem>
        </Select>
      </FormControl>
          </Box>
        </Box>
        <Box sx={{display:'flex',flexWrap:'wrap',gap:'5px',marginTop:4}}>
        {AllProduct.length ? filteredProduct.map((product,index)=>{
        return(<Card variant="outlined" sx={{width:280,height:350}} key={index}><Link to={`/product/${product.id}`}><ProductCard ProductData={product}/></Link></Card>)
      }):<Typography variant='h4' color='gray' sx={{textAlign:'center',padding:'10%',width:'100%'}}>No Products Available</Typography>}
        </Box>
      </Box>
      <Box sx={{margin:3,display:'flex',justifyContent:'center'}}>
      <Pagination count={filteredProduct.length%10==0 ?filteredProduct.length/10:1} variant="outlined" shape="rounded" />
      </Box>
    </Container>
  )
}

export default Products