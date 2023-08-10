import React from 'react'
import PageRouter from './PageRouter'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ProductData from '../Context/ProductData'
const Layout = () => {
  return (
    <ProductData>
    <Header/>
    <PageRouter/>
    <Footer/>
    </ProductData>
  )
}

export default Layout