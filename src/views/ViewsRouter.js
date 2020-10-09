import React, { Suspense, useEffect, useState } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { history } from 'store/history'
import { useSelector } from 'react-redux'
import moment from 'moment/moment'
import AuthenticatedPagesRouter from './authenticated/AuthenticatedPagesRouter'
import GuestPagesRouter from './guest/GuestPagesRouter'

const isAuthenticated = ({ token, exp } = {}) => {
  if (token) {
    const now = moment()
    const expiredMoment = moment(exp)

    // if (now.isSameOrBefore(expiredMoment)) {
    return true
    // }
  }
  return false
}

const ViewsRouter = () => {
  const login = useSelector(state => state.login)

  const [authenticated, setAuthenticated] = useState(isAuthenticated(login))

  useEffect(() => {
    setAuthenticated(isAuthenticated(login))
  }, [login])

  const RouterContext = authenticated
    ? AuthenticatedPagesRouter
    : GuestPagesRouter

  return (
    <ConnectedRouter history={history}>
      <Suspense fallback={<div />}>
        <RouterContext />
      </Suspense>
    </ConnectedRouter>
  )
}

export default ViewsRouter
