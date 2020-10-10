import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flex: 1
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  main: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1)
    },
    paddingTop: 10
  },
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center'
  }
}))
