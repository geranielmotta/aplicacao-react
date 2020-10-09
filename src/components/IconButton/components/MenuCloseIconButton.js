import React from 'react'
import MenuCloseIcon from 'mdi-material-ui/ChevronLeft'
import IconButton from '../index'

const MenuCloseIconButton = props => (
  <IconButton { ...props }>
    <MenuCloseIcon />
  </IconButton>
)

export default MenuCloseIconButton
