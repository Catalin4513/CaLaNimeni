import { Step, StepLabel, Stepper } from '@mui/material'

export default function CheckoutWizard({ activeStep = 0 }) {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {
        ['Logare', 'Modalitate de plată', 'Plasați o comandă'].map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))
      }
    </Stepper>
  )
}
