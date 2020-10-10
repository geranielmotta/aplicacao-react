import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useStyles from './styles'

const NavbarContainer = props => {
  const { open } = props
  const classes = useStyles()

  const contentRight = (
    <div className={classes.toolbarRightContainer}></div>
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
