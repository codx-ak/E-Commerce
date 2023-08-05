import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductData from '../Context/ProductData'
import Home from '../pages/Home'

const About=React.lazy(()=>import('../pages/About'))
const Contact=React.lazy(()=>import('../pages/Contact'))
const Products=React.lazy(()=>import('../pages/Products'))
const Login=React.lazy(()=>import('../pages/Login'))
const Register=React.lazy(()=>import('../pages/Register'))
const ProductDetail=React.lazy(()=>import('../pages/ProductDetail'))
const Checkout=React.lazy(()=>import('../pages/Checkout'))
const Cart=React.lazy(()=>import('../pages/Cart'))


const PageRouter = () => {
  return (
  <Suspense fallback={<div>Loading..</div>}>
    <ProductData>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='home' element={<Home />}/>
    <Route path='about' element={<About />}/>
    <Route path='products' element={<Products />}/>
    <Route path='contact' element={<Contact />}/>
    <Route path='login' element={<Login />}/>
    <Route path='register' element={<Register />}/>
    <Route path='cart' element={<Cart />}/>
    <Route path='product/:id' element={<ProductDetail />}/>
    <Route path='product/:id/checkout' element={<Checkout />}/>
   </Routes>
    </ProductData>
   </Suspense>
  )
}

export default PageRouter