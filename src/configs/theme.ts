import { createTheme, Theme } from '@mui/material'

const theme: Theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {},
      defaultProps: {
        size: 'small',
        placeholder: 'Select an options',
      },
    },
  },
})

export default theme
