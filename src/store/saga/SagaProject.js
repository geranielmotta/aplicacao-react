import {
  takeLatest, takeEvery, put, call, select
} from 'redux-saga/effects'
import { Creators as ProjectActions, Types } from 'store/reducers/project'
import { Creators as LoadingActions } from 'store/reducers/loading'
import { Creators as CommunicationActions } from 'store/reducers/communication'
import navigate from 'store/reducers/router'
import { getAllProject, addNewProject } from '../api/project/project'

function* doGetAllProject() {
  try {
    const { data } = yield call(getAllProject)

    yield put(ProjectActions.getAllProjects(data.data))
  } catch (error) {
    yield put(
      ProjectActions.failedCreateProject({
        status: 'danger',
        message: `Erro em obter os projetos: ${ error }`
      })
    )
  }
}

function* doCreateproject() {
  const project = yield select(state => state.project.project)

  try {
    const params = {
      token,
      user: project.user,
      name: project.name,
      start: project.start,
      description: project.description,
    }

    const result = yield call(addNewProject, params)

    if (result.data) {
      yield put(
        CommunicationActions.addCommunication({
          status: 'success',
          description: 'Projeto cadastrado com sucesso!'
        })
      )
      yield put(navigate.goProject)
    }
  } catch (error) {
    yield put(
      CommunicationActions.addCommunication({
        status: 'danger',
        description: `Erro ao cadastrar um projeto: ${ error }`
      })
    )
  } finally {
    yield put(LoadingActions.stopLoading())
    yield put(CommunicationActions.removeCommunication())
  }
}

function* SagaProject() {
  yield takeLatest(Types.GET_PROJECTS, doGetAllProject)
  yield takeLatest(Types.ADD_PROJECT, doCreateproject)
}

export default SagaProject