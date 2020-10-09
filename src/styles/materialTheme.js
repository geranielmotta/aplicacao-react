import { createMuiTheme } from '@material-ui/core/styles'
import colors from 'styles/colors'

const themeJson = {
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    danger: {
      main: colors.danger,
    },
  },
}

export default () => createMuiTheme(themeJson)
