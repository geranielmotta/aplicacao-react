import React, { Suspense } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Creators as communicationActions } from 'store/reducers/communication'
import Loader from 'components/Loader'
import ToastAlert from 'components/ToastAlert'
import GuestLayout from './GuestLayout'
import AuthenticatedLayout from './AuthenticatedLayout'

const CommomLayoutComponents = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading)
  const communication = useSelector(state => state.communication)
  return (
    <>
      {communication.type && (
        <ToastAlert
          callback={() => dispatch(communicationActions.removeCommunication())}
          open={communication.open}
          type={communication.type}
          message={communication.message}
          title={communication.title}
        />
      )}
      {loading && <Loader />}
    </>
  )
}

/**
 * High Order Component that provides Layout to Components
 *
 * @param nextLayout string
 * @returns {function(*): *}
 */
const withLayout = nextLayout => PagesRouter => {
  let LayoutComponent

  switch (nextLayout) {
    case 'guest':
      LayoutComponent = GuestLayout
      break
    case 'authenticated':
      LayoutComponent = AuthenticatedLayout
      break
    default:
      LayoutComponent = () => null
      break
  }

  const wrapped = props => (
    <>
      <Suspense fallback={<Loader />}>
        <LayoutComponent {...props}>
          <PagesRouter {...props} />
        </LayoutComponent>
      </Suspense>
      <CommomLayoutComponents />
    </>
  )

  return withRouter(wrapped)
}

export default withLayout
