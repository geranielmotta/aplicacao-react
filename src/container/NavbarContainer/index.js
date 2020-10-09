import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Creators as loginActions } from 'store/reducers/login'
import clsx from 'clsx'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PowerIcon from 'mdi-material-ui/Power'
import PopupPopover from 'components/PopupPopover'
import UserIconButton from 'components/IconButton/components/UserIconButton'
import Message from '@material-ui/icons/TextsmsOutlined'
import useStyles from './styles'
import Badge from '@material-ui/core/Badge'
import Notifications from '@material-ui/icons/NotificationsNoneOutlined'

const NavbarContainer = props => {
  const { open } = props

  const dispatch = useDispatch()
  const logoutMenu = () => {
    dispatch(loginActions.logout())
  }

  const classes = useStyles()

  const contentRight = (
    <div className={classes.toolbarRightContainer}>
      <div className={classes.badges}>
        <Badge badgeContent={2} className={classes.iconBadge}>
          <Message />
        </Badge>
        <Badge badgeContent={3} className={classes.iconBadge}>
          <Notifications />
        </Badge>
      </div>
      <PopupPopover
        parentComponent={UserIconButton}
        parentProps={{
          color: 'default',
          edge: 'end',
          debounce: false,
        }}
        component={() => (
          <List>
            <ListItem
              button
              onClick={logoutMenu}
              classes={{ gutters: classes.userMenuListItem }}
            >
              <ListItemIcon classes={{ root: classes.userMenuListItemIcon }}>
                <PowerIcon />
              </ListItemIcon>
              <ListItemText primary="Sair" />
            </ListItem>
          </List>
        )}
      />
    </div>
  )

  return (
    <AppBar
      position="fixed"
      color="primary"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar classes={{ root: classes.toolbarRoot }}>{contentRight}</Toolbar>
    </AppBar>
  )
}

NavbarContainer.propTypes = {
  open: PropTypes.bool.isRequired,
  toogleDrawer: PropTypes.func.isRequired,
}

export default NavbarContainer
