import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

export default function Input({
  label,
  id,
  type,
  value,
  onChange,
  className,
  InputLabelProps,
}) {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <TextField
        id={id}
        type={type}
        label={label}
        variant="outlined"
        value={value}
        onChange={({ target }) => onChange(target.value)}
        className={className}
        InputLabelProps={InputLabelProps}
        style={{ width: '100%' }}
      />
    </div>
  )
}
Input.defaultProps = {
  label: 'Input',
  id: 'input',
  type: 'text',
  value: 'teste',
  className: '',
  InputLabelProps: {},
  onchange: () => {},
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  InputLabelProps: PropTypes.any,
  onchange: PropTypes.func,
}

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flex: 1,
  },
}))
