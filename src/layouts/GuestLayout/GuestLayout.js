import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DrawerContainer from 'container/DrawerContainer'
import NavbarContainer from 'container/NavbarContainer'
import useStyles from './styles'
import {
  BreadcrumbsMain
} from "components";

const GuestLayout = (props) => {
  const { children } = props
  const [expanded, setExpanded] = useState(false)

  const classes = useStyles()

  const drawerToggle = () => {
    setExpanded(!expanded)
  }

  return (
    <div className={ classes.root }>
      <NavbarContainer open={ expanded } toogleDrawer={ drawerToggle } />

      <DrawerContainer
        open={ expanded }
        toogleDrawer={ drawerToggle }
      />

      <main className={ classes.main }>
        <div className={ classes.toolbar } />
        <BreadcrumbsMain />
        <div className={ classes.content }>
          {children}</div>
      </main>
    </div>
  )
}

GuestLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default GuestLayout
