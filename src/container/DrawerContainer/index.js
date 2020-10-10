import React from 'react'
import PropTypes from 'prop-types'
import flow from 'lodash/fp/flow'
import omitBy from 'lodash/fp/omitBy'
import mapValues from 'lodash/fp/mapValues'
import map from 'lodash/fp/map'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import routes from 'routes/guests'

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './styles'

const DrawerContainer = (props) => {
  const {
    classes,
    open,
    toogleDrawer
  } = props

  return (
    <Drawer
    variant="permanent"
    className={clsx(classes.drawer, {
      [classes.drawerOpen]: open,
      [classes.drawerClose]: !open,
    })}
    classes={{
      paper: clsx({
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      }),
    }}
  >
    <IconButton
        aria-label="open drawer"
        classes={{root: classes.btn}}
        onClick={toogleDrawer}
        className={clsx( {
          [classes.hide]: open,
        })}
      >
        <MenuIcon />
      </IconButton>
        <List style={ { paddingTop: 0 } }>
          {flow(
            omitBy(route => !route.menu),
            mapValues(({
              path, exact, menuExact, name, Icon
            }) => (
              <NavLink
                key={ name }
                to={ path }
                exact={ menuExact === undefined ? exact : menuExact }
                className={ classes.menuLink }
                activeClassName={ classes.menuActive }
              >
                <ListItem button key={ name }>
                  <ListItemIcon className={ classes.listItemIcon }>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={ name } classes={{ primary: classes.text}}/>
                </ListItem>
              </NavLink>
            )),
            map(item => item)
          )(routes)}
        </List>
    </Drawer>
  )
}

DrawerContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  toogleDrawer: PropTypes.func.isRequired
}

export default flow(
  withStyles(styles)
)(DrawerContainer)
