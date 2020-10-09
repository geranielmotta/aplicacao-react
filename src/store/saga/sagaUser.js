import { all, call, put, takeLatest } from 'redux-saga/effects'
import { Creators as userActions } from 'store/reducers/users'
import {
  getAllUsers,
  onDelete,
} from '../server/user/user'
import { Creators as communicationActions } from '../reducers/communication'

function* doGetAllUsers() {
  try {
    const { body, statusCode } = yield call(getAllUsers)
    if (statusCode === 200) {
      yield put(userActions.getAllUsersSuccess(body))
    }
  } catch (error) {
    communicationActions.addCommunication({
      type: 'error',
      title: 'Error',
      message: 'Obtivemos um erro ao buscar a lista de todos os produtos',
    })
  }
}

function* doDeleteUser({ id }) {
  try {
    const { status } = yield call(onDelete, { id })
    if (status === 200) {
      yield put(userActions.getAllUsers())
    }
  } catch (error) {
    communicationActions.addCommunication({
      type: 'error',
      title: 'Error',
      message: 'Obtivemos um erro ao buscar a lista de todos os usuários',
    })
  }
}

function* User() {
  yield all([
    takeLatest('GET_ALL_USERS', doGetAllUsers),
    takeLatest('DELETE_USER', doDeleteUser),
  ])
}

export default User
