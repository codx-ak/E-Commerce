import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import './newsletter.css'

const Newsletter = () => {
  return (
    <div className="newsletter">
        <Typography variant='h4'>Join Our Newsletter</Typography>
        <Typography variant='subtitle2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</Typography>
        <form action="" method="post">
        <TextField variant='standard' type='email' required placeholder='Enter Email'/>
        <Button variant='contained' color='warning' type='submit'>SUBSCRIBE</Button>
        </form>

    </div>
  )
}

export default Newsletter