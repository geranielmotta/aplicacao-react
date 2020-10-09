import { takeLatest, put, all } from 'redux-saga/effects'
import { Creators as loading } from 'store/reducers/loading'

function* addLoader() {
  yield put(loading.startLoading())
}

function* removeLoader() {
  yield put(loading.stopLoading())
}

function* SagaLoader() {
  yield all([
    takeLatest('ACTION_ADD', addLoader),
    takeLatest('ACTION_REMOVE', removeLoader),
    takeLatest('ADD_PROJECT', addLoader),
    takeLatest('PROJECT_CLEAN', removeLoader),
    takeLatest('EDIT_ONE_PROJECT', addLoader),
  ])
}

export default SagaLoader
