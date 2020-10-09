import { makeStyles } from '@material-ui/core/styles'
import { drawerWidth } from '../../constants'
import colors from 'styles/colors'

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  brandContainer: {
    display: 'flex',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  },
  brand: {
    width: '100%'
  },
  toolbarRightContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& > * ': {
      marginLeft: 10
    }
  },
  toolbarRoot: {
    transition: 'all .2s'
  },
  appBar: {
    backgroundColor: colors.white,
    maxWidth: `calc(100% - 72px)`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${ drawerWidth }px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  userMenuListItem: {
    paddingLeft: 20,
    paddingRight: 20
  },
  userMenuListItemIcon: {
    minWidth: 35
  },
  badges: {
    color: 'black',
    '& .MuiBadge-anchorOriginTopRightRectangle': {
      backgroundColor: '#fb4f37',
      border: 'solid 1px #ffffff'
    }
  },
  iconBadge: {
    marginRight: '25px',
    marginLeft: '15px',
  }
}))

export default useStyles
