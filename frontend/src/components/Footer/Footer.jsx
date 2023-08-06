import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Avatar, Box, Chip, Typography } from '@mui/material';
import {Link} from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
    <div className="footer">
      <Box sx={{width:'50%'}}>
        <Typography variant='h5'>About</Typography>
        <Typography  component='p' sx={{width:'70%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, unde dignissimos, debitis rem incidunt blanditiis ea iste deleniti corporis in inventore quidem eaque numquam porro architecto quia nam illo animi!</Typography>
      </Box>
      <Box sx={{width:'25%'}}>
      <Typography variant='h5'>Links</Typography>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Category</Link>
      <Link to=''>Help</Link>
      </Box>
      <Box sx={{width:'25%'}}>
      <Typography variant='h5'>Contact us</Typography>
      <Link to='/'>LinkedIn</Link>
      <Link to='/'>Instagram</Link>
      <Link to='/'>Portfolio</Link>
      <Link to='/contact'>Contact us</Link>
      </Box>

    </div>
    <div className="vertical-bar"></div>
    <Typography variant='subtitle2' sx={{textAlign:'center'}}> Copyright 2023 All Rights Reserved Ak Moorthi</Typography>
    </div>
  )
}

export default Footer