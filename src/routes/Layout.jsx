import React from 'react'
import PageRouter from './PageRouter'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Layout = () => {
  return (
    <>
    <Header/>
    <PageRouter/>
    <Footer/>
    </>
  )
}

export default Layout