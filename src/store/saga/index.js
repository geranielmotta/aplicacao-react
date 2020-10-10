import { all } from 'redux-saga/effects'

import SagaLoader from './sagaLoader'
import SagaCommunication from './sagaCommunication'
import SagaProject from './sagaProject'
import SagaUser from './sagaUser'

export default function* sagas() {
  yield all([
    SagaLoader(),
    SagaCommunication(),
    SagaProject(),
    SagaUser(),
  ])
}
