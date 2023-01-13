import React, { ReactNode } from 'react'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

type FormHelperProps = {
  children: ReactNode
  label: string
  errorMessage: any
}

export default function FormHelper({ children, label, errorMessage }: FormHelperProps) {
  return (
    <Stack gap={0.5}>
      <Typography fontSize='14px' fontWeight='bold' color='#2f3237'>
        {label}
      </Typography>
      <Box>{children}</Box>
      <Typography color='red' fontSize='13px'>
        {errorMessage}
      </Typography>
    </Stack>
  )
}
