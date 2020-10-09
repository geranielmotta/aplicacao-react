import PropTypes from 'prop-types'

const GuestLayout = (props) => {
  const { children } = props
  return children
}

GuestLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default GuestLayout
