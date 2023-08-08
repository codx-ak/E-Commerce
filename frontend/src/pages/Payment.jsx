import React from 'react'
import {Container, Typography} from '@mui/material'
import StepperPage from '../components/Process/StepperPage'
const Payment = () => {
  return (
    <Container>
      <StepperPage activeStep={2}/>
        <Typography variant='h4'>Payment</Typography>
    </Container>
  )
}

export default Payment