import React from 'react'

import { SnackbarProvider as NotistackProvider } from 'notistack'

import useSnackbar from './useSnackbar'

export default function SnackbarProvider({ children }: any) {
  return (
    <NotistackProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      {children}
    </NotistackProvider>
  )
}

export { useSnackbar }
