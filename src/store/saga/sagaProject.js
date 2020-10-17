import { takeLatest, put, call, select } from 'redux-saga/effects'
import { Creators as projectActions } from 'store/reducers/projects'
import { Creators as LoadingActions } from 'store/reducers/loading'
import { Creators as CommunicationActions } from 'store/reducers/communication'
import navigate from 'store/reducers/router'
import {
  getAllProjects,
  getOneProject,
  addNewProject,
  editProject,
} from '../server/project/project'

function* doGetAllProject() {
  try {
    const { data } = yield call(getAllProjects)
    yield put(projectActions.getAllProjectsSuccess(data))
  } catch (error) {
    yield put(
      projectActions.failedCreateProject({
        status: 'danger',
        message: `Erro em obter os projetos: ${error}`,
      })
    )
  }
}

function* doCreateproject({ project }) {
  try {
    const result = yield call(addNewProject, project)

    if (result.data) {
      yield put(
        CommunicationActions.addCommunication({
          status: 'success',
          description: 'Projeto cadastrado com sucesso!',
        })
      )
      yield put(navigate.goListProject)
    }
  } catch (error) {
    yield put(
      CommunicationActions.addCommunication({
        status: 'error',
        description: `Erro ao cadastrar um projeto: ${error}`,
      })
    )
  } finally {
    yield put(LoadingActions.stopLoading())
    yield put(CommunicationActions.removeCommunication())
  }
}

function* SagaProject() {
  yield takeLatest('GET_ALL_PROJECT', doGetAllProject)
  yield takeLatest('ADD_PROJECT', doCreateproject)
}

export default SagaProject
