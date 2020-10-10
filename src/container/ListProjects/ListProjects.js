import React from 'react'
import PropTypes from 'prop-types'

export default function ListProjects() {
  return (<div style={ { marginBottom: '5%', color: '#000' } }>Lista de projetos</div>)
}

ListProjects.propTypes = {
  project: PropTypes.object
}
