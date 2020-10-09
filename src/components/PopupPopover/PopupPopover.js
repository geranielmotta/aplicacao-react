import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import { usePopupState, bindTrigger, bindPopover } from 'material-ui-popup-state/hooks'

const styles = theme => ({
  typography: {
    margin: theme.spacing(2)
  }
})

const PopupPopover = (props) => {
  const {
    classes, parentComponent: Btn, component: Popup, parentProps, componentProps, ...otherProps
  } = props

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopover'
  })

  const btnProps = bindTrigger(popupState)
  const popoverProps = bindPopover(popupState)

  return (
    <div>
      <Btn { ...{ ...parentProps, ...btnProps } } />
      <Popover { ...{ ...otherProps, ...popoverProps } }>
        <Popup { ...componentProps } onClosePopup={ popoverProps.onClose } />
      </Popover>
    </div>
  )
}

PopupPopover.propTypes = {
  classes: PropTypes.object.isRequired,
  parentComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  parentProps: PropTypes.object,
  componentProps: PropTypes.object,
  anchorOrigin: PropTypes.object,
  transformOrigin: PropTypes.object
}

PopupPopover.defaultProps = {
  parentProps: {},
  componentProps: {},
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center'
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center'
  }
}

export default withStyles(styles)(PopupPopover)
