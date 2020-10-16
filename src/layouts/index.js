import React, { Suspense } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import GuestLayout from './GuestLayout'
import { Communication, Loader } from 'components'

const CommomLayoutComponents = () => {
  const loading = useSelector(state => state.loading)
  return (
    <>
      <Communication />
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
  let LayoutComponent = GuestLayout
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
