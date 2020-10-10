import React, { Suspense } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { history } from 'store/history'
import GuestPagesRouter from './guest/GuestPagesRouter'

const ViewsRouter = () => {

 const RouterContext =  GuestPagesRouter

  return (
    <ConnectedRouter history={history}>
      <Suspense fallback={<div />}>
        <RouterContext />
      </Suspense>
    </ConnectedRouter>
  )
}

export default ViewsRouter
