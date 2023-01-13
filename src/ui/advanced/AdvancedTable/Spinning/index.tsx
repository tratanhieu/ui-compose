import React from 'react'

import CircularProgress from '@mui/material/CircularProgress'

export default function TableSpinning({ size = 24, color = 'primary' }: any) {
  return <CircularProgress size={size} color={color} />
}
