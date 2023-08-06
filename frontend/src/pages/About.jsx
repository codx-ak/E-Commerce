import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import './about.css'

const About = () => {
  return (
    <Container>
    <Button variant='text' startIcon={<ArrowBack/>} sx={{marginTop:3}}  href='/home'>Back</Button>
    <Box className='about'>
      <Typography component='h4' variant='h4'>About Us</Typography>
      <Typography component='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis facere nobis hic ipsum pariatur repellendus assumenda debitis obcaecati quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia cupiditate itaque quia, omnis architecto laborum nemo cum vitae molestiae ducimus! Sunt aperiam perspiciatis quaerat delectus deserunt reprehenderit laborum ad?</Typography>
      <Typography component='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis facere nobis hic ipsum pariatur repellendus assumenda debitis obcaecati quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia cupiditate itaque quia, omnis architecto laborum nemo cum vitae molestiae ducimus! Sunt aperiam perspiciatis quaerat delectus deserunt reprehenderit laborum ad?</Typography>
      <Typography component='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis facere nobis hic ipsum pariatur repellendus assumenda debitis obcaecati quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia cupiditate itaque quia, omnis architecto laborum nemo cum vitae molestiae ducimus! Sunt aperiam perspiciatis quaerat delectus deserunt reprehenderit laborum ad?</Typography>
      <Typography component='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis facere nobis hic ipsum pariatur repellendus assumenda debitis obcaecati quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia cupiditate itaque quia, omnis architecto laborum nemo cum vitae molestiae ducimus! Sunt aperiam perspiciatis quaerat delectus deserunt reprehenderit laborum ad?</Typography>
      </Box>
    </Container>
  )
}

export default About