import React from 'react'
import {Box, Button,Typography } from '@mui/material';
import {Link} from 'react-router-dom'
import './footer.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className='footer-container'>
    <div className="footer">
      <Box sx={{width:'50%'}}>
        <Typography variant='h5'>About</Typography>
        <Typography  component='p' sx={{width:'70%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, unde dignissimos, debitis rem incidunt blanditiis ea iste deleniti corporis in inventore quidem eaque numquam porro architecto quia nam illo animi!</Typography>
      </Box>
      <Box className='footer-link'>
      <Typography variant='h5'>Links</Typography>
      <Button startIcon={<KeyboardDoubleArrowRightIcon/>} variant='text'><Link to='/home'>Home</Link></Button>
      <Button startIcon={<KeyboardDoubleArrowRightIcon/>} variant='text'><Link to='/about'>About</Link></Button>
      <Button startIcon={<KeyboardDoubleArrowRightIcon/>} variant='text'><Link to='/cart'>Cart</Link></Button>
      <Button startIcon={<KeyboardDoubleArrowRightIcon/>} variant='text'><Link to='/contact'>Contact</Link></Button>
      </Box>
      <Box className='footer-link'>
      <Typography variant='h5'>Contact us</Typography>
      <Button startIcon={<LinkedInIcon/>} variant='text'><Link to='https://www.linkedin.com/in/ak-moorthi/'>LinkedIn</Link></Button>
      <Button startIcon={<InstagramIcon/>} variant='text'><Link to='https://www.instagram.com/codx_ak/'>Instagram</Link></Button>
      <Button startIcon={<LanguageIcon/>} variant='text'><Link to='https://codx-paradise.github.io/Portfolio/'>Portfolio</Link></Button>
      <Button startIcon={<GitHubIcon/>} variant='text'><Link to='https://github.com/codx-paradise'>GitHub</Link></Button>
      </Box>
      
    </div>
    <div className="vertical-bar"></div>
    <Typography variant='subtitle2' sx={{textAlign:'center',paddingBottom:1}}> Copyright 2023 All Rights Reserved</Typography>
    </div>
  )
}

export default Footer