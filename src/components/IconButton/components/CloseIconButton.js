import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '../index'

const CloseIconButton = props => (
  <IconButton { ...props }>
    <CloseIcon />
  </IconButton>
)

export default CloseIconButton
