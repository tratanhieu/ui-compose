import { useSnackbar as useNotistack, OptionsObject } from 'notistack'

export default function useSnackbar() {
  const { enqueueSnackbar, closeSnackbar } = useNotistack()

  return {
    open: (message: string, options: OptionsObject) => enqueueSnackbar(message, options),
    success: (message: string) => enqueueSnackbar(message, { variant: 'success' }),
    error: (message: string) => enqueueSnackbar(message, { variant: 'error' }),
    info: (message: string) => enqueueSnackbar(message, { variant: 'info' }),
    warning: (message: string) => enqueueSnackbar(message, { variant: 'warning' }),
    close: closeSnackbar,
  }
}
