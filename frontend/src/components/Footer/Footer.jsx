import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Avatar, Box, Chip, Typography } from '@mui/material';
import './footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer">
      <Box sx={{width:'30%'}}>
        <Typography variant='h5'>About</Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti facilis nobis similique quo facere. Delectus porro rem architecto impedit laudantium?
      </Box>
      <Box sx={{width:'30%'}}>
      <Typography variant='h5'>Links</Typography>
      </Box>
      <Box sx={{width:'30%'}}>
      <Typography variant='h5'>Contact us</Typography>
      </Box>

    </div>
    <hr />
    <Typography variant='subtitle2'> Copyright 2023 All Rights Reserved Ak Moorthi</Typography>
    </>
  )
}

export default Footer