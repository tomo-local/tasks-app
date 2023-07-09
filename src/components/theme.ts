import { green, grey } from '@mui/material/colors'
import { createTheme, ThemeOptions } from '@mui/material'
// import { ExtendedTypographyOptions } from '@/types/createTypography'

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: grey[400],
    },
    greyscale: {
      grey50: grey[50],
      grey100: grey[100],
      grey200: grey[200],
      grey300: grey[300],
      grey400: grey[400],
      grey500: grey[500],
      grey600: grey[600],
      grey700: grey[700],
      grey800: grey[800],
      grey900: grey[900],
    },
    greenscale: {
      green50: green[50],
      green100: green[100],
      green200: green[200],
      green300: green[300],
      green400: green[400],
      green500: green[500],
      green600: green[600],
      green700: green[700],
      green800: green[800],
      green900: green[900],
    },
    specifiedColor: {
      danger: '#B20707',
      caution: '#FF9900',
      white: '#FFFFFF',
      templateColor: '#E9F2F9',
      editColor: '#FFF8EA',
      corporateColor: '#007C34',
      primary: green[400],
      secondary: green[800],
    },
    fontColor: {
      main: '#000000DE',
      sub: '#00000099',
      hint: '#00000061',
    },
    fontColorWhite: {
      main: '#FFFFFFDE',
      sub: '#FFFFFF99',
      hint: '#FFFFFF61',
    },
  },
  typography: {
    fontSize: 16, // font-size:font-m 相当
    fontFamily: [
      '"Arial","ヒラギノ角ゴシック ProN","Hiragino Kaku Gothic ProN","メイリオ","Meiryo",sans-serif',
    ].join(','),
    button: {
      textTransform: 'none',
    },
    xxs: {
      fontSize: '0.667rem',
    },
    xs: {
      fontSize: '0.75rem',
    },
    s: {
      fontSize: '0.857rem',
    },
    m: {
      fontSize: '1rem',
    },
    l: {
      fontSize: '1.2rem',
    },
    xl: {
      fontSize: '1.5rem',
    },
    xxl: {
      fontSize: '2rem',
    },
  },
  spacing: 8,
  components: {
    MuiCheckbox: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiRadio: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiSwitch: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiListItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiTable: {
      defaultProps: {
        size: 'small',
      },
    },
  },
  mixins: {
    toolbar: {
      backgroundColor: '#FFFFFF',
    },
  },
} as ThemeOptions)
export default theme
