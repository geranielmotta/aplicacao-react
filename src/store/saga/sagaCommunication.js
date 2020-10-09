import { takeLatest, put, all } from 'redux-saga/effects'
import { Creators as communication } from 'store/reducers/communication'

function* addCommunication() {
  yield put(communication.startLoading())
}

function* removeCommunication() {
  yield put(communication.stopLoading())
}

function* SagaCommunication() {
  yield all([
    takeLatest('ACTION_ADD', addCommunication),
    takeLatest('ACTION_REMOVE', removeCommunication),
  ])
}

export default SagaCommunication
