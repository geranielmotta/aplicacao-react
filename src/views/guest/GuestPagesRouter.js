import React from 'react'
import RouterSwitch from 'components/RouterSwitch'
import withLayout from 'layouts'
import routes from 'routes/guests'

const GuestScreenRouter = props => <RouterSwitch routes={routes} {...props} />

export default withLayout('/list-projects')(GuestScreenRouter)
