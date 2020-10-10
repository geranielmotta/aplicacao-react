import React from 'react'
import PropTypes from 'prop-types'

export default function ListUsers() {
  return (<div style={ { marginBottom: '5%', color: '#000' } }>Lista de usuários</div>)
}

ListUsers.propTypes = {
  users: PropTypes.object
}
