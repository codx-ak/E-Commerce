import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Loader from '../components/Spinner/Loader'

const About=React.lazy(()=>import('../pages/About'))
const Products=React.lazy(()=>import('../pages/Products'))
const Login=React.lazy(()=>import('../pages/Login'))
const Register=React.lazy(()=>import('../pages/Register'))
const ProductDetail=React.lazy(()=>import('../pages/ProductDetail'))
const Checkout=React.lazy(()=>import('../pages/Checkout'))
const Cart=React.lazy(()=>import('../pages/Cart'))
const Logout=React.lazy(()=>import('../pages/Logout'))
const MyOrders=React.lazy(()=>import('../pages/MyOrders'))
const Payment=React.lazy(()=>import('../pages/Payment'))

const PageRouter = () => {
  return (
  <Suspense fallback={<Loader/>}>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='home' element={<Home />}/>
    <Route path='about' element={<About />}/>
    <Route path='products' element={<Products />}/>
    <Route path='login' element={<Login />}/>
    <Route path='register' element={<Register />}/>
    <Route path='cart' element={<Cart />}/>
    <Route path='logout' element={<Logout />}/>
    <Route path='product/:id' element={<ProductDetail />}/>
    <Route path='cart/checkout' element={<Checkout />}/>
    <Route path='orders' element={<MyOrders />}/>
    <Route path='cart/checkout/payment' element={<Payment />}/>
   </Routes>
   </Suspense>
  )
}

export default PageRouter