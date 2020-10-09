import React from 'react'
import MenuIcon from 'mdi-material-ui/Menu'
import IconButton from '../index'

const MenuIconButton = props => (
  <IconButton { ...props }>
    <MenuIcon />
  </IconButton>
)

export default MenuIconButton
