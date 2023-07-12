import { createTheme, ThemeOptions } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#475569',
      light: '#475569',
      dark: '#475569',
      contrastText: '#fff',
    },
    secondary: {
      main: '#475569',
      light: '#475569',
      dark: '#475569',
    },
    text: {
      primary: '#111827',
      secondary: '#111827',
    },
    background: {
      default: '#f8fafc',
    },
    action: {
      hover: '#475569',
    },
  },
} as ThemeOptions)
export default theme
