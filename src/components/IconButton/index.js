/* eslint-disable complexity */
import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import debounce from 'lodash/debounce'
import MuiIconButton from '@material-ui/core/IconButton'
import PopoverOver from 'components/PopoverOver'
import clsx from 'clsx'

import useStyles from './styles'

const IconButton = (props) => {
  const {
    withOpacity,
    children,
    className,
    popover,
    popoverProps,
    marginVertical,
    marginHorizontal,
    shadow,
    size,
    loading,
    styleVariant,
    placement,
    debounceReverse,
    debounce: _,
    ...otherProps
    // type
  } = props

  const [popoverId] = useState(
    props.popover ? Math.floor(Math.random() * 1000).toString() : null
  )

  const btnRef = useRef(null)

  const classes = useStyles()

  let onClick = (e) => {
    props.onClick(e)
  }

  if (props.debounce) {
    let debounceConfig = {}
    if (props.debounceReverse) {
      debounceConfig = {
        leading: true,
        trailing: false
      }
    }
    onClick = debounce(onClick, props.debounce, debounceConfig)
  }

  const button = (
    <div
      key="iconButton"
      ref={ btnRef }
      className={ clsx(classes.spanIconButton, {
        [classes.iconButtonMarginHorizontal]: marginHorizontal,
        [classes.iconButtonMarginVertical]: marginVertical
      }) }
    >
      <MuiIconButton
        { ...otherProps }
        className={ clsx({
          [classes.btnShadow]: shadow,
          [classes.mini]: size === 'mini',
          [classes.none]: size === 'none',
          [classes.withOpacity]: withOpacity,
          [classes[styleVariant]]: !isEmpty(classes[styleVariant]),
          [className]: className
        }) }
        onClick={ loading ? () => {} : onClick }
      >
        { children}
      </MuiIconButton>
    </div>
  )

  return popover
    ? [
      button,
      <PopoverOver
        key="popover"
        popoverId={ popoverId }
        { ...popoverProps }
        anchorEl={ btnRef }
      />
    ]
    : button
}

IconButton.propTypes = {
  withOpacity: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func,
  popover: PropTypes.bool,
  popoverProps: PropTypes.shape(),
  className: PropTypes.string,
  marginVertical: PropTypes.bool,
  marginHorizontal: PropTypes.bool,
  shadow: PropTypes.bool,
  size: PropTypes.oneOf(['normal', 'mini', 'none']),
  loading: PropTypes.bool.isRequired,
  debounce: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  debounceReverse: PropTypes.bool,
  styleVariant: PropTypes.string,
  placement: PropTypes.string,
  /** Used to control the button's purpose,
   This property passes the value to the type attribute of the native button component. */
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
}

IconButton.defaultProps = {
  withOpacity: false,
  children: '',
  onClick: () => {},
  popover: false,
  popoverProps: {},
  className: null,
  marginVertical: false,
  marginHorizontal: true,
  shadow: false,
  size: 'normal',
  debounce: 200,
  debounceReverse: false,
  styleVariant: null,
  placement: 'bottom',
  type: 'button'
}

export default IconButton
