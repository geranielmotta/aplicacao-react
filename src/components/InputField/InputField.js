import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useStyles from './style'
import TextField from '@material-ui/core/TextField'

/**
 *
 * @param props receive {{label: string, type: must be an input type, placeholder: string, required: true or false}}
 * @returns {JSX.Element} input field
 */
const InputField = ({
  id,
  label,
  type,
  placeholder,
  required,
  onchange,
  value,
  helperText,
  min,
  max,
  hasError,
  startAdornment,
  endAdornment,
}) => {
  const classes = useStyles()
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(hasError)
  }, [hasError])

  useEffect(() => {
    if (value !== null && value.length < min && value !== '') {
      setError(true)
    } else {
      setError(false)
    }
  }, [value, min])

  return (
    <div className={classes.root}>
      <label htmlFor={label} className={classes.label}>
        {required && <b style={{ color: '#f44336' }}>* </b>} {label}
      </label>
      <TextField
        autoFocus={error}
        type={type}
        size="small"
        required={required}
        name={label}
        id={id}
        placeholder={placeholder}
        onChange={({ target }) => onchange(target.value)}
        onBlur={({ target }) => error && target.focus()}
        value={value}
        error={error}
        helperText={error ? helperText : ''}
        variant="outlined"
        classes={{ root: classes.input }}
        InputProps={{
          inputProps: { min: min, max: max },
          startAdornment: startAdornment,
          endAdornment: endAdornment,
        }}
      />
    </div>
  )
}

InputField.defaultProps = {
  label: 'Input',
  type: 'text',
  placeholder: 'placeholder',
  required: true,
  onchange: () => {},
  value: '',
  helperText: '',
  min: 0,
  max: 255,
  hasError: false,
  startAdornment: '',
  endAdornment: '',
}

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onchange: PropTypes.func,
  valeu: PropTypes.any,
  helperText: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  hasError: PropTypes.bool,
  startAdornment: PropTypes.any,
  endAdornment: PropTypes.any,
}

export default InputField
