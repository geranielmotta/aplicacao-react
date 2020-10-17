import React from 'react'
import { useStyles } from './styles'
import PropTypes from 'prop-types'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import map from 'lodash/map'
import { Route } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const BreadcrumbsMain = () => {
  const classes = useStyles()

  const breadcrumbNameMap = {
    '/create-project': 'Cadastro de projetos',
    '/create-user': 'Cadastro de usuários',
    '/list-projects': 'Lista de projetos',
    '/list-users': 'Lista de usuários',
  }

  const LinkRouter = props => <Link {...props} component={RouterLink} />

  return (
    <div className={classes.root}>
      <Route>
        {({ location }) => {
          const pathnames = location.pathname.split('/').filter(x => x)
          return (
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <LinkRouter color="inherit" to="/list-projects">
                Início
              </LinkRouter>
              {pathnames.length >= 1 &&
                map(pathnames, ({ value }, index) => {
                  const last = index === pathnames.length - 1
                  const to = `/${pathnames.slice(0, index + 1).join('/')}`

                  return last ? (
                    <Typography
                      color="textPrimary"
                      key={to}
                      style={{ color: '#ffb718' }}
                    >
                      {breadcrumbNameMap[to]}
                    </Typography>
                  ) : (
                    <LinkRouter color="inherit" to={to} key={to}>
                      {breadcrumbNameMap[to]}
                    </LinkRouter>
                  )
                })}
            </Breadcrumbs>
          )
        }}
      </Route>
    </div>
  )
}

BreadcrumbsMain.propTypes = {
  text: PropTypes.string,
  onclick: PropTypes.func,
}

BreadcrumbsMain.defaultProps = {
  text: '',
  onclick: () => {},
}

export default BreadcrumbsMain
