import React from 'react'
import sideImg from '../../assets/img-1.png'
import './banner.css'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <div className="home-banner">
        <div className="content">
            <Typography variant='h3'>50% Discount</Typography>
            <Typography variant='h4'> Online Shop</Typography>
            <Typography variant='subtitle1'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</Typography>
            <br />
            <Button variant='contained' color='secondary'><Link to='/products'>Shop Now </Link></Button>
        </div>
        <img src={sideImg} alt="sideImg" />
    </div>
  )
}

export default Banner