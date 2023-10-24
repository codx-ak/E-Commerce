import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Order Summary',
    'Billing',
    'Checkout',
  ];

const StepperPage = ({activeStep}) => {
  return (
    <>
    <Box sx={{ width: '100%',marginBottom:3 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
    </>
  )
}

export default StepperPage
