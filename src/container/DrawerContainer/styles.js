import colors from 'styles/colors'
import { drawerWidth } from '../../constants'

export default theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: colors.primary,
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor: colors.primary,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    backgroundColor: colors.white,
    border: 0,
  },
  brandToolbarContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandToolbar: {
    width: '70%',
    filter: 'grayscale(1) brightness(100)',
  },
  menuLink: {
    paddingLeft: 19,
    color: colors.white,
    '& svg': {
      marginLeft: 6,
    },
    '&:hover': {
      color: colors.white,
      textDecoration: 'none',
    },
  },
  menuActive: {
    color: 'rgba(0, 0, 0, 0.09)',
    '&:hover': {
      color: `${colors.primary} !important`,
    },
    '& > div': {
      backgroundColor: 'rgba(0, 0, 0, 0.09)',
      borderLeft: 'solid 2px #ffff',
      '&:hover, &:active': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
  },
  contentContainer: {
    zIndex: 2,
    overflowX: 'hidden',
  },
  listItemIcon: {
    transition: 'margin-left .2s',
    [theme.breakpoints.down('xs')]: {
      transition: 'margin-left .2s',
      marginLeft: -5,
    },
  },
  text: { color: colors.white },
  footerContainer: {
    flex: 1,
    zIndex: 999,
    paddingBottom: '15px',
  },
  btn: {
    color: colors.white,
  },
})
